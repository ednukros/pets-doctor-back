import { Request, Response } from 'express'

export const getPatients = (req: Request, res: Response) => {
    console.log('hola get');

    res.json({
        msg:'get de patients'
    })

}

export const getPatient  = (req: Request, res: Response) => {

    const { id } = req.params;
    console.log('hola get');


    res.json({
        msg:'get de patients',
        id
    })

}

export const deletePatient  = (req: Request, res: Response) => {

    const { id } = req.params;
    

    res.json({
        msg:'delete de patients',
        id
    })

}

export const postPatient  = (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        msg:'post patients',
        body
        
    })

}

export const updatePatient  = (req: Request, res: Response) => {

    const { body } = req;
    const { id } = req.params;

    console.log(body);

    res.json({
        msg:'update patients',
        id,
        body
        
    })

}
