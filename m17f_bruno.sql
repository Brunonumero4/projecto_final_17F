-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09-Jan-2025 às 13:09
-- Versão do servidor: 10.4.28-MariaDB
-- versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `m17f_bruno`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `songs`
--

CREATE TABLE `songs` (
  `id` int(11) NOT NULL,
  `title` varchar(30) DEFAULT NULL,
  `artist` varchar(30) DEFAULT NULL,
  `album` varchar(30) DEFAULT NULL,
  `genre` varchar(30) DEFAULT NULL,
  `duration_seconds` int(11) DEFAULT NULL,
  `release_date` date NOT NULL,
  `likes` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `songs`
--

INSERT INTO `songs` (`id`, `title`, `artist`, `album`, `genre`, `duration_seconds`, `release_date`, `likes`, `created_at`) VALUES
(1, 'Squabble up', 'Kendrick Lamar', 'GNX', 'Hip-Hop/Rap', 158, '0000-00-00', 966000, '2025-01-09 11:06:59'),
(2, 'Hit \'Em up Style (Oops!)', 'Blu Cantrell', 'So Blu', 'Soul clássico', 250, '0000-00-00', 195000, '2025-01-09 11:28:51'),
(3, 'The Largest', 'BigXthaPlug', 'TAKE CARE', 'Hip-Hop/Rap', 132, '0000-00-00', 136000, '2025-01-09 11:59:36');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `songs`
--
ALTER TABLE `songs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
