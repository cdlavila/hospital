const statusCode = require('../../network/status-code');
const Response = require('../../network/response');
const service = require('./service');

class Controller {
  static async createDoctor(req, res) {
    try {
      const doctor = await service.createDoctor(req?.body);
      return Response.success(res, statusCode?.CREATED, doctor, 'Doctor created successfully');
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error?.message);
    }
  }

  static async getAllDoctors(req, res) {
    try {
      const messages = await service.getAllDoctors(req?.query?.hospital);
      return Response.success(res, statusCode?.OK, messages, 'Doctor list');
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error?.message);
    }
  }

  static async updateDoctor(req, res) {
    try {
      const doctor = await service.updateDoctor(req?.params?.id, req?.body);
      return Response.success(res, statusCode?.OK, doctor, 'Doctor updated successfully');
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error?.message);
    }
  }

  static async deleteDoctor(req, res) {
    try {
      if (!req?.params?.id) return Response.error(res, statusCode?.BAD_REQUEST, 'Doctor id is required');
      await service.deleteDoctor(req?.params?.id);
      return Response.success(res, statusCode?.NO_CONTENT);
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error?.message);
    }
  }
}

module.exports = Controller;
