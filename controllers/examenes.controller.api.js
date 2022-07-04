import * as ExamenesModel from "../services/examenes.services.js"
import * as AlumnosModel from "../services/alumnos.services.js"

export function findByLegajo(req, res) {
    const legajo = req.params.legajo;
    ExamenesModel.findByLegajo(legajo)
    .then(examenes => {
        console.log('Entro al then');
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

export default {
    findByLegajo
}
