const bcrypt = require('bcrypt');
const UserModel = require('./user.model');
const TokenService = require('../../token.service');

class UserService {
  static async registerUser(user) {
    const createdUser = new UserModel({
      ...user,
      password: await bcrypt.hash(user.password, 10),
    });
    await createdUser.save();
    return createdUser;
  }

  static async loginUser(credentials) {
    const foundUser = await UserModel.findOne({
      username: credentials.username,
    });

    if (!foundUser) {
      throw new Error('User not found');
    }

    const isPasswordCorrect = await bcrypt.compare(credentials.password, foundUser.password);

    if (!isPasswordCorrect) {
      throw new Error('Wrong password');
    }

    return {
      user: foundUser,
      token: TokenService.generate(foundUser?.id),
    };
  }

  static async deleteUser(id) {
    const answer = await UserModel.deleteOne({
      _id: id,
    });
    if (answer.deletedCount === 0) {
      throw new Error('User not found');
    }
    return id;
  }
}

module.exports = UserService;
