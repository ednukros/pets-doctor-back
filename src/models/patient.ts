import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Patient = db.define('Patient', {

    name: {
        type: DataTypes.STRING
    },
    species: {
        type: DataTypes.STRING
    },
    race: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    next_appointment: {
        type: DataTypes.DATE
    },



},{
    createdAt: false,
    updatedAt:false
})

export default Patient;