const UserModel = require('./user.model');

class UserResolver {
  static async createUser(user) {
    const createdUser = new UserModel(user);
    await createdUser.save();
    return createdUser;
  }

  static async deleteUser(id) {
    return UserModel.deleteOne({
      _id: id,
    });
  }
}

module.exports = UserResolver;
