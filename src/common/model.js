const mongoose = require('mongoose');
const uuid = require('uuid');

const gameQuestionSchema = new mongoose.Schema(
  {
    lang: String,
    difficultyLevel: Number,
    question: String,
    answers: {
      a: String,
      b: String,
      c: String,
      d: String
    },
    correctAnswer: String,
    _id: {
      type: String,
      default: uuid.v1
    },
  },
  {
    versionKey: false
  }
);

gameQuestionSchema.statics.toResponse = gameQuestion => {
  const { _id: id, lang, difficultyLevel, question, answers } = gameQuestion;
  return { id, lang, difficultyLevel, question, answers };
};

const GameQuestion = mongoose.model('GameQuestion', gameQuestionSchema);

module.exports = { GameQuestion };
