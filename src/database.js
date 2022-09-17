import mongoose from 'mongoose';

//base de datos local
const url = 'mongodb://localhost:27017/tareasc2i';

//Conexion a DB como lo vimos en clase
mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('base de datos conectada');
})

