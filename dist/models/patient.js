"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Patient = connection_1.default.define('Patient', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    species: {
        type: sequelize_1.DataTypes.STRING
    },
    race: {
        type: sequelize_1.DataTypes.STRING
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER
    },
    next_appointment: {
        type: sequelize_1.DataTypes.DATE
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Patient;
