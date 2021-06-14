const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const Role = require('../models/rol')
const {rolValido} = require('../helpers/validadores-db');

const {
  usuariosGet,
  usuariosDelete,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
} = require("../controller/usuarios.controlador");
const rutas = Router();

rutas.get("/", usuariosGet);
rutas.put("/", usuariosPut);
rutas.post("/", [
  check("nombre", "El nombre es obligatorio").not().isEmpty(),
  check("password", "El password es obligatorio, minimo 6 caracteres").isLength(
    { min: 6 }
  ),
  check("correo", "El correo no es valido").isEmail(),
 // check("role", "Rol no permitido").isIn(["ROL_ADMIN", "ROL_USUARIO"]),
 check('role').custom(rolValido),
 validarCampos],
  usuariosPost);
rutas.delete("/", usuariosDelete);
rutas.patch("/", usuariosPatch);
module.exports = rutas;
