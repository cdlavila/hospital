const UserResolver = require('../components/user/user.resolver')
const HospitalResolver = require('../components/hospital/hospital.resolver')
const DoctorResolver = require('../components/doctor/doctor.resolver')


const resolvers = {
  Query: {
    hello: () => 'Hello world!',

    // Hospitals
    allHospitals: HospitalResolver.getAllHospitals,

    // Doctors
    allDoctors: DoctorResolver.getAllDoctors,
  },

  Mutation: {
    hello: () => 'Hello world!',

    // Users
    registerUser: UserResolver.registerUser,
    loginUser: UserResolver.loginUser,
    deleteUser: UserResolver.deleteUser,

    // Hospitals
    createHospital: HospitalResolver.createHospital,
    updateHospital: HospitalResolver.updateHospital,
    deleteHospital: HospitalResolver.deleteHospital,

    // Doctors
    createDoctor: DoctorResolver.createDoctor,
    updateDoctor: DoctorResolver.updateDoctor,
    deleteDoctor: DoctorResolver.deleteDoctor,
  }
}

module.exports = resolvers
