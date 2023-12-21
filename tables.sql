DROP SCHEMA `oneque`;
CREATE SCHEMA `oneque`;

CREATE TABLE `oneque`.`user_queue` (
  `id` VARCHAR(45) NOT NULL,
  `queue_id` INT NULL,
  `user_id` VARCHAR(45) NULL,
  `join_hour` VARCHAR(45) NULL,
  `position` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `queue` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `company_id` varchar(45) NOT NULL,
  `company_name` varchar(45) NOT NULL,
  `start` varchar(45) NOT NULL,
  `end` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
)


CREATE TABLE `oneque`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);


CREATE TABLE `oneque`.`company` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `queue_id` VARCHAR(45) NULL,
  `company_id` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
