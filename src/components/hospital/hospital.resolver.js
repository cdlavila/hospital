const HospitalService = require('./hospital.service');

class HospitalResolver {
  static async getAllHospitals() {
    return await HospitalService.getAllHospitals();
  }

  static async createHospital(_, { hospital }) {
    return await HospitalService.createHospital(hospital);
  }

  static async updateHospital(_, { id, hospital }) {
    return await HospitalService.updateHospital(id, hospital);
  }

  static async deleteHospital(_, { id }) {
    return await HospitalService.deleteHospital(id);
  }
}

module.exports = HospitalResolver;
