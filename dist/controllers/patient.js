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
exports.updatePatient = exports.postPatient = exports.deletePatient = exports.getPatient = exports.getPatients = void 0;
const patient_1 = __importDefault(require("../models/patient"));
const getPatients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPatient = yield patient_1.default.findAll();
    res.json(listPatient);
});
exports.getPatients = getPatients;
const getPatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const patient = yield patient_1.default.findByPk(id);
    if (patient) {
        res.json(patient);
    }
    else {
        res.status(404).json({
            msg: `No existe el paciente con id ${id}`
        });
    }
});
exports.getPatient = getPatient;
const deletePatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const patient = yield patient_1.default.findByPk(id);
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
exports.deletePatient = deletePatient;
const postPatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield patient_1.default.create(body);
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
exports.postPatient = postPatient;
const updatePatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const patient = yield patient_1.default.findByPk(id);
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
exports.updatePatient = updatePatient;
