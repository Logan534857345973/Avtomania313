
import React from 'react'
import styled from 'styled-components'
import QQQ from "../components/img/QQQ.png"

const Container = styled.div`
    height: 10000px;
    background-color: #a06a6a56; 
    background-color: #7e2d2d; 
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

const SearchContainer1 = styled.div`
     border: 1px solid none;
    align-items: center;
    display: flex;
    padding: 0px;
    margin-left: 300px;
`
const SearchContainer2 = styled.div`
     border: 1px solid none;;
    align-items: center;
    display: flex;
    padding: 0px;
    margin-left: 300px;
`
const SearchContainer3 = styled.div`
     border: 1px solid none;
    align-items: center;
    display: flex;
    padding: 0px;
    margin-left: 300px;
`
const SearchContainer4 = styled.div`
     border: 1px solid none;
    align-items: center;
    display: flex;
    padding: 0px;
    margin-left: 300px;
`
const SearchContainer5 = styled.div`
     border: 1px solid none;
    align-items: center;
    display: flex;
    padding: 0px;
    margin-left: 300px;
`
const SearchContainer6 = styled.div`
     border: 1px solid none;
    align-items: center;
    display: flex;
    padding: 0px;
    margin-left: 300px;
`
const SearchContainer7 = styled.div`
    border: 1px solid none;
    align-items: center;
    display: flex;
    padding: 0px;
    margin-left: 300px;
`

const Input1 = styled.input`
    border: none;
`
const Input2 = styled.input`
    border: none;
`
const Input3 = styled.input`
    border: none;
`
const Input4 = styled.input`
    border: none;
`
const Input5 = styled.input`
    border: none;
`
const Input6 = styled.input`
    border: none;
`
const Input7 = styled.input`
    border: none;
    
`


const Name = styled.div`
    margin-top: 50px;
    margin-left: 70px;
`


const MenuItem = styled.div`
     font-size: 14px;
    cursor: pointer;
    margin-right: 30px;
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




const Registration = () => {
  return (
    <Main>
    <Container>
        <Wrapper>
            <Left>
            </Left>
            <Conter> 
                <img src={QQQ} alt="QQQ"/>
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
                </SearchContainer3>
                <Name>Пароль</Name>
                <SearchContainer4>
                    <Input4></Input4>
                </SearchContainer4>
                <Name>Повторный пароль</Name>
                <SearchContainer5>
                    <Input5></Input5>
                </SearchContainer5>
                <Name>Номер телефона</Name>
                <SearchContainer6>
                    <Input6></Input6>
                </SearchContainer6>
                <Name>Дата рождения</Name>
                <SearchContainer7>
                    <Input7></Input7> 
                             
                </SearchContainer7>
                <button>Регистрация</button>
            </Conter>
            <Right>
                <MenuItem>
                </MenuItem>
            </Right>
 
        </Wrapper>
    </Container>
</Main>



  );
}


export default Registration
