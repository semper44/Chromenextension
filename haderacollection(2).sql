-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 21, 2023 at 11:30 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.23

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
  `status` int(200) NOT NULL,
  `nftImage` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `saleorder`
--

INSERT INTO `saleorder` (`id`, `usersId`, `senderAccount`, `nftToken`, `userTokenId`, `senderAccountKey`, `requestAmount`, `receiverAccount`, `status`, `nftImage`) VALUES
(21, '0.0.14022139', '0.0.14022139', '0.0.14839086', '5', '0.0.14022139', '900', '', 0, 'https://cloudflare-ipfs.com/ipfs/bafybeigfhsipu3r25te5ovbeub66j7iwyde223767skqujqyrdfy3raxvu/5.png');

-- --------------------------------------------------------

--
-- Table structure for table `usernft`
--

CREATE TABLE `usernft` (
  `id` int(100) NOT NULL,
  `usersid` int(100) NOT NULL,
  `nftid` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usernft`
--

INSERT INTO `usernft` (`id`, `usersid`, `nftid`) VALUES
(34, 3, '0.0.5567'),
(35, 3, '0.0.5567'),
(36, 3, '0.0.5567'),
(37, 3, '0.0.5567'),
(38, 3, '0.0.5567'),
(39, 3, '0.0.987666'),
(40, 3, '0.0.987666'),
(41, 3, '0.0.6866789'),
(42, 3, '0.0.7888');

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
  `email` varchar(200) NOT NULL,
  `accountID` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userscollections`
--

INSERT INTO `userscollections` (`id`, `password`, `walletAddress`, `privateKey`, `seedPhrase`, `nickname`, `email`, `accountID`) VALUES
(1, '23838382sndbdb', 'sjdhdhhdhfhdh', 'dhdhfdhdhdhdhf', 'dhdhshhdhdhfh', '', '', ''),
(2, 'uche', '302a300506032b6570032100996f329217652aa9641983684d30a0a5cf90acdc41eb49e2bae1a629a408820a', '302e020100300506032b657004220420c199767821a9cd98608558e3860746e428d22ea7a6ac44e78df10e25dfa6663f', 'vault album ceiling poverty test save squeeze affair call until when lemon window soon furnace kit genuine weasel bird coach blossom goose manage snap', 'goodboy2', 'uchennachinka4@gmail.com', '0.0.14761220'),
(3, 'uchenna', '302a300506032b657003210044ece9ccfe312c9e0bec91f93ec36593a8d047d8fed4afb4ad5ee5adb55dfc05', '302e020100300506032b65700422042099b52c2562325617778b7e9fa99c609a505e7f164dc739e7ee2d26f3e78d46e2', 'safe lizard limit evil dial sausage coyote treat hold ginger april mule salute fatal valley eight borrow frost seat couch health reflect raccoon impact', 'uchenna2022', 'uchennachinka4@gmail.com', '0.0.14764333'),
(4, 'uchenna', '302a300506032b657003210039ad47e265f353a8b7c7e0ac6640019b9f7b9d34f04558f3f1b5c264d8a135a2', '302e020100300506032b65700422042053417dae3e7e4fd5169fdb223f9971274c80ef5de3e0bba2e9d7e2daf87a7fa3', 'discover drink void ketchup tuition arm exist rug choose census practice energy vessel digital safe icon basic memory label oppose kick glide exotic program', 'uchenna2022', 'uchennachinka4@gmail.com', '0.0.14766672'),
(5, 'fred', '302a300506032b6570032100b9cc747010de219186af31c5f4ed9fe9359a0e698576c102eb587638288149e9', '302e020100300506032b6570042204203031c4ffad39a5dd962a6934011a00db4e3eec023c358c6d646c463438166dcb', 'crunch next vocal summer blood expire area hire black client release family donate need eight group assist abuse pony ask olive explain siege oven', 'fred3033', 'uchennachinka4@gmail.com', '0.0.14767155'),
(6, 'uche', '302a300506032b6570032100b9cc747010de219186af31c5f4ed9fe9359a0e698576c102eb587638288149e9', '302e020100300506032b6570042204203031c4ffad39a5dd962a6934011a00db4e3eec023c358c6d646c463438166dcb', 'crunch next vocal summer blood expire area hire black client release family donate need eight group assist abuse pony ask olive explain siege oven', 'mike4000', 'uchennachinka4@gmail.com', '0.0.14767155'),
(7, 'fred', '302a300506032b6570032100b5c3a1e30e997f2a310bb659032724e216d10584ebdb8254e61d747671f35905', '302e020100300506032b657004220420efede9c290de5269e87b858fd499564d5a2fb8a564ea698077dca43a1f6e610b', 'day that pet typical sun upset lion young script amused rely fiber trumpet lava girl rug you size judge thing rude cactus worth sample', 'fred2022', 'uchennachinka4@gmail.com', '0.0.14809875'),
(8, 'fred', '302a300506032b6570032100b5c3a1e30e997f2a310bb659032724e216d10584ebdb8254e61d747671f35905', '302e020100300506032b657004220420efede9c290de5269e87b858fd499564d5a2fb8a564ea698077dca43a1f6e610b', 'day that pet typical sun upset lion young script amused rely fiber trumpet lava girl rug you size judge thing rude cactus worth sample', 'fred2022', 'uchennachinka4@gmail.com', '0.0.14809875'),
(9, 'fred', '302a300506032b6570032100b5c3a1e30e997f2a310bb659032724e216d10584ebdb8254e61d747671f35905', '302e020100300506032b657004220420efede9c290de5269e87b858fd499564d5a2fb8a564ea698077dca43a1f6e610b', 'day that pet typical sun upset lion young script amused rely fiber trumpet lava girl rug you size judge thing rude cactus worth sample', 'fred2022', 'uchennachinka4@gmail.com', '0.0.14809875'),
(10, 'mike@2022', '302a300506032b65700321002aac60ba49e4536dc828c71a5f800ac1d2252b70e88b10b9184c3cd4ba7b36b1', '302e020100300506032b65700422042021e41a51b55fdb045c764815bfdc059219754f3bf708b635ff2eeeccc3e55a55', 'debate session media hood public reject office daring input transfer scare purpose brush desk rhythm clutch puzzle used enrich crystal there cook manual unfair', 'newMike', 'uchennachinka4@gmail.com', '0.0.14818956'),
(11, 'smith', '302a300506032b6570032100cebe6e512f179d3dc57d16c0e4b5f3c7cc9cfea91a9654eb0d7cbfd9a1b95a0b', '302e020100300506032b657004220420b8848be97a1d3cdee057031e3dcb56a5d1eade5ba0fda8d0d72869ed80fec22c', 'glove black lesson vague vanish day lock want husband throw rib found edge sun mercy brave fit club admit shoulder very juice fluid false', 'mikegray', 'uchennachinka4@gmail.com', '0.0.14819250'),
(12, 'ok', '302a300506032b6570032100835a6c79d4f9ea052869f081117cadb0b379084a754b75bbcb23339b0a74c0b9', '302e020100300506032b65700422042028cca8cc413b636c5a37408024c25d669f3ba0aa7fadc4639fc453d07ef6bb6f', 'mercy tourist approve busy distance hood uncle public wet tent clerk flash witness benefit physical country benefit until young grief mountain dizzy reason gun', 'mydesign', 'uchennachinka4@gmail.com', '0.0.14819339'),
(13, 'miri', '302a300506032b657003210014b3085f9ad712c78f501051f7c872c17056329f76c9bd0d35ce5fe60bcf7309', '302e020100300506032b6570042204209d590032c59d6690562ff5d9baed08d9a1094a2cddf136a9511e29b8bb24c3b9', 'also soul loop source spin boring engine sword network drop edge action insane remind tattoo scale business tragic tattoo change wisdom pitch square tag', 'okay', 'uchennachinka4@gmail.com', '0.0.14825867'),
(14, 'money', '302a300506032b657003210048d73e4c7804d115ed42ccf1026eb1994e86b1fe1729c21c97fc8080c299bf21', '302e020100300506032b657004220420981f167d59958d7a75012e24b34de4fe2214d85183c26a28bf9e35e08b277adb', 'judge wheel setup simple flower weird night mercy list boil drink logic cotton escape mechanic annual only goddess giant neither dog clog dream fatigue', 'newflower', 'uchennachinka4@gmail.com', '0.0.14825875'),
(15, 'goodboy', '302a300506032b6570032100c923089b181a5bb8bd5090efb13e4eaaa46cbbbf772dc9adb65045693c38e7cb', '302e020100300506032b657004220420d3d4cbb4b6e1fe74aeca03e44c32367c4fc8dfe5e1f78d94b9e87465d256ee63', 'armor butter feed state sport teach insect size olive receive elevator glimpse twist lounge screen monster drive daring ancient soft devote wage lake below', 'goodboy2', 'uchennachinka4@gmail.com', '0.0.14826468');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `saleorder`
--
ALTER TABLE `saleorder`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usernft`
--
ALTER TABLE `usernft`
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
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `usernft`
--
ALTER TABLE `usernft`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `userscollections`
--
ALTER TABLE `userscollections`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
