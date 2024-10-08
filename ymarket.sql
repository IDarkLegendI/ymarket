-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3307
-- Время создания: Сен 01 2023 г., 19:46
-- Версия сервера: 8.0.30
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `ymarket`
--

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `price` int NOT NULL,
  `description` varchar(512) NOT NULL,
  `specifications` text NOT NULL,
  `images` text NOT NULL,
  `business` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `specifications`, `images`, `business`) VALUES
(1, 'Динамик', 4800, '123', '\"123\"', '\"123\"', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `firstName` text NOT NULL,
  `lastName` text NOT NULL,
  `login` text NOT NULL,
  `password` text NOT NULL,
  `favorites` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `orders` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `basket` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `refresh` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `login`, `password`, `favorites`, `orders`, `basket`, `refresh`) VALUES
(2, 'Igor', 'Ivan', 'hui', 'hui2', NULL, NULL, NULL, NULL),
(11, 'Igor', 'Vanya', 'hui2', 'fd85379917b8b0460c4e01c180ae10395be8265e', NULL, NULL, NULL, NULL),
(15, 'Igor', 'Vanya', 'hussadasd', 'fd85379917b8b0460c4e01c180ae10395be8265e', NULL, NULL, NULL, NULL),
(26, 'Igor', 'Vanya', 'TESTYs', 'fd85379917b8b0460c4e01c180ae10395be8265e', NULL, NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6IlRFU1RZcyIsImlhdCI6MTY5MzE1NDkxMiwiZXhwIjoxNjk1NzQ2OTEyfQ.HxJ_7eRj12S62nGgEemndOD8H1c8MZHuKJVAWNfmV8U'),
(27, 'Igor', 'Vanya', 'huii', 'aac7e1dfa3952d5099bf6e7db3103154eea9f86e', NULL, NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6Imh1aWkiLCJpYXQiOjE2OTMxNTk0MDcsImV4cCI6MTY5NTc1MTQwN30.AZPe8dm3FkAsge0Mk-6fYxYtrWp3WmMKtd4j4pjRSrQ'),
(28, 'Игорь', 'Иванов', 'darklegend', '193b89eba54108283c048679bb1c9117cf4143bd', NULL, NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImRhcmtsZWdlbmQiLCJpYXQiOjE2OTM1ODY1MzksImV4cCI6MTY5NjE3ODUzOX0.WbF-QiVHyKXj5f8TZB-iUw5mjY7mooKg7yDG23QToPY');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
