"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
exports.UserSchema = (0, mysql_core_1.mysqlTable)("users", {
    id: (0, mysql_core_1.int)("id").autoincrement().primaryKey(),
    name: (0, mysql_core_1.varchar)("name", { length: 100 }).notNull(),
    email: (0, mysql_core_1.varchar)("email", { length: 100 }).notNull(),
    password: (0, mysql_core_1.varchar)("password", { length: 255 }).notNull(),
    role: (0, mysql_core_1.mysqlEnum)("role", ["admin", "user"]).notNull().default("user"),
    createdAt: (0, mysql_core_1.timestamp)("created_at").defaultNow().notNull(),
    updatedAt: (0, mysql_core_1.timestamp)("updated_at").defaultNow().onUpdateNow().notNull(),
});
//# sourceMappingURL=user.schema.js.map