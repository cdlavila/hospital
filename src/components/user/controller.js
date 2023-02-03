const statusCode = require('../../network/status-code');
const Response = require('../../network/response');
const service = require('./service');

class Controller {
  static async createUser(req, res) {
    try {
      const user = await service.createUser(req?.body);
      return Response.success(res, statusCode?.CREATED, user, 'User created successfully');
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error?.message);
    }
  }

  static async deleteUser(req, res) {
    try {
      if (!req?.params?.id) return Response.error(res, statusCode?.BAD_REQUEST, 'User id is required');
      await service.deleteUser(req?.params?.id);
      return Response.success(res, statusCode?.NO_CONTENT);
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error?.message);
    }
  }
}

module.exports = Controller;
