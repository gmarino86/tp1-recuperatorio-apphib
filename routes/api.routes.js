import express from 'express'
import alumnosController from '../controllers/alumnos.controller.api.js'
import examenesController from '../controllers/examenes.controller.api.js'
import materiasController  from '../controllers/materias.controller.api.js'

const route = express.Router()
// - [X]  Traer todos los alumnos de esta universidad
route.get('/alumnos', alumnosController.findAll) //http://localhost:2022/api/alumnos

// - [X]  Traer todos los exámenes de un alumno particular
route.get('/examenes/:legajo', examenesController.findByLegajo) //http://localhost:2022/api/examenes/1

// - [X]  Poder filtrar por nombre de la materia
route.post('/materias/filtrar', materiasController.findByMateria) // http://localhost:2022/api/materias/filtrar   body = [{"materia":"Aplicaciones Hibridas"}]

// - [ ]  Traer todas las Materias que tiene actualmente la universidad
route.get('/materias', materiasController.findByAll) // http://localhost:2022/api/materias

// - [X]  Modificar la nota de un examen que realizo un alumno
route.patch('/examenes/:examen_id', examenesController.update) // http://localhost:2022/api/examenes/62c3768685b04d177b0b033d   body = {"nota":4}

// - [X]  Permitir crear un examen a un alumno
route.post('/examenes', examenesController.create) // http://localhost:2022/api/examenes   body = {"legajo":3,"materia":"App Por API","nota":10, "fecha_examen":"2022-08-17 20:45"}

// - [X]  Eliminar un examen de un alumno
route.delete('/examenes/:examen_id', examenesController.remove) // http://localhost:2022/api/examenes/62c3768685b04d177b0b033d  body = {}

// - [X]  Crear una Materia
route.post('/materias', materiasController.create) // http://localhost:2022/api/materias   body = {"nombre":"Programacion II"}

// - [X]  Modificar una materia
route.patch('/materias/:materia_id', materiasController.update) // http://localhost:2022/api/materias/62c37cb903134faedb7039cc   body = {"nombre":"Programacion Modificada"}
export default route