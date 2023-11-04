import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Employee = db.define('Employee', {

    name: {
        type: DataTypes.STRING
    },
   
    phoneNumber: {
        type: DataTypes.NUMBER
    },
    email: {
        type:DataTypes.STRING
    },
    password: {
        type:DataTypes.STRING
    }



},{
    createdAt: false,
    updatedAt:false
})

export default Employee;