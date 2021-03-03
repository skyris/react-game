const { GameQuestion } = require('../../common/model');

async function checkAnswer(decision) {
    const { id, answer } = decision;
    const questionsArray = await GameQuestion.find({ _id: id });
    const question = questionsArray[0];
    if (question === undefined) {
        return { correct: false };
    }
    const { correctAnswer } = question;
    if (correctAnswer.toLowerCase() === answer.toLowerCase()) {
        return { correct: true };
    }
    return { correct: false };
}

module.exports = { checkAnswer };
