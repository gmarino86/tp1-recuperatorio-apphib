import express from 'express'
import AlumnosRoute from './routes/alumnos.routes.js'
import ApiRoute from './routes/api.routes.js'

// Inicio Express
const app = express()
// Motor de vistas
app.set('view engine', 'ejs')
// Carpeta publica
app.use('/', express.static('public'))
// Para pasar data por POST
app.use(express.urlencoded({ extended: false }))
// Rutas
app.use(express.json()) 
app.use('/', AlumnosRoute )
app.use('/api', ApiRoute)

// Inicio el server
app.listen(2022, function () {
    console.log('Server ON! http://localhost:2022')
})

