CREATE TABLE `doc_tab` (
	`dr_id` INT(5) NOT NULL AUTO_INCREMENT,
	`dr_name` varchar(20) NOT NULL,
	`window` INT(3) NOT NULL DEFAULT '30',
	`contact` INT(10) NOT NULL,
	`address` varchar(30) NOT NULL,
	`practice` varchar(20) NOT NULL,
	PRIMARY KEY (`dr_id`)
);

CREATE TABLE `apt_tab` (
	`dr_id` INT(5) NOT NULL,
	`c_id` INT(5) NOT NULL,
	`schedule` DATETIME NOT NULL,
	`subject` TEXT(100) NOT NULL
);

CREATE TABLE `cust_tab` (
	`c_id` INT(5) NOT NULL AUTO_INCREMENT,
	`cust_name` varchar(20) NOT NULL,
	`contact` INT(10) NOT NULL,
	`address` varchar(30) NOT NULL,
	PRIMARY KEY (`c_id`)
);

ALTER TABLE `apt_tab` ADD CONSTRAINT `apt_tab_fk0` FOREIGN KEY (`dr_id`) REFERENCES `doc_tab`(`dr_id`);

ALTER TABLE `apt_tab` ADD CONSTRAINT `apt_tab_fk1` FOREIGN KEY (`c_id`) REFERENCES `cust_tab`(`c_id`);
