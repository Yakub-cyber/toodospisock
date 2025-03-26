import React, { useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import ProductList from './components/ProductList.jsx'
import './App.css'
//import catalog_data from './catalog_data (2).js'

const App = () => {
	const [searchTerm, setSearchTerm] = useState('')

	const data1 = [
		{ name: '7-ка Груша 1,5л', price: 230 },
		{ name: 'Адреналин ж/б 0,25л', price: 670 },
		{ name: 'Адреналин ж/б 0.5л', price: 1070 },
		{ name: 'Баринофф Гранат 0,25л', price: 600 },
		{ name: 'Вико 1,0л', price: 750 },
		{ name: 'Драйв Зеленный ж/б 0,5л', price: 690 },
		{ name: 'Зеленокумск Лимонад 0,5л', price: 700 },
		{ name: 'Кинза Оранж ж/б 0,32л', price: 1450 },
		{ name: 'Добрый Кола 1,0л', price: 840 },
		{ name: 'Кола 2,0л', price: 1020 },
		{ name: 'Кола ж/б 0,25л', price: 980 },
		{ name: 'Лейс Краб 37г', price: 1330 },
		{ name: 'Липтон Зелённый ж/б 0,25л', price: 650 },
		{ name: 'Лит Энержи Манго-Кокос ж/б 0,45л (24шт)', price: 1460 },
		{ name: 'Мохито Клубника ж/б 0,45л', price: 1250 },
		{ name: 'Натахтари Груша 1,0л', price: 650 },
		{ name: 'Пепси 1,0л (12)', price: 960 },
		{ name: 'Пепси ж/б 0,3л', price: 960 },
		{ name: 'Ред Булл Оригинал 0,5', price: 2020 },
		{ name: 'Стом Чай 1,5л', price: 570 },
		{ name: 'Страйк ж/б 0,45', price: 650 },
		{ name: 'Торнадо 1л (6шт)', price: 410 },
		{ name: 'Фанта 1,0л', price: 1100 },
		{ name: 'Флеш ж/б 0,44л', price: 1150 },
		{ name: 'Фруктовит Желтый 1,5л', price: 420 },
		{ name: 'Читос (26гр*48) "Микс"', price: 1050 },
		{ name: 'Липтон Персик (12шт) 1,0л', price: 1270 },
		{ name: 'Фанта ж/б 0,25л', price: 950 },
		{ name: 'Молоко "КБ" 3,5% (12шт)', price: 1520 },
		{ name: 'Спрайт 2,0л', price: 800 },
		{ name: 'Рояль Гранат 0,3л', price: 850 },
		{ name: 'Горилла Манго ж/б 0,45л', price: 1650 },
		{ name: 'Кола ж/б 0,33л', price: 1090 },
		{ name: 'Сок 5,0л', price: 210 },
		{ name: 'Квас Хлебный 1,4л', price: 220 },
		{ name: 'Миринда ж/б 0,25л', price: 1000 },
		{ name: 'Добрый кола 0,33 жб  (24шт)', price: 1020 },
		{ name: 'Лит Энержи Класик ж/б 0,45л (24шт)', price: 1440 },
		{ name: 'Сваг Личи-Мангостин ст. (12шт) 0,33л', price: 800 },
		{ name: 'Сваг Киви-Фейхоа ст. (12шт) 0,33л', price: 800 },
		{ name: 'Сваг Гранат-Инжир ст. (12шт) 0,33л', price: 800 },
		{ name: 'Лит Чипсы Паприка 120г', price: 920 },
		{ name: 'Лит Чипсы Сахалинский Краб 120г', price: 920 },
		{ name: 'Лит Чипсы Сметана и Зелень 120г', price: 920 },
		{ name: 'Лейс Огурец 140гр', price: 2150 },
		{ name: ' Гуава-Черника ж/б 0,43л', price: 1550 },
		{ name: 'Липтон Зеленый 0,5л', price: 620 },
		{ name: 'Липтон Персик 0,5л', price: 620 },
		{ name: 'Родник 0,5л', price: 140 },
		{ name: 'Ролтон', price: 680 },
		{ name: 'Фруктовит Красный Мангостина 1,5л', price: 420 },
		{ name: 'Ред Булл Оригинал 0,25л', price: 2290 },
		{ name: 'Финики (12шт)', price: 2040 },
		{ name: ' Арбуз-Грейпфрут ж/б 0,43л', price: 1550 },
		{ name: 'Молоко "Эконом" 3,2% (12шт)', price: 920 },
		{ name: 'Вкусно Сок Мультифрукт 0,2л', price: 320 },
		{ name: 'Вкусно Сок Персик 0,2л', price: 320 },
		{ name: 'Сваг Имбирный-Лимонад ст. (12шт) 0,33л', price: 800 },
		{ name: 'Кола 1,0л (12шт)', price: 1200 },
		{ name: 'Аргаск Лимонад Стекло 0,5л  (12шт)', price: 400 },
		{ name: 'Пепси ж/б 0,25л', price: 950 },
		{ name: 'Чоко Пай 168гр', price: 950 },
		{ name: 'Миринда (9шт) 1,0л', price: 800 },
		{ name: 'Лейла Лимонад', price: 750 },
		{ name: '7-ка Ситро 1,5л', price: 230 },
		{ name: 'Соль', price: 440 },
		{ name: 'Шовда 0,5л', price: 160 },
		{ name: 'Лейс Лук 37г', price: 1330 },
		{ name: 'Липтон Зеленный (12шт) 1,0л', price: 1270 },
		{ name: 'Лейс 37гр Сыр', price: 1330 },
		{ name: 'Палпи Апельсин 0,45л', price: 590 },
		{ name: 'Берн ж/б 0,5л', price: 950 },
		{ name: 'Ред Булл Оригинал 0,35л (24шт)', price: 2950 },
		{ name: 'Родник 1,5л', price: 130 },
		{ name: 'Шовда 1,5л', price: 130 },
		{ name: 'Лит Энерджи Кола ж/б 0,45л (12шт)', price: 750 },
		{ name: 'Менди Персик 1,25л', price: 500 },
		{ name: 'Палпи Апельсин 0,9л', price: 1000 },
		{ name: 'Пепси (6шт) 1,0л', price: 490 },
		{ name: 'Пепси 2,0л', price: 800 },
		{ name: 'Серноводская Вода 0,5л', price: 270 },
		{ name: 'Менди Ягода 1,25л', price: 500 },
		{ name: 'Ачалуки 1,5л', price: 170 },
		{ name: 'Рич Апельсин Стекло (12шт) 0,2л', price: 900 },
		{ name: 'Рич Вишня Стекло  (12шт) 0,2л', price: 800 },
		{ name: 'Кола Стекло 0,33л  (15)', price: 950 },
		{ name: 'Кинза Кола ж/б 0,32л', price: 1450 },
		{ name: 'Кинза Лемон ж/б 0,32л', price: 1450 },
		{ name: 'Торнадо ж/б 0,45', price: 580 },
		{ name: 'Кинза Цитрус ж/б 0,32л', price: 1450 },
		{ name: 'Лит Энерджи Черника ж/б (24шт) 0,45л', price: 1440 },
		{ name: 'Милкис Новые ощущение 0,25л', price: 1550 },
		{ name: 'Сваг Черная Смародина-Драгонфрут ст. (12шт) 0,33л', price: 800 },
		{ name: 'Сваг Маракуйа-Малина ст. (12шт) 0,33л', price: 800 },
		{ name: 'Сваг Манго-Кокос ст. (12шт) 0,33л', price: 800 },
		{ name: 'Сваг Слива ст. (12шт) 0,33л', price: 800 },
		{ name: 'Сваг Кола ст. (12шт) 0,33л', price: 800 },
		{ name: 'Вкусно Сок Яблока 0,2л', price: 320 },
		{ name: 'Читос (85гр)', price: 1000 },
		{ name: 'Джумка блок', price: 380 },
		{ name: 'Алое 0,5л', price: 440 },
		{ name: 'Лейс Лук 70г', price: 1530 },
		{ name: 'Миринда ж/б 0,3л', price: 1000 },
		{ name: 'Палпи Тропик 0,9л', price: 1000 },
		{ name: 'Кола 1,5л', price: 800 },
		{ name: 'Драгон Желтый ж/б 0,45л', price: 530 },
		{ name: 'Мохито Драгон 0,9л', price: 330 },
		{ name: 'Натахтари Саперави 1,0л', price: 650 },
		{ name: 'Монстер Красный 0,5л', price: 450 },
		{ name: 'Вкусно Сок Персик 1,0л', price: 460 },
		{ name: 'Вкусно Сок Мультифрукт 1,0л', price: 460 },
		{ name: 'Лит Энержи Персик ж/б 0,45л (12шт)', price: 730 },
		{ name: 'Мохито Граната ж/б 0,45л', price: 1240 },
		{ name: 'Липтон Зелёный (6шт) 1,5л', price: 880 },
		{ name: ' Оригинал ж/б 0,43л', price: 1550 },
		{ name: 'Липтон Персик 1,0л (6шт)', price: 550 },
		{ name: 'Баринофф Вишня 0,25л', price: 600 },
		{ name: 'Баринофф Манго 0,25л', price: 600 },
		{ name: 'Баринофф Яблоко 0,25л', price: 600 },
		{ name: 'Менди Персик 0,5л', price: 620 },
		{ name: 'Менди Ягода 0,5л', price: 610 },
		{ name: 'Пепси 0,5л (24шт)', price: 1180 },
		{ name: 'Биг Бон', price: 1100 },
		{ name: 'Фанта 2,0л', price: 800 },
		{ name: 'Лит Энерджи Ягода-Какос 0,45л  (24)', price: 1440 },
		{ name: 'Нествик 510гр', price: 1900 },
		{ name: 'Мохито Черника ж/б 0,45л', price: 1240 },
		{ name: 'Липтон Персик ж/б 0,25л', price: 650 },
		{ name: 'Лейс Сметана Лук 140г', price: 2120 },
		{ name: 'Лейс Сметана Зелень 140г', price: 2120 },
		{ name: 'Балтика Стекло 0,45л (20шт)', price: 950 },
		{ name: 'Алое 1,5л', price: 530 },
		{ name: 'Драгон Зеленный ж/б 0,45л', price: 530 },
		{ name: 'Горилла Манго Стекло 0,27л', price: 1400 },
		{ name: 'Липтон Персик 1,5л', price: 880 },
		{ name: ' Манго-Баобаб ж/б 0,43л', price: 1550 },
		{ name: 'Монстер Жёлтый 0,5л', price: 450 },
		{ name: 'Лит Энерджи Гранат ж/б (12шт) 0,45л', price: 880 },
		{ name: 'Натахтари Фейхоа', price: 650 },
		{ name: 'Лейс Краб 70г', price: 1530 },
		{ name: 'Борз Манго 1,5л', price: 350 },
		{ name: 'Спрайт 1,0л (12шт)', price: 1150 },
		{ name: 'Палпи Тропик 0,45л', price: 590 },
		{ name: 'Нествик 310гр', price: 1940 },
		{ name: 'Лейс Сметана Зелень 37г', price: 1330 },
		{ name: 'Серноводск Стекло 0,5л', price: 490 },
		{ name: 'Лейс Сыр 70г', price: 1530 },
		{ name: 'Лейс Сыр 140г', price: 2120 },
		{ name: 'Лейс Лук 140г', price: 2120 },
		{ name: 'Лейс Краб 140г', price: 2120 },
		{ name: 'Натахтари Апельсин 1,0л', price: 650 },
		{ name: 'Лит Энержи Зеро ж/б 0,45л (24шт)', price: 1440 },
		{ name: 'Добрый Кола Без Сахара 1,0л', price: 830 },
		{ name: 'Миринда Цитрус 0,25л (30шт)', price: 2430 },
		{ name: 'Мохито Манго ж/б 0,45л', price: 1240 },
		{ name: 'Мохито Лайм ж/б 0,45л', price: 1240 },
		{ name: 'Серноводск Лимон 0,5л', price: 360 },
		{ name: 'Дубайский Сок', price: 1020 },
		{ name: 'Ред Булл Красный Арбуз ж/б 0,25л', price: 2400 },
		{ name: 'Ред Булл Желтый Тропический ж/б 0,25л', price: 2400 },
		{ name: 'Лит Энержи Манго 12шт', price: 720 },
		{ name: 'Лит Энержи Черника (6шт) 0,45л', price: 360 },
		{ name: 'Родник Мохито 0,5л', price: 140 },
		{ name: 'Родник Груша 0,5л', price: 140 },
		{ name: 'Родник Ананас 0,5л', price: 121 },
		{ name: 'Болд Манго-Какос 0,5л', price: 1070 },
		{ name: 'Серноводская Вода 1,5л', price: 190 },
		{ name: 'Болд Красный Барбарис 0,5л', price: 1070 },
		{ name: 'Болд Серый Витамин 0,5л', price: 1070 },
		{ name: 'Болд Манго-Какос 0,33л', price: 0 },
		{ name: 'Болд Серый Бутылка  0,33л', price: 550 },
		{ name: 'Кинза Гранат ж/б 0,32л', price: 1500 },
	]

	const date2 = [
		{ name: '7-ка Груша 1,5л', price: 50 },
		{ name: 'Адреналин ж/б 0,25л', price: 60 },
		{ name: 'Адреналин ж/б 0.5л', price: 100 },
		{ name: 'Баринофф Гранат 0,25л', price: 60 },
		{ name: 'Вико 1,0л', price: 140 },
		{ name: 'Драйв Зеленный ж/б 0,5л', price: 60 },
		{ name: 'Зеленокумск Лимонад 0,5л', price: 40 },
		{ name: 'Кинза Оранж ж/б 0,32л', price: 70 },
		{ name: 'Добрый Кола 1,0л', price: 80 },
		{ name: 'Кола 2,0л', price: 190 },
		{ name: 'Кола ж/б 0,25л', price: 50 },
		{ name: 'Лейс Краб 37г', price: 50 },
		{ name: 'Липтон Зелённый ж/б 0,25л', price: 60 },
		{ name: 'Лит Энержи Манго-Кокос ж/б 0,45л (24шт)', price: 70 },
		{ name: 'Мохито Клубника ж/б 0,45л', price: 60 },
		{ name: 'Натахтари Груша 1,0л', price: 120 },
		{ name: 'Пепси 1,0л (12)', price: 100 },
		{ name: 'Пепси ж/б 0,3л', price: 50 },
		{ name: 'Ред Булл Оригинал 0,5', price: 180 },
		{ name: 'Стом Чай 1,5л', price: 100 },
		{ name: 'Страйк ж/б 0,45', price: 70 },
		{ name: 'Торнадо 1л (6шт)', price: 80 },
		{ name: 'Фанта 1,0л', price: 100 },
		{ name: 'Флеш ж/б 0,44л', price: 60 },
		{ name: 'Фруктовит Желтый 1,5л', price: 80 },
		{ name: 'Читос (26гр*48) "Микс"', price: 30 },
		{ name: 'Липтон Персик (12шт) 1,0л', price: 120 },
		{ name: 'Фанта ж/б 0,25л', price: 50 },
		{ name: 'Молоко "КБ" 3,5% (12шт)', price: 140 },
		{ name: 'Спрайт 2,0л', price: 150 },
		{ name: 'Рояль Гранат 0,3л', price: 50 },
		{ name: 'Горилла Манго ж/б 0,45л', price: 80 },
		{ name: 'Кола ж/б 0,33л', price: 70 },
		{ name: 'Сок 5,0л', price: 120 },
		{ name: 'Квас Хлебный 1,4л', price: 50 },
		{ name: 'Миринда ж/б 0,25л', price: 50 },
		{ name: 'Добрый кола 0,33 жб (24шт)', price: 50 },
		{ name: 'Лит Энержи Класик ж/б 0,45л (24шт)', price: 70 },
		{ name: 'Сваг Личи-Мангостин ст. (12шт) 0,33л', price: 80 },
		{ name: 'Сваг Киви-Фейхоа ст. (12шт) 0,33л', price: 80 },
		{ name: 'Сваг Гранат-Инжир ст. (12шт) 0,33л', price: 80 },
		{ name: 'Лит Чипсы Паприка 120г', price: 100 },
		{ name: 'Лит Чипсы Сахалинский Краб 120г', price: 100 },
		{ name: 'Лит Чипсы Сметана и Зелень 120г', price: 100 },
		{ name: 'Лейс Огурец 140гр', price: 140 },
		{ name: 'Гуава-Черника ж/б 0,43л', price: 70 },
		{ name: 'Липтон Зеленый 0,5л', price: 60 },
		{ name: 'Липтон Персик 0,5л', price: 60 },
		{ name: 'Родник 0,5л', price: 15 },
		{ name: 'Ролтон', price: 15 },
		{ name: 'Фруктовит Красный Мангостина 1,5л', price: 80 },
		{ name: 'Ред Булл Оригинал 0,25л', price: 50 },
		{ name: 'Финики (12шт)', price: 170 },
		{ name: 'Арбуз-Грейпфрут ж/б 0,43л', price: 70 },
		{ name: 'Молоко "Эконом" 3,2% (12шт)', price: 90 },
		{ name: 'Вкусно Сок Мультифрукт 0,2л', price: 15 },
		{ name: 'Вкусно Сок Персик 0,2л', price: 15 },
		{ name: 'Сваг Имбирный-Лимонад ст. (12шт) 0,33л', price: 80 },
		{ name: 'Кола 1,0л (12шт)', price: 100 },
		{ name: 'Аргаск Лимонад Стекло 0,5л (12шт)', price: 50 },
		{ name: 'Пепси ж/б 0,25л', price: 50 },
		{ name: 'Чоко Пай 168гр', price: 70 },
		{ name: 'Миринда (9шт) 1,0л', price: 100 },
		{ name: 'Лейла Лимонад', price: 80 },
		{ name: '7-ка Ситро 1,5л', price: 50 },
		{ name: 'Соль', price: 10 },
		{ name: 'Шовда 0,5л', price: 50 },
		{ name: 'Лейс Лук 37г', price: 50 },
		{ name: 'Липтон Зелленный (12шт) 1,0л', price: 60 },
		{ name: 'Лейс 37гр Сыр', price: 50 },
		{ name: 'Палпи Апельсин 0,45л', price: 50 },
		{ name: 'Берн ж/б 0,5л', price: 50 },
		{ name: 'Ред Булл Оригинал 0,35л (24шт)', price: 50 },
		{ name: 'Родник 1,5л', price: 50 },
		{ name: 'Шовда 1,5л', price: 50 },
		{ name: 'Лит Энерджи Кола ж/б 0,45л (12шт)', price: 70 },
		{ name: 'Менди Персик 1,25л', price: 100 },
		{ name: 'Палпи Апельсин 0,9л', price: 110 },
		{ name: 'Пепси (6шт) 1,0л', price: 100 },
		{ name: 'Пепси 2,0л', price: 150 },
		{ name: 'Серноводская Вода 0,5л', price: 50 },
		{ name: 'Менди Ягода 1,25л', price: 100 },
		{ name: 'Ачалуки 1,5л', price: 40 },
		{ name: 'Рич Апельсин Стекло (12шт) 0,2л', price: 50 },
		{ name: 'Рич Вишня Стекло (12шт) 0,2л', price: 90 },
		{ name: 'Кола Стекло 0,33л (15)', price: 90 },
		{ name: 'Кинза Кола ж/б 0,32л', price: 70 },
		{ name: 'Кинза Лемон ж/б 0,32л', price: 70 },
		{ name: 'Торнадо ж/б 0,45л', price: 70 },
		{ name: 'Кинза Цитрус ж/б 0,32л', price: 70 },
		{ name: 'Лит Энерджи Черника ж/б (24шт) 0,45л', price: 70 },
		{ name: 'Милкис Новые ощущения 0,25л', price: 70 },
		{ name: 'Сваг Черная Смородина-Драгонфрут ст. (12шт) 0,33л', price: 80 },
		{ name: 'Сваг Маракуйя-Малина ст. (12шт) 0,33л', price: 80 },
		{ name: 'Сваг Манго-Кокос ст. (12шт) 0,33л', price: 80 },
		{ name: 'Сваг Слива ст. (12шт) 0,33л', price: 80 },
		{ name: 'Сваг Кола ст. (12шт) 0,33л', price: 80 },
		{ name: 'Вкусно Сок Яблока 0,2л', price: 15 },
		{ name: 'Читос (85гр)', price: 50 },
		{ name: 'Джумка блок', price: 70 },
		{ name: 'Алое 0,5л', price: 50 },
		{ name: 'Лейс Лук 70г', price: 50 },
		{ name: 'Миринда ж/б 0,3л', price: 50 },
		{ name: 'Палпи Тропик 0,9л', price: 50 },
		{ name: 'Кола 1,5л', price: 70 },
		{ name: 'Драгон Желтый ж/б 0,45л', price: 70 },
		{ name: 'Мохито Драгон 0,9л', price: 80 },
		{ name: 'Натахтари Саперави 1,0л', price: 120 },
		{ name: 'Монстер Красный 0,5л', price: 80 },
		{ name: 'Вкусно Сок Персик 1,0л', price: 60 },
		{ name: 'Вкусно Сок Мультифрукт 1,0л', price: 60 },
		{ name: 'Лит Энержи Персик ж/б 0,45л (12шт)', price: 70 },
		{ name: 'Мохито Граната ж/б 0,45л', price: 70 },
		{ name: 'Липтон Зелёный (6шт) 1,5л', price: 60 },
		{ name: 'Оригинал ж/б 0,43л', price: 50 },
		{ name: 'Липтон Персик 1,0л (6шт)', price: 60 },
		{ name: 'Баринофф Вишня 0,25л', price: 50 },
		{ name: 'Баринофф Манго 0,25л', price: 70 },
		{ name: 'Баринофф Яблоко 0,25л', price: 60 },
		{ name: 'Менди Персик 0,5л', price: 70 },
		{ name: 'Менди Ягода 0,5л', price: 70 },
		{ name: 'Пепси 0,5л (24шт)', price: 50 },
		{ name: 'Биг Бон', price: 70 },
		{ name: 'Фанта 2,0л', price: 150 },
		{ name: 'Лит Энерджи Ягода-Какос 0,45л (24шт)', price: 70 },
		{ name: 'Нествик 510гр', price: 100 },
		{ name: 'Мохито Черника ж/б 0,45л', price: 70 },
		{ name: 'Липтон Персик ж/б 0,25л', price: 60 },
		{ name: 'Лейс Сметана Лук 140г', price: 100 },
		{ name: 'Лейс Сметана Зелень 140г', price: 100 },
		{ name: 'Балтика Стекло 0,45л (20шт)', price: 100 },
		{ name: 'Алое 1,5л', price: 50 },
		{ name: 'Драгон Зеленный ж/б 0,45л', price: 70 },
		{ name: 'Горилла Манго Стекло 0,27л', price: 70 },
		{ name: 'Липтон Персик 1,5л', price: 120 },
		{ name: 'Манго-Баобаб ж/б 0,43л', price: 70 },
		{ name: 'Монстер Жёлтый 0,5л', price: 80 },
		{ name: 'Лит Энерджи Гранат ж/б (12шт) 0,45л', price: 70 },
		{ name: 'Натахтари Фейхоа', price: 120 },
		{ name: 'Лейс Краб 70г', price: 70 },
		{ name: 'Борз Манго 1,5л', price: 100 },
		{ name: 'Спрайт 1,0л (12шт)', price: 100 },
		{ name: 'Палпи Тропик 0,45л', price: 50 },
		{ name: 'Нествик 310гр', price: 80 },
		{ name: 'Лейс Сметана Зелень 37г', price: 50 },
		{ name: 'Серноводск Стекло 0,5л', price: 50 },
		{ name: 'Лейс Сыр 70г', price: 50 },
		{ name: 'Лейс Сыр 140г', price: 100 },
		{ name: 'Лейс Лук 140г', price: 100 },
		{ name: 'Лейс Краб 140г', price: 100 },
		{ name: 'Натахтари Апельсин 1,0л', price: 120 },
		{ name: 'Лит Энержи Зеро ж/б 0,45л (24шт)', price: 70 },
		{ name: 'Добрый Кола Без Сахара 1,0л', price: 100 },
		{ name: 'Миринда Цитрус 0,25л (30шт)', price: 50 },
		{ name: 'Мохито Манго ж/б 0,45л', price: 60 },
		{ name: 'Мохито Лайм ж/б 0,45л', price: 60 },
		{ name: 'Серноводск Лимон 0,5л', price: 50 },
		{ name: 'Дубайский Сок', price: 50 },
		{ name: 'Ред Булл Красный Арбуз ж/б 0,25л', price: 50 },
		{ name: 'Ред Булл Желтый Тропический ж/б 0,25л', price: 50 },
		{ name: 'Лит Энержи Манго 12шт', price: 70 },
		{ name: 'Лит Энержи Черника (6шт) 0,45л', price: 60 },
		{ name: 'Родник Мохито 0,5л', price: 50 },
		{ name: 'Родник Груша 0,5л', price: 50 },
		{ name: 'Родник Ананас 0,5л', price: 50 },
		{ name: 'Болд Манго-Какос 0,5л', price: 50 },
		{ name: 'Серноводская Вода 1,5л', price: 50 },
		{ name: 'Болд Красный Барбарис 0,5л', price: 50 },
		{ name: 'Болд Серый Витамин 0,5л', price: 50 },
		{ name: 'Болд Манго-Какос 0,33л', price: 50 },
		{ name: 'Болд Серый Бутылка 0,33л', price: 50 },
		{ name: 'Кинза Гранат ж/б 0,32л', price: 70 },
	]

	const combinedArray = data1.map(item1 => {
		const item2 = date2.find(item2 => item2.name === item1.name)
		return {
			name: item1.name,
			price_per_pack: item1.price,
			price_per_unit: item2 ? item2.price : null,
		}
	})

	console.log(combinedArray)

	// Фильтруем товары по наименованию
	const filteredProducts = combinedArray.filter(product =>
		product.name.toLowerCase().includes(searchTerm.toLowerCase())
	)

	console.log(combinedArray)

	return (
		<div className='app-container'>
			<h1>Поиск товаров</h1>
			<SearchBar setSearchTerm={setSearchTerm} />
			<ProductList products={filteredProducts} />
		</div>
	)
}

export default App
