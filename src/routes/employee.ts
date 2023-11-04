import { Router } from "express";
import { deleteEmployee, getEmployee, getEmployees, postEmployee, updateEmployee } from "../controllers/employee";

const router = Router();


router.get('/', getEmployees);
router.get('/:id', getEmployee);
router.delete('/:id', deleteEmployee);
router.post('/', postEmployee);
router.put('/:id', updateEmployee);




export default router;