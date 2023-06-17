-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2023 at 12:14 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `haderacollection`
--

-- --------------------------------------------------------

--
-- Table structure for table `saleorder`
--

CREATE TABLE `saleorder` (
  `id` int(200) NOT NULL,
  `usersId` varchar(200) NOT NULL,
  `senderAccount` varchar(200) NOT NULL,
  `nftToken` varchar(200) NOT NULL,
  `userTokenId` varchar(200) NOT NULL,
  `senderAccountKey` varchar(200) NOT NULL,
  `requestAmount` varchar(200) NOT NULL,
  `receiverAccount` varchar(200) NOT NULL,
  `status` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `userscollections`
--

CREATE TABLE `userscollections` (
  `id` int(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `walletAddress` varchar(200) NOT NULL,
  `privateKey` varchar(200) NOT NULL,
  `seedPhrase` varchar(200) NOT NULL,
  `nickname` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userscollections`
--

INSERT INTO `userscollections` (`id`, `password`, `walletAddress`, `privateKey`, `seedPhrase`, `nickname`, `email`) VALUES
(1, '23838382sndbdb', 'sjdhdhhdhfhdh', 'dhdhfdhdhdhdhf', 'dhdhshhdhdhfh', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `saleorder`
--
ALTER TABLE `saleorder`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userscollections`
--
ALTER TABLE `userscollections`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `saleorder`
--
ALTER TABLE `saleorder`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `userscollections`
--
ALTER TABLE `userscollections`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
