const UserService = require('./user.service');

class UserResolver {
  static async registerUser(_, { user }) {
    return await UserService.registerUser(user);
  }

  static async loginUser(_, { credentials }) {
    return await UserService.loginUser(credentials);
  }

  static async deleteUser(_, { id }) {
    return await UserService.deleteUser(id);
  }
}

module.exports = UserResolver;
