const mongoose = require("mongoose");
const ConexionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Conexion Status: SUCCESS");
  } catch (error) {
    console.log(error);
    throw new Error("Fallo conexion");
  }
};
module.exports = {
  ConexionDB
};
