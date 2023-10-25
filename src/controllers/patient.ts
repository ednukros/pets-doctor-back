import { Request, Response } from 'express'
import Patient from '../models/patient';

export const getPatients = async (req: Request, res: Response) => {

    const listPatient = await Patient.findAll()
    res.json(listPatient);

}

export const getPatient = (req: Request, res: Response) => {

    const { id } = req.params;


    res.json({
        msg: 'get de patients',
        id
    })

}

export const deletePatient = (req: Request, res: Response) => {

    const { id } = req.params;


    res.json({
        msg: 'delete de patients',
        id
    })

}

export const postPatient = (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        msg: 'post patients',
        body

    })

}

export const updatePatient = (req: Request, res: Response) => {

    const { body } = req;
    const { id } = req.params;

    console.log(body);

    res.json({
        msg: 'update patients',
        id,
        body

    })

}
