import { check } from 'express-validator';
import resultadosValidacion from './resultadoValidacion';

const validarTarea = [
    check('nombreTarea')
    .notEmpty()
    .withMessage('El nombre de la tarea es obligaorio')
    .isLength({min: 2, max: 50})
    .withMessage('La tarea debe tener entre 2 y 50 caracteres'),
    check('precio')
    .notEmpty()
    .withMessage('El precio es un valor obligatorio')
    .custom((value)=>{
        if (value>=0 && value<=9999) 
            return true;
        else
            throw new Error('El precio debe estar entre 0 y 9999');
    }),
    (req,res,next)=>{
        resultadosValidacion(req,res,next);
    }
];

export default validarTarea;

//  "nombreTarea": "banana split",
