const router = require('express').Router();
const overViewController = require('../controller/overview.controller');

router.get('/', overViewController.showAll);
router.get('/:id', overViewController.show);
router.post('/', overViewController.add);
router.put('/:id', overViewController.edit);

module.exports = router;