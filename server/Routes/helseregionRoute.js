const router = require('express').Router();

router.get('/', async (req, res) => {
  return res.status(200).send('helseregion');
});
module.exports = router;
