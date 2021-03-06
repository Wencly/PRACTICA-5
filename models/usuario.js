const {Schema, model} =  require('mongoose')

const UsuarioSchema= Schema({
    nombre:{
        type:String,
        require:[true, 'El nombre es obligatorio']
    },
    correo:{
        type:String,
        require:[true, 'El nombre es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        require:[true, 'El password es obligatorio']
    },
    img:{
        type:String
    },
    role:{
        type:String,
        required:true,
        enum:["ROL_ADMIN","ROL_USUARIO"]
    },
    estado:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    }
})
module.exports= model('Usuario',UsuarioSchema)