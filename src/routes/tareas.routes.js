import {Router} from 'express';
import { crearTarea, listarTareas, obtenerTarea, editarTarea, borrarTarea } from '../controllers/tareas.controllers';
import validarTarea from '../helpers/validacionTarea';

const router = Router();

console.log("init routes");
//crear todas las rutas que tienen que ver con los productos
router.route('/tareas')
.get(listarTareas)
.post( validarTarea, crearTarea);

router.route('/tareas/:id')
.get(obtenerTarea)
.put(editarTarea)
.delete(borrarTarea);

export default router;


