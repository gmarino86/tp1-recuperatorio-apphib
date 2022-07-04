import express from 'express'
import alumnosController from '../controllers/alumnos.controller.api.js'
import examenesController from '../controllers/examenes.controller.api.js'

const route = express.Router()

// - [X]  Traer todos los alumnos de esta universidad
//   http://localhost:2022/api/alumnos
route.get('/alumnos', alumnosController.findAll)

// - [ ]  Traer todos los exámenes de un alumno particular
//   http://localhost:2022/api/alumnos/1
route.get('/alumnos/:legajo', examenesController.findByLegajo)

route.get('/nuevo-alumno', alumnosController.newStudent)
route.post('/nuevo-alumno', alumnosController.create)
export default route


//     - [ ]  Poder filtrar por nombre de la materia
// - [ ]  Traer todas las Materias que tiene actualmente la universidad
// - [ ]  Modificar la nota de un examen que realizo un alumno
// - [ ]  Permitir crear un examen a un alumno
// - [ ]  Eliminar un examen de un alumno
// - [ ]  Crear una Materia
// - [ ]  Modificar una materia
