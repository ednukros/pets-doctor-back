"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePatient = exports.postPatient = exports.deletePatient = exports.getPatient = exports.getPatients = void 0;
const getPatients = (req, res) => {
    res.json({
        msg: 'get de patients'
    });
};
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
