import { check } from 'express-validator';
import resultadosValidacion from './resultadoValidacion';

const validarTarea = [
    check('nombre')
    .notEmpty()
    .withMessage('El nombre de la tarea es obligaorio')
    .isLength({min: 2, max: 30})
    .withMessage('La tarea debe tener entre 2 y 30 caracteres'),
    check('descripcion')
    .notEmpty()
    .withMessage('La descripcion es obligatoria')
    .isLength({min: 2, max: 100})
    .withMessage('La descripcion debe tener entre 2 y 100 caracteres'),
    (req,res,next)=>{
        resultadosValidacion(req,res,next);
    }
];

export default validarTarea;
