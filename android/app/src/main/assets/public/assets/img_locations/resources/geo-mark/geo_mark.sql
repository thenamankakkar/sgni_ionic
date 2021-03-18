-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 31, 2020 at 02:11 AM
-- Server version: 5.6.49-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `geo_mark`
--

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` int(100) UNSIGNED NOT NULL,
  `user_id` int(100) NOT NULL,
  `payment_id` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `subscription_date` date NOT NULL,
  `expiry_date` date NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `user_id`, `payment_id`, `subscription_date`, `expiry_date`, `status`) VALUES
(23, 1, 'pay_EPESJdsUrXteRf', '2020-07-01', '2020-07-31', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(50) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` text COLLATE utf8_unicode_ci NOT NULL,
  `mobile` double NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `mobile`, `created_at`) VALUES
(1, 'Ripun Gupta', 'sales@zipzap.in', '6fcda537fd407320239bebff6dfd53c7590a73c401f6a87a2e84044ef667de2f', 9876091236, '2020-03-06 01:59:28'),
(2, 'tes', 'test@gmail.com', '565788e20d9d397d98a277cb67fa4b81d9c3216214b338017f5b6a3b26380054', 989889, '2020-03-06 03:36:55'),
(3, 'dhjsf', 'dsdsds', '6fcda537fd407320239bebff6dfd53c7590a73c401f6a87a2e84044ef667de2f', 0, '2020-03-06 03:40:12'),
(4, 'jaskaran singh', 'test@gmail.com', '222b89cdee91fced2c52115a09c1779ffb0808e6c435899e2e739db5995f7c87', 876482323, '2020-03-06 03:43:57'),
(5, 'test', 'test@gmail.com', 'dbfea94f4e82d42ea0ae8c2ef113ed8a83c7b2f6268feb7e51159e674ce4831b', 78788787, '2020-03-06 03:51:12'),
(6, 'test', 'test@gmail.com', '6fcda537fd407320239bebff6dfd53c7590a73c401f6a87a2e84044ef667de2f', 9898989, '2020-03-06 03:56:17'),
(7, 'test', 'test@test.com', '6fcda537fd407320239bebff6dfd53c7590a73c401f6a87a2e84044ef667de2f', 9898989898, '2020-03-06 03:59:14'),
(8, 'New user', 'testuser@gmail.com', '6fcda537fd407320239bebff6dfd53c7590a73c401f6a87a2e84044ef667de2f', 9876543213, '2020-03-06 04:04:20'),
(9, 'Raj', 'test@gamil.com', '6fcda537fd407320239bebff6dfd53c7590a73c401f6a87a2e84044ef667de2f', 9803675124, '2020-03-07 06:12:57'),
(10, 'Bhagirath', 'bablunagi@gmail.com', '6fcda537fd407320239bebff6dfd53c7590a73c401f6a87a2e84044ef667de2f', 9809555655, '2020-03-11 07:34:27'),
(11, 'jathin ', 'drtoj73046@reqaxv.com', '09add3ad6bb8b8af9467cd85996bb7c59f31daaa4abd111e65da75460a43e4a0', 9490347247, '2020-05-14 02:24:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` int(100) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(50) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
