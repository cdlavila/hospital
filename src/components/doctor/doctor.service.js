const DoctorModel = require('./doctor.model');

class DoctorService {
  static async createDoctor(data) {
    const createdDoctor = new DoctorModel(data);
    await createdDoctor.save();
    return createdDoctor;
  }

  static async getAllDoctors(hospital) {
    const filter = !hospital ? {} : { hospital: hospital };
    return DoctorModel.find(filter).populate('hospital');
  }

  static async updateDoctor(id, data) {
    const foundDoctor = await DoctorModel.findById(id);
    const columns = Object.keys(data)
    columns.forEach(column => {
      foundDoctor[column] = data[column]
    })
    await foundDoctor.save();
    return foundDoctor;
  }

  static async deleteDoctor(id) {
    await DoctorModel.deleteOne({
      _id: id,
    });
    return id;
  }
}

module.exports = DoctorService;
