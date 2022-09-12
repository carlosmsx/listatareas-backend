import mongoose, {Schema} from 'mongoose';

const tareaSchema = new Schema({
    nombreTarea: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
        unique: true
    },
    imagen: {
        type: String,
        required: true        
    },
    precio: {
        type: Number,
        required: true,
        min: 0,
        max: 9000
    },
    categoria: {
        type: String,
        required: true,
        maxLength: 40
    }    
});

const Tarea = mongoose.model('tarea', tareaSchema);

export default Tarea;