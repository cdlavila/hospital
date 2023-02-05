const HospitalService = require('./hospital.service');

class HospitalResolver {
  static async getAllHospitals() {
    return HospitalService.getAllHospitals();
  }

  static async createHospital(_, { hospital }) {
    return HospitalService.createHospital(hospital);
  }

  static async updateHospital(_, { id, hospital }) {
    return HospitalService.updateHospital(id, hospital);
  }

  static async deleteHospital(_, { id }) {
    return HospitalService.deleteHospital(id);
  }
}

module.exports = HospitalResolver;
