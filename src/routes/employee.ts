import { Router } from "express";
import { deleteEmployee, getEmployee, getEmployees, postEmployee, updateEmployee, postLogin } from "../controllers/employee";

const router = Router();

router.post('/registro', postEmployee);
router.post('/login', postLogin);
router.get('/', getEmployees);
router.get('/empleado/:id', getEmployee);
router.delete('/borrar/:id', deleteEmployee);


router.put('/:id', updateEmployee);




export default router;