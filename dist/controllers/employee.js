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
exports.updateEmployee = exports.postLogin = exports.postEmployee = exports.deleteEmployee = exports.getEmployee = exports.getEmployees = void 0;
const employee_1 = __importDefault(require("../models/employee"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listEmployee = yield employee_1.default.findAll();
    res.json(listEmployee);
});
exports.getEmployees = getEmployees;
const getEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const employee = yield employee_1.default.findByPk(id);
    if (employee) {
        res.json(employee);
    }
    else {
        res.status(404).json({
            msg: `No existe el empleado con id ${id}`
        });
    }
});
exports.getEmployee = getEmployee;
const deleteEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const employee = yield employee_1.default.findByPk(id);
    if (!employee) {
        res.status(404).json({
            msg: `No existe un empleado con el id ${id}`
        });
    }
    else {
        yield employee.destroy();
        res.json({
            msg: 'Empleado eliminado con exito'
        });
    }
});
exports.deleteEmployee = deleteEmployee;
const postEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        req.body.password = bcryptjs_1.default.hashSync(req.body.password, 10);
        yield employee_1.default.create(body);
        res.json({
            msg: 'Empleado añadido con exito'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ouch, no se pudo crear el empleado :('
        });
    }
});
exports.postEmployee = postEmployee;
const postLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const employee = req.body;
        const { userName, password } = employee;
        const ifEmployeeExist = yield employee_1.default.findOne({
            where: { userName: userName, }
        });
        if (!ifEmployeeExist) {
            res.status(404).json({
                status: 404,
                success: false,
                message: "User not found",
            });
            return;
        }
        const isPasswordMatched = ((_a = ifEmployeeExist.dataValues) === null || _a === void 0 ? void 0 : _a.password) === password;
        if (!isPasswordMatched) {
            res.status(400).json({
                status: 400,
                success: false,
                message: "wrong password",
            });
            return;
        }
        // jwt token
        const token = jsonwebtoken_1.default.sign({ id: (_b = ifEmployeeExist.dataValues) === null || _b === void 0 ? void 0 : _b.id, email: (_c = ifEmployeeExist.dataValues) === null || _c === void 0 ? void 0 : _c.email }, "YOUR_SECRET", {
            expiresIn: "1d",
        });
        // send the response
        res.status(200).json({
            status: 200,
            success: true,
            message: "login success",
            token: token,
        });
    }
    catch (error) {
        // Send the error message to the client
        res.status(400).json({
            status: 400,
            message: error.message.toString(),
        });
    }
});
exports.postLogin = postLogin;
const updateEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const employee = yield employee_1.default.findByPk(id);
        if (employee) {
            yield employee.update(body);
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
exports.updateEmployee = updateEmployee;
