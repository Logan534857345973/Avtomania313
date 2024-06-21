import React from 'react'
import styled from 'styled-components'
import Avilon from "../components/img/Avilon.jpg"


const Container = styled.div`
    height: 60px;
    background-color: #ff730078; 
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
const Logo = styled.div`
    font-weight: bold;
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
const Images = styled.div`
    display:flex;
    display: block;
    margin-left: 650px;
    margin-top: 0px;

`

const Text = styled.div`
        margin-left: -0px;
        text-align: center; 
`

const Onas = () => {
  return (
    <div>
<Main>
    <Container>
        <Wrapper>
            <Left>
            <Conter>
                <Logo>Вся информация о нас</Logo>
            </Conter>
            </Left>
        </Wrapper>
    </Container>
    <Text>
        <h1>Номер телефона: +7 (495) 266-24-94</h1>
        <h2>Адрес: Волгоградский пр-т., 43, к. 3, Москва, 109316</h2>
        <h3>Время работы: Ежедневно с 9:00-21:40</h3>
        <h4>Покупайте машины у нас всем будем рады!</h4>
    </Text>
    <Images>
    <img src={Avilon} alt="Avilon"/>
    </Images>

</Main>
    </div>
  )
}

export default Onas
