const DoctorService = require('./doctor.service');

class DoctorResolver {
  static async getAllDoctors(_, args) {
    return await DoctorService.getAllDoctors(args.hospital);
  }
}

module.exports = DoctorResolver;
