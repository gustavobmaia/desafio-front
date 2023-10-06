const RegisterService = require("./factory");

module.exports.getAll = async (event) => {
  return await RegisterService.getAll();
};

module.exports.getOne = async (event) => {
  const { id } = event.pathParameters;
  return await RegisterService.getOne(id);
};

module.exports.create = async (event) => {
  const data = event.body;
  return await RegisterService.create(data);
};
