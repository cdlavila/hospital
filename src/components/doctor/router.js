const router = require('express').Router();
const Controller = require('./controller');

router.post('/', Controller.createDoctor);
router.get('/', Controller.getAllDoctors);
router.patch('/:id', Controller.updateDoctor);
router.delete('/:id', Controller.deleteDoctor);

module.exports = router;
