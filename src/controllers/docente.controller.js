import { pool } from '../db.js'

//TRAER TODOS LOS PROFESORES
export const getDocentes = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM docente')
        res.send(rows)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

//TRAER TODOS LOS PROFESORES
export const CrearDocente = async (req, res) => {
    try {
        //extraer los valores del json que lleva en el body
        const { tipoidentificacion,identificacion, primerNombre, segundoNombre, primerApellido, segundoApellido,
            email, telefono, programa } = req.body
console.log(req.body)


        const [rows] = await pool.query(`
            INSERT into docente(tipoIdentificacion,identificacion,primernombre,segundonombre,primerapellido,segundoapellido,email,telefono,programa)
            VALUES(?,?,?,?,?,?,?,?,?)`, [tipoidentificacion,identificacion,primerNombre, segundoNombre, 
                primerApellido, segundoApellido,email, telefono, programa])
        res.send({
            id: rows.insertId,tipoidentificacion,identificacion,primerNombre, segundoNombre, primerApellido, 
            segundoApellido,email, telefono, programa
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

