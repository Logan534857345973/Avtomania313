import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import {BadgeIcon} from '@mui/icons-material/Badge';
import {ShoppingCartIcon} from '@mui/icons-material/ShoppingCart';

// Картинки
import Car from "../components/img/Car.jpg"
import Car1 from "../components/img/Car1.jpg"
import Car3 from "../components/img/Car3.jpg"
import Car4 from "../components/img/Car4.jpg"

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
const Logo = styled.h1`
    font-weight: bold;
`

const MenuItem = styled.div`
     font-size: 14px;
    cursor: pointer;
    margin-right: 30px;
`
const ImgContainer = styled.div`
    & img{
        width: 350px;
    }
`

const ImgContainer1 = styled.div`
    & img{
        width: 600px;
        left: 10px;
        margin-right: 10px;
    }
`

const Iimages = styled.div`
    display:flex;
    display: block;
    margin-right: 50px;
`
const Iimages1 = styled.div`
    display:flex;
    display: block;
    margin-right: 50px;
`

const ImgContainerr = styled.div`
    & img{
        width: 600px;
        left: 10px;
        /* margin-left: 1005px; */
        display: flex;
    }
`

const Navbar = () => {
  return (
<ImgContainer>
    <ImgContainer1>
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <SearchIcon style={{color:"gray", fontSize:16}}/>
                    <Input></Input>
                </SearchContainer>
            </Left>
                
                    <Logo>AVTONOMIA</Logo>

   

                    <Conter>
                </Conter>
            <Right>
                <MenuItem>Регистрация</MenuItem>
                <MenuItem>Войти</MenuItem>
                <MenuItem>
                    <BadgeIcon badgeContent={4} color='primary'>
                        <ShoppingCartIcon></ShoppingCartIcon>
                    </BadgeIcon>
                </MenuItem>
            </Right>
        </Wrapper>
        <Iimages>
        <img src={Car} alt="Car"/>
        <img src={Car3} alt="Car3"/>
        </Iimages>
        <Iimages>
        <img src={Car1} alt="Car1"/>
        <img src={Car4} alt="Car4"/>
        </Iimages>
        <ImgContainerr>
        <Iimages1></Iimages1>
        </ImgContainerr>
    </Container>
    </ImgContainer1>
</ImgContainer>
  )
}


export default Navbar
