import express from 'express'
import alumnosController from '../controllers/alumnos.controller.js'
import examenesController from '../controllers/examenes.controller.js'

const route = express.Router()

route.get('/', alumnosController.findAll)
route.get('/alumnos/:legajo', examenesController.findByLegajo)
route.get('/nuevo-alumno', alumnosController.newStudent)
route.post('/nuevo-alumno', alumnosController.create)
export default route
