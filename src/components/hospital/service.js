const Model = require('./model');

class Service {
  static async createHospital(data) {
    const createdHospital = new Model(data);
    await createdHospital.save();
    return createdHospital;
  }

  static async getAllHospitals() {
    return Model.find();
  }
}

module.exports = Service;
