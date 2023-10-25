import { Router } from "express";
import { deletePatient, getPatient, getPatients, postPatient } from "../controllers/patient";

const router = Router();


router.get('/', getPatients)
router.get('/:id', getPatient)
router.delete('borrar/:id', deletePatient)
router.post('/', postPatient)



export default router;