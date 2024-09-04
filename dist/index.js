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
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = __importDefault(require("./db/client"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.get("/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { a, b } = req.body;
    try {
        let result = yield client_1.default.calculate.create({
            data: {
                a: a,
                b: b,
                operation: "+",
                result: a + b,
            },
        });
        res.status(200).json({ result: a + b });
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
}));
exports.app.get("/subtract", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { a, b } = req.body;
    try {
        let result = yield client_1.default.calculate.create({
            data: {
                a: a,
                b: b,
                operation: "-",
                result: a - b,
            },
        });
        res.status(200).json({ result: a - b });
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
}));
