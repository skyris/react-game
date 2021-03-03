const router = require('express').Router();
const { checkAnswer } = require('./checkAnswer.service');

router.route('/').post(async (req, res) => {
  const decision = req.body;
  const result = await checkAnswer(decision)
  res.status(200).json(result);
});

module.exports = router;
