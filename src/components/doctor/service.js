const Model = require('./model');

class Service {
  static async createDoctor(data) {
    const createdDoctor = new Model(data);
    await createdDoctor.save();
    return createdDoctor;
  }

  static async getAllDoctors(hospital) {
    const filter = !hospital ? {} : { hospital: hospital };
    return Model.find(filter).populate('hospital');
  }

  static async updateDoctor(id, data) {
    const foundDoctor = await Model.findById(id);
    const columns = Object.keys(data)
    columns.forEach(column => {
      foundDoctor[column] = data[column]
    })
    foundDoctor.save();
    return foundDoctor;
  }

  static async deleteDoctor(id) {
    return Model.deleteOne({
      _id: id,
    });
  }
}

module.exports = Service;
