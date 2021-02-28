const router = require('express').Router();

router.route('/').post(async (req, res) => {
  res.status(200).json({hello: 'world'});
});

module.exports = router;
