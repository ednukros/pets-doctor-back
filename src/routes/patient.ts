import { Router } from "express";
import { deletePatient, getPatient, getPatients, postPatient, updatePatient } from "../controllers/patient";

const router = Router();


router.get('/', getPatients);
router.get('/:id', getPatient);
router.delete('/:id', deletePatient);
router.post('/', postPatient);
router.put('/:id', updatePatient);




export default router;