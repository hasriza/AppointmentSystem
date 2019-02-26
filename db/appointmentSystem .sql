-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 26, 2019 at 02:35 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appointmentSystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `apt_tab`
--

CREATE TABLE `apt_tab` (
  `dr_id` int(5) NOT NULL,
  `c_id` int(5) NOT NULL,
  `schedule` datetime NOT NULL,
  `subject` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cust_tab`
--

CREATE TABLE `cust_tab` (
  `c_id` int(5) NOT NULL,
  `cust_name` varchar(20) NOT NULL,
  `contact` varchar(10) NOT NULL,
  `address` varchar(30) NOT NULL,
  `pwd` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `doc_tab`
--

CREATE TABLE `doc_tab` (
  `dr_id` int(5) NOT NULL,
  `dr_name` varchar(20) NOT NULL,
  `window` int(3) NOT NULL DEFAULT '30',
  `contact` varchar(10) NOT NULL,
  `address` varchar(30) NOT NULL,
  `practice` varchar(20) NOT NULL,
  `pwd` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apt_tab`
--
ALTER TABLE `apt_tab`
  ADD KEY `apt_tab_fk0` (`dr_id`),
  ADD KEY `apt_tab_fk1` (`c_id`);

--
-- Indexes for table `cust_tab`
--
ALTER TABLE `cust_tab`
  ADD PRIMARY KEY (`c_id`),
  ADD UNIQUE KEY `contact` (`contact`);

--
-- Indexes for table `doc_tab`
--
ALTER TABLE `doc_tab`
  ADD PRIMARY KEY (`dr_id`),
  ADD UNIQUE KEY `contact` (`contact`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cust_tab`
--
ALTER TABLE `cust_tab`
  MODIFY `c_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `doc_tab`
--
ALTER TABLE `doc_tab`
  MODIFY `dr_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `apt_tab`
--
ALTER TABLE `apt_tab`
  ADD CONSTRAINT `apt_tab_fk0` FOREIGN KEY (`dr_id`) REFERENCES `doc_tab` (`dr_id`),
  ADD CONSTRAINT `apt_tab_fk1` FOREIGN KEY (`c_id`) REFERENCES `cust_tab` (`c_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
