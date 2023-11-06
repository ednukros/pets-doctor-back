import { Router } from "express";
import { deleteAppointment, getAppointment, getAppointments, postAppointment, updateAppointment } from "../controllers/appointment";

const router = Router();


router.get('/', getAppointments);
router.get('/:id', getAppointment);
router.delete('/:id', deleteAppointment);
router.post('/', postAppointment);
router.put('/:id', updateAppointment);




export default router;