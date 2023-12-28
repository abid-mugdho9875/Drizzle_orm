CREATE TABLE `profiles` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`bio` varchar(256),
	`user id` int NOT NULL,
	CONSTRAINT `profiles_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `id` serial AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `fullname` varchar(100) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `phone` varchar(100) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `address` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `score` int;--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `name`;--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `email`;--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `password`;--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `role`;--> statement-breakpoint
ALTER TABLE `profiles` ADD CONSTRAINT `profiles_user id_users_id_fk` FOREIGN KEY (`user id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;