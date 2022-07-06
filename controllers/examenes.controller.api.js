import * as ExamenesModel from "../services/examenes.services.js"
import * as AlumnosModel from "../services/alumnos.services.js"

export function findByLegajo(req, res) {
    const legajo = req.params.legajo;
    ExamenesModel.findByLegajo(legajo)
    .then(examenes => {
        if (examenes == null) {
            examenes = [];
        }
        AlumnosModel.findByLegajo(legajo)
        .then(alumno => {
            res.json({
                examenes: examenes,
                alumno: alumno
            })
        })
    })
    .catch(error => {
        res.json(error)
    })
}

export function update(req, res) {
    const examen_id = req.params.examen_id;
    const nota = req.body.nota;
    ExamenesModel.update(examen_id, nota)
    .then(examen => {
        res.json(examen)
    })
    .catch(error => {
        res.json(error)
    })
}

export function create(req, res) {
    const examenData = req.body;
    
    ExamenesModel.create(examenData)
    .then(examen => {
        res.json(examen)
    })
    .catch(error => {
        res.json(error)
    })
}

export function remove(req, res) {
    const examen_id = req.params.examen_id;
    ExamenesModel.remove(examen_id)
    .then(examen => {
        res.json(examen)
    })
    .catch(error => {
        res.json(error)
    })
}

export default {
    findByLegajo,
    update,
    create,
    remove
}
