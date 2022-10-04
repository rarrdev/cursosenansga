import express from 'express';
import docentesRoutes from './routes/docente.routes.js'

const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


app.use('/api', docentesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'EndPoint no Encontrado'
    })
})

export default app;