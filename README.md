Мой сайт Avtomania продает спортивные машины. Сайт нужен чтобы покупать более новые модели машин. Сайт был создан Камышниковым Данилой Александровичем.
4 июня: Сделал главную страницу и добавил несколько товаров с иконками
```import React from 'react'
import styled from 'styled-components'
import SearchIcon from "@mui/icons-material/Search";
// import {BadgeIcon} from '@mui/icons-material/Badge';
import { ShoppingCart } from '@mui/icons-material';

// Картинки
import Car from "../components/img/Car.jpg"
import Car3 from "../components/img/Car3.jpg"
import Car4 from "../components/img/Car4.jpg"
import { Badge } from '@mui/material';```

6 июня: Добавил недостоющий товар с добавлением цен и началом второй страницы под названием регистрация.
```    <img src={QQQ} alt="QQQ"/>
                <Name>Имя</Name>
                <SearchContainer1>
                    <Input1></Input1>
                </SearchContainer1>
                <Name>Фамилия</Name>
                <SearchContainer2>
                    <Input2></Input2>
                </SearchContainer2>
                <Name>Отчество</Name>
                <SearchContainer3>
                    <Input3></Input3>
                </SearchContainer3>```
12 июня: Доделал страницу регистрации и преступил к странице корзина.
```import React from 'react'
import styled from 'styled-components'
import Car from "../components/img/Car.jpg"
import Car4 from "../components/img/Car4.jpg"

const Container = styled.div`
    height: 60px;
    background-color: #ff880086; 
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`  ```
19 июня: Добавил в карзину 2 товара и начал делать страницу о нас
``` </Container>
    <Text>
        <h1>Номер телефона: +7 (495) 266-24-94</h1>
        <h2>Адрес: Волгоградский пр-т., 43, к. 3, Москва, 109316</h2>
        <h3>Время работы: Ежедневно с 9:00-21:40</h3>
        <h4>Покупайте машины у нас всем будем рады!</h4>
    </Text>
    <Images>
    <img src={Avilon} alt="Avilon"/>
    </Images>```
20 июня: Доделал страничку о нас и начал добавлять кнопки к товарам и плюсики
```               <button>Товар</button>
</form>
<label for="input">Число:</label> 
<button id="buy">Купить</button>
<button id="plus">+</button>
<button id="minus">-</button></h3>```
21 июня: Доделал кнопки и сделал странички каждого товара.
1 товар
```         <Logo>BMW M5 E60</Logo>
          <Text>
            <h1>Машина BMW M5 E60 развивает скорость в 340 км/ч</h1>
            <h2>BMW находится в оригинальном сером кузове</h2>
            <h3>Разгон с 0 до 100 составляет 4.7 с</h3>
            <h4>Расход топлива 14.4 литров на 100km</h4>
            <h5>Цена:4.500.000-5.500.000 рублей</h5>
            </Text>
            <Images>
            <img src={Car3} alt="Car3"/>
            </Images>```
2 товар
```  <Text>
          <h1>Машина Mercedes-Benz S развивает скорость в 260 км/ч</h1>
            <h2>BMW находится в оригинальном сером кузове</h2>
            <h3>Разгон с 0 до 100 составляет 4.1 с</h3>
            <h4>Расход топлива 18.4 литров на 100km</h4>
            <h5>Цена:17.500.000-18.000.000 рублей</h5>
            </Text>
            <Images>
            <img src={Car} alt="Car"/>
            </Images>```
3 товар
```  <Text>
          <h1>Машина Lamborghini Hurakan развивает скорость в 350 км/ч</h1>
            <h2>BMW находится в оригинальном сером кузове</h2>
            <h3>Разгон с 0 до 100 составляет 2.1 с</h3>
            <h4>Расход топлива 16 литров на 100km</h4>
            <h5>Цена:18.500.000-20.000.000 рублей</h5>
            </Text>
            <Images>
            <img src={Car4} alt="Car4"/>
            </Images>```

Использование библеотек таких как: @mui/material, styled-components,@mui/icons-materia, @mui/icons-material/Search вот и все библеотеки.
