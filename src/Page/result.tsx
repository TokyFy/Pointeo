import React, {useEffect} from 'react';
import Hero from "../components/Hero";
import TopBar from "../components/TopBar";
import {Inner, Wrapper} from "../components/LayoutUtil";
import Button, {BtnContainer} from "../components/Btn";
import horaImage from "../image/ImageHero2.svg";
import {useParams} from "react-router-dom";
// import errorImage from "../image/ImageHero3.svg";

const Result: React.FC = () => {

    let {id} = useParams();

    useEffect(()=>{
        console.log(id);
    })

    return (
        <Wrapper>
            <TopBar/>
            <Inner>
                <Hero
                    image={horaImage}
                    Header={'Hora !'}
                    Description={'1 Points Added to'}
                    SubDescription={'RANAIVOARISOA FY NIAINA TOKY'}/>
                <BtnContainer>
                    <Button text={'Scan a Qr code'}/>
                    <Button text={'Add a Users'} outline/>
                </BtnContainer>
            </Inner>
        </Wrapper>
    );
};

export default Result;
