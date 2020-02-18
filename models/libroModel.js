const mongoose= require('mongoose');

const Schema=mongoose.Schema;
const libroSchema=new Schema  (
{

titulo:{type:String},
genero:{type:String},
autor:{type:String},
leer:{type:Boolean,default:false},


}

);
const LibroModel=mongoose.model("libroModel",libroSchema);

module.exports= LibroModel;

