const UserResolver = require('../components/user/user.resolver')
const HospitalResolver = require('../components/hospital/hospital.resolver')
const DoctorResolver = require('../components/doctor/doctor.resolver')


const resolvers = {
  Query: {
    hello: () => 'Hello world!',

    // Users

    // Hospitals

    // Doctors
    allDoctors: DoctorResolver.getAllDoctors,
  },

  Mutation: {
    hello: () => 'Hello world!',

    // Users

    // Hospitals

    // Doctors
    createDoctor: DoctorResolver.createDoctor,
    updateDoctor: DoctorResolver.updateDoctor,
    deleteDoctor: DoctorResolver.deleteDoctor,
  }
}

module.exports = resolvers
