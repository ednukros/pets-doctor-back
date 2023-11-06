import { Request, Response } from 'express'
import Appointment from '../models/appointment';

export const getAppointments = async (req: Request, res: Response) => {

    const listAppointment = await Appointment.findAll()
    res.json(listAppointment);

}

export const getAppointment = async (req: Request, res: Response) => {

    const { id } = req.params;
    const patient = await Appointment.findByPk(id)


    if (patient) {
        res.json(patient)

    } else {
        res.status(404).json({
            msg: `No existe el paciente con id ${id}`
        })
    }

}

export const deleteAppointment = async (req: Request, res: Response) => {

    const { id } = req.params;
    const patient = await Appointment.findByPk(id)

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

export const postAppointment = async (req: Request, res: Response) => {

    const { body } = req;

    try {
        await Appointment.create(body);
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

export const updateAppointment = async (req: Request, res: Response) => {

    const { body } = req;
    const { id } = req.params;
try {
    const patient = await Appointment.findByPk(id)
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
