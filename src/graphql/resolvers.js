const UserResolver = require('../components/user/user.resolver')
const HospitalResolver = require('../components/hospital/hospital.resolver')
const DoctorResolver = require('../components/doctor/doctor.resolver')


const resolvers = {
  Query: {
    hello: () => 'Hello world!',

    // Users

    // Hospitals

    // Doctors
    allDoctors: DoctorResolver.getAllDoctors
  }
}

module.exports = resolvers
