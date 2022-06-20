import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Button from "../components/Btn";

import image from '../image/welcome.svg'

const vh = window.innerHeight;

const Container = styled.div`
  height: ${vh}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Home: React.FC = ()=>{
    return <Container>
        <Hero image={image}
              Header={'Welcome to Pointeo'}
              Description={'To make a scan , allow access to your device’s video camera.'}/>
        <Button text={'Continue'}/>
    </Container>
}

export default Home;