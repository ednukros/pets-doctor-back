"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Employee = connection_1.default.define('Employee', {
    userName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    role: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'vet',
        unique: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.NUMBER
    },
    speciality: {
        type: sequelize_1.DataTypes.STRING
    },
    image: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Employee;
