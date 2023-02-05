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

  static async updateHospital(id, data) {
    const foundHospital = await HospitalModel.findById(id);
    if (!foundHospital) {
      throw new Error('Hospital not found');
    }
    const columns = Object.keys(data);
    columns.forEach((column) => {
      foundHospital[column] = data[column];
    });
    await foundHospital.save();
    return foundHospital;
  }

  static async deleteHospital(id) {
    const answer = await HospitalModel.deleteOne({
      _id: id,
    });
    if (answer.deletedCount === 0) {
      throw new Error('Hospital not found');
    }
    return id;
  }
}

module.exports = HospitalService;
