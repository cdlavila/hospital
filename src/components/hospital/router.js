const router = require('express').Router();
const Controller = require('./controller');

router.post('/', Controller.createHospital);
router.get('/', Controller.getAllHospitals);

module.exports = router;
