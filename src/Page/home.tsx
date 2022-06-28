import React, {useEffect} from "react";
import Hero from "../components/Hero";
import Button, {BtnContainer} from "../components/Btn";
import image from '../image/welcome.svg';
import {useNavigate} from "react-router-dom";

const Home: React.FC = () => {

    const navigate = useNavigate();

    const clickHandler = () => {
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;

        navigator.mediaDevices
            .getUserMedia({
                video: {
                    width: {ideal: viewportHeight},
                    height: {ideal: viewportWidth},
                    facingMode: 'environment'
                },
                audio: false,
            })
            .then(function () {
                navigate("/app");
            })
            .catch(function (err) {
                console.log('An error occurred: ' + err);
            });
    }

    useEffect(() => {
        // @ts-ignore
        navigator.permissions.query({name: "camera"}).then(
            result => {
                if (result.state === "granted") {
                    navigate('/app')
                }
            }
        )
    }, [navigate]);


    return <>
        <Hero
            image={image}
            Header={'Welcome to Pointeo'}
            Description={'To make a scan , allow access to your device’s video camera.'}/>
        <BtnContainer>
            <Button onClick={clickHandler} text={'Continue'} large/>
        </BtnContainer>
    </>
}

export default Home;