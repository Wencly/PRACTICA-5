const { response } = require("express");
const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs');
const { validationResult } = require("express-validator");




const usuariosGet = (req, res = response) => {
  res.json({
    mensaje: "GET API CONTROLLER",
  });
};
const usuariosPut = (req, res = response) => {
  res.json({
    mensaje: "PUT API CONTROLLER",
  });
};
const usuariosPost = async (req, res = response) => {
 

    const {nombre, correo, password, role} = req.body

    const existeCorreo=await Usuario.findOne({correo})
  if(existeCorreo){
    return res.status(400).json({
      mensaje:"el correo esta registrado"
    })
  }
    const usuario = new Usuario({nombre, correo, password, role})
    const salt=bcryptjs.genSaltSync()
    usuario.password=bcryptjs.hashSync(password,salt)
    await usuario.save()
    res.json({
    mensaje: "POST API CONTROLLER",
    usuario
  });
};
const usuariosDelete = (req, res = response) => {
  res.json({
    mensaje: "DELETE API CONTROLLER",
  });
}
const usuariosPatch = (req, res = response) => {
  res.json({
    mensaje: "PATCH API CONTROLLER",
  });
};
module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch
}