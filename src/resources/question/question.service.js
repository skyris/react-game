const { GameQuestion } = require('../../common/model');

const langValidation = lang => ['en', 'ru'].includes(lang) ? lang : 'ru';
const levelValidation = level => {
  level = +level;
  return (level >= 0 && level <= 15) ? level : 0;
}

async function getRandomQuestionOfLevel(level, lang) {
  const validLang = langValidation(lang);
  const validLevel = levelValidation(level);
  const questionsArray = await GameQuestion
    .find({difficultyLevel: validLevel, lang: validLang});
  const randomQuestion = questionsArray[
    Math.floor(Math.random() * questionsArray.length)
  ];

  return GameQuestion.toResponse(randomQuestion);
}

module.exports = { getRandomQuestionOfLevel };
