import React from 'react'
import styled from 'styled-components'
import Car3 from "../components/img/Car3.jpg"

const Container = styled.div`
    height: 10000px;
    background-color: #af7800; 
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

const Logo = styled.div`
    font-weight: bold;
`

const Text = styled.div`
        margin-top: 600px;
        margin-left: -0px;
        text-align: center; 
`
const Images = styled.div`
    & img{
        width: 600px;
        left: 10px;
        margin-left: 690px;
        margin-top: -700px;
        display: flex;
    }
`

const Tovar = () => {
  return (
    <Main>
      <Container>
      <Wrapper>
        <Left>
          <Logo>BMW M5 E60</Logo>
          <Text>
            <h1>Машина BMW M5 E60 развивает скорость в 340 км/ч</h1>
            <h2>BMW находится в оригинальном сером кузове</h2>
            <h3>Разгон с 0 до 100 составляет 4.7 с</h3>
            <h4>Расход топлива 14.4 литров на 100km</h4>
            <h5>Цена:4.500.000-5.500.000 рублей</h5>
            </Text>
            <Images>
            <img src={Car3} alt="Car3"/>
            </Images>
        </Left>
      </Wrapper>
      </Container>
    </Main>
  )
}

export default Tovar
