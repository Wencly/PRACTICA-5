const {Schema, model} = require('mongoose')

const RolSchema = Schema({
    role:{
        type:String,
        required: [true, "el rol es requerido"]
    }
})
module.exports = model('Role', RolSchema)