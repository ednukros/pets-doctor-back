import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Employee = db.define('Employee', {
    userName:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    } ,
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    } ,
    password:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: false
    } ,
    role: {
        type: DataTypes.STRING,
        defaultValue: 'vet',
        unique: false
    },
    name: {
        type: DataTypes.STRING
    },
   
    phoneNumber: {
        type: DataTypes.NUMBER
    },
   
    speciality: {
        type:DataTypes.STRING
    },
    image: {
        type:DataTypes.STRING

    }



},{
    createdAt: false,
    updatedAt:false
})

export default Employee;