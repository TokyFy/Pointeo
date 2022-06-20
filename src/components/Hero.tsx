import styled from 'styled-components'
import React from "react";

const HeroDody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeroImage = styled.div`
  background-color: #ECEFFF;
  height: 16.4rem;
  width: 16.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  img {
    width: 75%;
    height: auto;
  }
`

const HeroHeader = styled.h1`
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  text-align: center;
  color: #3F3D56;
  margin: 1.6rem 0;
`

const HeroDescription = styled.p`
  font-family: 'Montserrat',serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  color: #7863FF;
  line-height: 1.4rem;
`

const HeroText = styled.div`
  max-width: 20rem;
  margin: 3.2rem 0;
`

interface HeroPropsType {
    image : string,
    Header : string,
    Description : string
}

function Hero(props : HeroPropsType):JSX.Element {
    return (
           <HeroDody>
               <HeroImage>
                   <img src={props.image} alt='welcome'/>
               </HeroImage>

               <HeroText>
                   <HeroHeader>
                       {props.Header}
                       {/*Welcome to Pointeo*/}
                   </HeroHeader>

                   <HeroDescription>
                       {props.Description}
                       {/*To make a scan , allow access to your device’s video camera.*/}
                   </HeroDescription>
               </HeroText>
           </HeroDody>
    );
}

export default Hero;
