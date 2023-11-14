import { Request, Response } from 'express'
import Employee from '../models/employee';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export const getEmployees = async (req: Request, res: Response) => {

    const listEmployee = await Employee.findAll()
    res.json(listEmployee);

}

export const getEmployee = async (req: Request, res: Response) => {

    const { id } = req.params;
    const employee = await Employee.findByPk(id)


    if (employee) {
        res.json(employee)

    } else {
        res.status(404).json({
            msg: `No existe el empleado con id ${id}`
        })
    }

}

export const deleteEmployee = async (req: Request, res: Response) => {

    const { id } = req.params;
    const employee = await Employee.findByPk(id)

    if (!employee) {
        res.status(404).json({
            msg: `No existe un empleado con el id ${id}`
        })

    } else {
        await employee.destroy();
        res.json({
            msg: 'Empleado eliminado con exito'
        })

    }


}

export const postEmployee = async (req: Request, res: Response) => {

    const { body } = req;

    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        await Employee.create(body);
        res.json({
            msg: 'Empleado añadido con exito'
        })


    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ouch, no se pudo crear el empleado :('
        })


    }




}
export const postLogin = async (req: Request, res: Response) => {


    try {
        const employee = req.body;

        const { userName, password } = employee;

        const ifEmployeeExist = await Employee.findOne({
            where: { userName: userName, }

        });

        if (!ifEmployeeExist) {
            res.status(404).json({
                status: 404,
                success: false,
                message: "User not found",
            });
            return;
        }


        const isPasswordMatched =
            ifEmployeeExist.dataValues?.password === password;



        if (!isPasswordMatched) {
            res.status(400).json({
                status: 400,
                success: false,
                message: "wrong password",
            });
            return;
        }

        // jwt token
        const token = jwt.sign(
            { id: ifEmployeeExist.dataValues?.id, email: ifEmployeeExist.dataValues?.email },
            "YOUR_SECRET",
            {
                expiresIn: "1d",
            }
        );

        // send the response
        res.status(200).json({
            status: 200,
            success: true,
            message: "login success",
            token: token,
        });
    } catch (error: any) {
        // Send the error message to the client
        res.status(400).json({
            status: 400,
            message: error.message.toString(),
        });
    }





}

export const updateEmployee = async (req: Request, res: Response) => {

    const { body } = req;
    const { id } = req.params;
    try {
        const employee = await Employee.findByPk(id)
        if (employee) {
            await employee.update(body);
            res.json({
                msg: 'Paciente actualizado'
            })

        } else {
            res.status(404).json({
                msg: 'No existe un paciente con ese id'
            })

        }

    } catch (error) {

        console.log(error);
        res.json({
            msg: 'Ouch, no se pudo editar el paciente :('
        })

    }



}
