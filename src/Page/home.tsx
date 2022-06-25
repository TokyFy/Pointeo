import React from "react";
import Hero from "../components/Hero";
import Button from "../components/Btn";
import {BtnContainer} from "../components/Btn";
import image from '../image/welcome.svg'


const Home: React.FC = ()=>{
    return <>
        <Hero image={image}
            Header={'Welcome to Pointeo'}
            Description={'To make a scan , allow access to your device’s video camera.'}/>
        <BtnContainer>
            <Button text={'Continue'} large/>
        </BtnContainer>
      </>
}

export default Home;