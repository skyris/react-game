const router = require('express').Router();
const { getRandomQuestionOfLevel } = require('./question.service');

router.route('/').post(async (req, res) => {
  const { level, lang } = req.body;
  const data = await getRandomQuestionOfLevel(level, lang);
  res.status(200).json(data);
});

module.exports = router;
