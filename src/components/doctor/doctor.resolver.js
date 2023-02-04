const DoctorService = require('./doctor.service');

class DoctorResolver {
  static async getAllDoctors(_, args) {
    return await DoctorService.getAllDoctors(args.hospital);
  }

  static async createDoctor(_, { doctor }) {
    return await DoctorService.createDoctor(doctor);
  }

  static async updateDoctor(_, { id, changes }) {
    return await DoctorService.updateDoctor(id, changes);
  }

  static async deleteDoctor(_, { id }) {
    return await DoctorService.deleteDoctor(id);
  }
}

module.exports = DoctorResolver;
