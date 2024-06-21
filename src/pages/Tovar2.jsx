import React from 'react'
import styled from 'styled-components'
import Car from "../components/img/Car.jpg"

const Container = styled.div`
    height: 10000px;
    background-color: #c5c21f; 
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
          <Logo>Mercedes-Benz S</Logo>
          <Text>
          <h1>Машина Mercedes-Benz S развивает скорость в 260 км/ч</h1>
            <h2>BMW находится в оригинальном сером кузове</h2>
            <h3>Разгон с 0 до 100 составляет 4.1 с</h3>
            <h4>Расход топлива 18.4 литров на 100km</h4>
            <h5>Цена:17.500.000-18.000.000 рублей</h5>
            </Text>
            <Images>
            <img src={Car} alt="Car"/>
            </Images>
        </Left>
      </Wrapper>
      </Container>
    </Main>
  )
}

export default Tovar
