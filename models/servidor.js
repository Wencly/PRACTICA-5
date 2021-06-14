const express = require("express");
const cors = require("cors");
const { ConexionDB } = require("../database/config");

class Servidor {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.conectarDB();
    this.routes();
  }
  async conectarDB() {
    ConexionDB();
  }

  routes() {
    this.app.use("/api/usuarios", require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor iniciado en ${this.port}`);
    });
  }
  middlewares() {
    this.app.use(cors());

    this.app.use(express.json());

    this.app.use(express.static("public"));
  }
}
module.exports = Servidor;
