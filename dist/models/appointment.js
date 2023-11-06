"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Appointment = connection_1.default.define('Appointment', {
    id_patient: {
        type: sequelize_1.DataTypes.STRING
    },
    namePatient: {
        type: sequelize_1.DataTypes.NUMBER
    },
    nameCustomer: {
        type: sequelize_1.DataTypes.STRING
    },
    dateOfAppointment: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Appointment;
