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
const getPatient = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'get de patients',
        id
    });
};
exports.getPatient = getPatient;
const deletePatient = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'delete de patients',
        id
    });
};
exports.deletePatient = deletePatient;
const postPatient = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'post patients',
        body
    });
};
exports.postPatient = postPatient;
const updatePatient = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    console.log(body);
    res.json({
        msg: 'update patients',
        id,
        body
    });
};
exports.updatePatient = updatePatient;
