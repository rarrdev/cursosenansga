import { Router } from "express";
import {
    getDocentes,
    CrearDocente
}from '../controllers/docente.controller.js'

const router = Router();



router.get('/docente', getDocentes);
router.post('/docente', CrearDocente);



export default router