import React from 'react';
import Hero from "../components/Hero";
import TopBar from "../components/TopBar";
import {Inner, Wrapper} from "../components/LayoutUtil";
import Button, {BtnContainer} from "../components/Btn";
import horaImage from "../image/ImageHero2.svg";
// import errorImage from "../image/ImageHero3.svg";


const result: React.FC = () => {
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

export default result;
