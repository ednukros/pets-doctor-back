"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patient_1 = require("../controllers/patient");
const router = (0, express_1.Router)();
router.get('/', patient_1.getPatients);
router.get('/:id', patient_1.getPatient);
router.delete('borrar/:id', patient_1.deletePatient);
router.post('/', patient_1.postPatient);
exports.default = router;