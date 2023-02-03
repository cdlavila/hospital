const router = require('express').Router();
const Controller = require('./controller');

router.post('/', Controller.createChat);
router.get('/:userId', Controller.getAllChats);

module.exports = router;
