"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mysql2_1 = require("drizzle-orm/mysql2");
const promise_1 = __importDefault(require("mysql2/promise"));
const pool = promise_1.default.createPool({
    uri: "mysql://prisma:Hasan%239875@localhost:3306/learn_prisma",
});
exports.db = (0, mysql2_1.drizzle)(pool);
//# sourceMappingURL=db.js.map