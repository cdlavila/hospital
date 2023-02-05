const UserService = require('./user.service');

class UserResolver {
  static async registerUser(_, { user }) {
    return UserService.registerUser(user);
  }

  static async loginUser(_, { credentials }) {
    return UserService.loginUser(credentials);
  }

  static async deleteUser(_, { id }) {
    return UserService.deleteUser(id);
  }
}

module.exports = UserResolver;
