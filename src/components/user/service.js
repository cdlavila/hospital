const Model = require('./model');

class Service {
  static async createUser(user) {
    const createdUser = new Model(user);
    await createdUser.save();
    return createdUser;
  }

  static async deleteUser(id) {
    return Model.deleteOne({
      _id: id,
    });
  }
}

module.exports = Service;
