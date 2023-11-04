import { Request, Response } from 'express'
import Employee from '../models/patient';

export const getEmployees = async (req: Request, res: Response) => {

    const listEmployee = await Employee.findAll()
    res.json(listEmployee);

}

export const getEmployee = async (req: Request, res: Response) => {

    const { id } = req.params;
    const patient = await Employee.findByPk(id)


    if (patient) {
        res.json(patient)

    } else {
        res.status(404).json({
            msg: `No existe el paciente con id ${id}`
        })
    }

}

export const deleteEmployee = async (req: Request, res: Response) => {

    const { id } = req.params;
    const patient = await Employee.findByPk(id)

    if (!patient) {
        res.status(404).json({
            msg: `No existe un paciente con el id ${id}`
        })

    } else {
        await patient.destroy();
        res.json({
            msg: 'Paciente eliminado con exito'
        })

    }


}

export const postEmployee = async (req: Request, res: Response) => {

    const { body } = req;

    try {
        await Employee.create(body);
        res.json({
            msg: 'Paciente añadido con exito'
        })


    } catch (error) {
        console.log(error);
        res.json({
            msg:'Ouch, no se pudo crear el paciente :('
        })
        

    }




}

export const updateEmployee = async (req: Request, res: Response) => {

    const { body } = req;
    const { id } = req.params;
try {
    const patient = await Employee.findByPk(id)
    if (patient) {
        await patient.update(body);
        res.json({
            msg:'Paciente actualizado'
        })
      
    } else {
        res.status(404).json({
            msg:'No existe un paciente con ese id'
        })
        
    }

} catch (error) {

    console.log(error);
    res.json({
        msg:'Ouch, no se pudo editar el paciente :('
    })
    
}



}
