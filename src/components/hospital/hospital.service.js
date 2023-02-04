const HospitalModel = require('./hospital.model');

class HospitalService {
  static async createHospital(data) {
    const createdHospital = new HospitalModel(data);
    await createdHospital.save();
    return createdHospital;
  }

  static async getAllHospitals() {
    return HospitalModel.find();
  }
}

module.exports = HospitalService;
