const router = require('express').Router();
const Controller = require('./controller');

router.post('/', Controller.createUser);
router.delete('/:id', Controller.deleteUser);

module.exports = router;
