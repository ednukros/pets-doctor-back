import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Appointment = db.define('Appointment', {

    id_patient: {
        type: DataTypes.STRING
    },
   
    namePatient: {
        type: DataTypes.NUMBER
    },
    nameCustomer: {
        type:DataTypes.STRING
    },
    dateOfAppointment: {
        type:DataTypes.STRING
    }
   
  



},{
    createdAt: false,
    updatedAt:false
})

export default Appointment;