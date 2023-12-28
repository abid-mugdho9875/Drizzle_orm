import { relations } from "drizzle-orm";
import {
  int,
  mysqlTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  fullname: varchar("fullname", { length: 100 }).notNull(),
  phone: varchar("phone", { length: 100 }).notNull(),
  address: varchar("address", { length: 255 }).notNull(),
  score: int("score"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});
export const userRelations = relations(users, ({ one }) => ({
  profile: one(profiles, {
    fields: [users.id],
    references: [profiles.userId],
  }),
}));

export const profiles = mysqlTable("profiles", {
  id: serial("id").primaryKey(),
  bio: varchar("bio", { length: 256 }),
  userId: int("user id")
    .notNull()
    .references(() => users.id),
});
