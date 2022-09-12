import Tarea from "../models/tarea";

export const crearTarea = async (req,res)=>{
    try{
        //crear un objeto para guardar en la DB
        const tareaNueva = new Tarea({
            nombreTarea: req.body.nombreTarea,
            imagen: req.body.imagen,
            precio: req.body.precio,
            categoria: req.body.categoria
        }); //const tareaNueva = new Tarea(req.body);
        //guardar efectivamente
        await tareaNueva.save();
        //enviar respuesta al frontend
        //res.status(201); estaría bien asi
        //opcional enviar un mensaje: 
        res.status(201).json({mensaje:'tarea creada exitosamente'});
    
        //si algo falla tambien enviar una respuesta
    }
    catch(error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'La tarea enviada no pudo ser creada'
        })
    }
}

export const listarTareas = async (req,res)=>{
    try {
        //buscar en la DB la 'collection' de tareas
        const listaTareas = await Tarea.find();
        //enviar la respuesta al frontend
        res.status(200).json(listaTareas);
    } 
    catch (error) {
        console.log(error);
        res.status(404).json({mensaje: "Error al buscar las tareas"})
    }
}

export const obtenerTarea = async (req,res)=>{
    try {
        console.log(req.params)
        //buscar en la DB el tarea
        const tareaBuscado = await Tarea.findById(req.params.id);
        //enviar la respuesta al frontend
        res.status(200).json(tareaBuscado);
    } 
    catch (error) {
        console.log(error);
        res.status(404).json({mensaje: "tarea no encontrada"})
    }
}

export const editarTarea = async (req,res)=>{
    try {
        //validar
        console.log(req.params.id);
        console.log(req.body);
        //buscar
        await Tarea.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({mensaje: "edicion ok"});
    } catch (error) {
        console.log(error);
        res.status(400).json({mensaje:"edicion error"});
    }
}

export const borrarTarea = async (req,res)=>{
    try {
        //buscar un tarea por el id y luego borrarlo
        await Tarea.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: "la tarea fue eliminada correctamente"});
    } catch (error) {
        console.log(error);
        res.status(400).json({mensaje: 'Error al intentar borrar la tarea'});
    }
}