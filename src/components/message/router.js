const router = require('express').Router();
const Controller = require('./controller');

router.post('/', Controller.createMessage);
router.get('/', Controller.getAllMessages);
router.patch('/:id', Controller.updateMessage);
router.delete('/:id', Controller.deleteMessage);

module.exports = router;
