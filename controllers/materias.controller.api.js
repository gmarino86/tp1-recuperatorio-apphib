import * as MateriasModel from "../services/materias.services.js"

export function findByMateria(req, res) {
    MateriasModel.findByMateria(req.body[0].materia)
    .then(materias => {
        res.json(materias)
    })
    .catch(error => {
        res.json(error)
    })
}

export function findByAll(req, res) {
    MateriasModel.findByAll()
    .then(materias => {
        res.json(materias)
    })
    .catch(error => {
        res.json(error)
    })
}

export function create(req, res) {
    MateriasModel.create(req.body)
    .then(materia => {
        res.json(materia)
    })
    .catch(error => {
        res.json(error)
    })
}

export function update(req, res) {
    const materia_id = req.params.materia_id;
    MateriasModel.update(materia_id, req.body.nombre)
    .then(materia => {
        res.json(materia)
    })
    .catch(error => {
        res.json(error)
    })
}

export default {
    findByMateria,
    findByAll,
    create,
    update
}
