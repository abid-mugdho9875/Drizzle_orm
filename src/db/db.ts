import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  uri: "mysql://prisma:Hasan%239875@localhost:3306/learn_prisma",
});

export const db = drizzle(pool);
