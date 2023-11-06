"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAppointment = exports.postAppointment = exports.deleteAppointment = exports.getAppointment = exports.getAppointments = void 0;
const appointment_1 = __importDefault(require("../models/appointment"));
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAppointment = yield appointment_1.default.findAll();
    res.json(listAppointment);
});
exports.getAppointments = getAppointments;
const getAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const patient = yield appointment_1.default.findByPk(id);
    if (patient) {
        res.json(patient);
    }
    else {
        res.status(404).json({
            msg: `No existe el paciente con id ${id}`
        });
    }
});
exports.getAppointment = getAppointment;
const deleteAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const patient = yield appointment_1.default.findByPk(id);
    if (!patient) {
        res.status(404).json({
            msg: `No existe un paciente con el id ${id}`
        });
    }
    else {
        yield patient.destroy();
        res.json({
            msg: 'Paciente eliminado con exito'
        });
    }
});
exports.deleteAppointment = deleteAppointment;
const postAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield appointment_1.default.create(body);
        res.json({
            msg: 'Paciente añadido con exito'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ouch, no se pudo crear el paciente :('
        });
    }
});
exports.postAppointment = postAppointment;
const updateAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const patient = yield appointment_1.default.findByPk(id);
        if (patient) {
            yield patient.update(body);
            res.json({
                msg: 'Paciente actualizado'
            });
        }
        else {
            res.status(404).json({
                msg: 'No existe un paciente con ese id'
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ouch, no se pudo editar el paciente :('
        });
    }
});
exports.updateAppointment = updateAppointment;
