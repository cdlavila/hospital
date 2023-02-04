const DoctorModel = require('./doctor.model');

class DoctorService {
  static async createDoctor(data) {
    const createdDoctor = new DoctorModel(data);
    await createdDoctor.save();
    return DoctorModel.findById(createdDoctor._id)
      .populate('hospital');
  }

  static async getAllDoctors(hospital) {
    const filter = !hospital ? {} : { hospital: hospital };
    return DoctorModel.find(filter).populate('hospital');
  }

  static async updateDoctor(id, data) {
    const foundDoctor = await DoctorModel.findById(id);
    if (!foundDoctor) {
      throw new Error('Doctor not found');
    }
    const columns = Object.keys(data)
    columns.forEach(column => {
      foundDoctor[column] = data[column]
    })
    await foundDoctor.save();
    return foundDoctor;
  }

  static async deleteDoctor(id) {
    const answer = await DoctorModel.deleteOne({
      _id: id,
    });
    if (answer.deletedCount === 0) {
      throw new Error('Doctor not found');
    }
    return id;
  }
}

module.exports = DoctorService;
