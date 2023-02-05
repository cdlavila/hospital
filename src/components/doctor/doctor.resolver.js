const DoctorService = require('./doctor.service');

class DoctorResolver {
  static async getAllDoctors(_, args) {
    return DoctorService.getAllDoctors(args.hospital);
  }

  static async createDoctor(_, { doctor }) {
    return DoctorService.createDoctor(doctor);
  }

  static async updateDoctor(_, { id, changes }) {
    return DoctorService.updateDoctor(id, changes);
  }

  static async deleteDoctor(_, { id }) {
    return DoctorService.deleteDoctor(id);
  }
}

module.exports = DoctorResolver;
