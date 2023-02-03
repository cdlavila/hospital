const statusCode = require('../../network/status-code');
const Response = require('../../network/response');
const service = require('./service');

class Controller {
  static async createHospital(req, res) {
    try {
      const hospital = await service.createHospital(req?.body);
      return Response.success(res, statusCode?.CREATED, hospital, 'Hospital created successfully');
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error?.message);
    }
  }

  static async getAllHospitals(req, res) {
    try {
      const hospitals = await service.getAllHospitals();
      return Response.success(res, statusCode?.OK, hospitals, 'Hospital list');
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error?.message);
    }
  }
}

module.exports = Controller;
