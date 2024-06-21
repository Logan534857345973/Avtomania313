import React from 'react'
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

const Main = styled.div`
    & img{
        width: 600px;
        left: 10px;
         margin-left: 100px;  
         margin-top: 100px;
        display: flex;
    }
`
const Logo = styled.div`
  margin-right: 990px;

`
const Iimages = styled.div`
    display:flex;
    display: block;
    margin-left: 650px;
  
`
const Iimages1 = styled.div`
    display:flex;
    display: block;
    margin-left: 650px;
  
`
const Text = styled.div`
         margin-left: -0px;
        text-align: center; 
`
const Text1 = styled.div`
         margin-left: -0px;
        text-align: center; 
`



const Korzina = () => {
  return (
    <div>
      <Main>
        <Container>
          <Wrapper>
            <Left>

            </Left>
            <Conter>
              <Logo>Корзина</Logo>
            </Conter>
          </Wrapper>
        </Container>
        <Iimages>
        <img src={Car} alt="Car"/>
        </Iimages>
        <Text>
        <h1>Машина Mercedes-Benz S-Класс</h1>
        <h2>Машина S-Класса, довольно крупная для мерседеса как и по длине, максимальная скорость достигает 330км/ч</h2>
        <h3>Цена: ~18.000.000 рублей</h3>
        <h4>В наличии 20 штук!</h4>
        </Text>
        <Iimages1>
        <img src={Car4} alt="Car4"/>
        <Text1>
        <h1>Машина Lamborghini Hurыakan</h1>
        <h2>Машина Lamborghini Hurakan очень быстрая и разгон 320 км/ч</h2>
        <h3>Цена: ~20.000.000 рублей</h3>
        </Text1>
        </Iimages1>
      </Main>
    </div>
  )
}

export default Korzina

























