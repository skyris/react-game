const questionRouter = require('./question/question.router');
const checkAnswerRouter = require('./checkAnswer/checkAnswer.router');

module.exports = app => {
  app.use('/api/question', questionRouter);
  app.use('/api/check', checkAnswerRouter);
};
