import * as AlumnosModel from "../services/alumnos.services.js"

export function findAll(req, res) {
    AlumnosModel.findAll()
    .then(alumnos => {
        res.render('alumnos', {alumnos})
    })
    .catch((err) => res.status(400).send("No me pude conectar: "+err))
}

export function newStudent(req, res) {
    res.render('nuevo-alumno')
}

export function create(req, res) {
    const data = req.body
    AlumnosModel.create(data)
    .then(() => res.redirect('/'))
    .catch((err) => res.status(400).send("No me pude conectar: "+err))
}

export default {
    findAll,
    create,
    newStudent
}
