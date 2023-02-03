const router = require('express').Router();
const doctorRouter = require('../components/doctor/router');
const userRouter = require('../components/user/router');
const hospitalRouter = require('../components/hospital/router');

router.use('/users', userRouter);
router.use('/hospitals', hospitalRouter);
router.use('/doctors', doctorRouter);

router.get('/', (req, res) => {
  res.send({ message: 'Welcome to the hospitals REST API' });
});

module.exports = router;
