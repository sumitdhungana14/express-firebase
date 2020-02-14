const router = require('express').Router();

const overviewRouter = require('./../modules/overview/routes/overview.routes');

router.use('/overview', overviewRouter);

module.exports = router;