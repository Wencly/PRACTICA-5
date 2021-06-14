const Role = require("../models/rol");
const rolValido = async (role = "") => {
  const existeRol = await Role.findOne({ role });
};
module.exports = {
  rolValido,
};
