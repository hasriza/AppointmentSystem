CREATE TABLE `user` (
	`u_id` INT(5) NOT NULL AUTO_INCREMENT,
	`name` varchar(20) NOT NULL,
	`uname` varchar(20) NOT NULL UNIQUE,
	`pwd` varchar(20) NOT NULL,
	`contact` INT(10) NOT NULL UNIQUE,
	`address` varchar(30) NOT NULL,
	`window` INT(2) DEFAULT '30',
	`practice` varchar(20),
	PRIMARY KEY (`u_id`)
);

CREATE TABLE `apt_tab` (
	`u_id` INT(5) NOT NULL,
	`schedule` DATETIME NOT NULL,
	`subject` TEXT(100) NOT NULL
);

ALTER TABLE `apt_tab` ADD CONSTRAINT `apt_tab_fk0` FOREIGN KEY (`u_id`) REFERENCES `user`(`u_id`);
