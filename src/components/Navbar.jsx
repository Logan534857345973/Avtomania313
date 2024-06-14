import React from 'react'
import styled from 'styled-components'
import SearchIcon from "@mui/icons-material/Search";
// import {BadgeIcon} from '@mui/icons-material/Badge';
import { ShoppingCart } from '@mui/icons-material';

// Картинки
import Car from "../components/img/Car.jpg"
import Car3 from "../components/img/Car3.jpg"
import Car4 from "../components/img/Car4.jpg"
import { Badge } from '@mui/material';

const Container = styled.div`
    height: 60px;
    background-color: #ffffff; 
`


const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    text-align: center;
    align-items: center;
`

const Conter = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    align-items: center;
    display: flex;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`
const Logo = styled.div`
    font-weight: bold;
`


const MenuItem = styled.div`
     font-size: 14px;
    cursor: pointer;
    margin-right: 30px;
`

const Iimages = styled.div`
    display:flex;
    display: block;
    margin-right: 50px;
  
`

const Main = styled.div`
    & img{
        width: 600px;
        left: 10px;
         margin-left: 100px;  
         margin-top: 100px;
        display: flex;
    }
`

const Iimages1 = styled.div`
    & img{
        width: 600px;
        left: 10px;
        margin-left: 1000px;
        margin-top: -1185px;
        display: flex;
    }
`

const Text = styled.div`
        margin-left: 1000px;
`
const Text2 = styled.div`
        margin-left: 100px;
`

const Text3 = styled.div`
        margin-left: 100px;
`

const Navbar = () => {
    return (
        <Main>
            <Container>
                <Wrapper>
                    <Left>
                        <SearchContainer>
                            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                            <Input></Input>
                        </SearchContainer>
                    </Left>
                    <Conter>
                        <Logo>AVTONOMIA</Logo>
                    </Conter>
                    <Right>
                        <form action="Registration.js">
                        <button>Регистрация</button>
                        </form> 
                        <form action="">
                        <button>Войти</button>
                        </form>    
                        <form action="">
                        <button>Контакты</button>
                        </form>     
                        <MenuItem>
                            <Badge badgeContent={4} color='primary'>
                                <ShoppingCart />
                            </Badge>
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>

            <Iimages>
        <img src={Car} alt="Car"/>
        <Text3>
        <h1>Машина Mercedes-Benz S-Класс</h1>
        <h2>Машина S-Класса, довольно крупная для мерседеса как и по длине, 330км/ч</h2>
        <h3>Цена: ~18.000.000 рублей</h3>
        </Text3>
        <img src={Car3} alt="Car3"/>
        <Text2>
        <h1>Машина BMW</h1>
        <h2>Машина BMW очень быстрая и разгон 340 км/ч</h2>
        <h3>Цена: ~5.500.000 рублей </h3>
        </Text2>
       </Iimages>  
       <Iimages1>
        <img src={Car4} alt="Car4"/>
        <Text>
        <h1>Машина Lamborghini Hurakan</h1>
        <h2>Машина Lamborghini Hurakan очень быстрая и разгон 320 км/ч</h2>
        <h3>Цена: ~20.000.000 рублей </h3>
        </Text>
        </Iimages1>
        </Main>

   
    )
}


export default Navbar
