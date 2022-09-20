import mongoose, {Schema} from 'mongoose';

const tareaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 30
        //unique: true
    },
    descripcion: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100        
    }
});

const Tarea = mongoose.model('tarea', tareaSchema);

export default Tarea;