import React, {useEffect, useRef, useState} from "react";
import jsQR from "jsqr";
import styled from "styled-components";

const Result =  styled.p`
  font-size: 1rem;
  position: absolute;
  background-color: #6c63ff;
  color: white;
  padding: 4px 32px;
  z-index: 3;
  border-radius: 5px;
  bottom: 15px;
  right: 50%;
  transform: translate(50% , 0);
  max-width: 90%;
  text-align: center;
`

const ScanArea = styled.div<{Area : number}>`
  border-radius: 30px;
  width: ${props => props.Area}px;
  height: ${props => props.Area}px;
  border: 6px solid #6c63ff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);
  z-index: 99;
`

const QrScanner: React.FC = ()=>{
    const AREA:number = 320; //pixel

    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    const videoRef = useRef<HTMLVideoElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)


    const [scanned, setScanned] = useState(false);
    const [result, setResult] = useState("");

    useEffect(()=>{

        const video = videoRef.current!;
        const canvas = canvasRef.current!;

        let CanvasContext = canvas.getContext('2d')!;
        CanvasContext.filter = 'grayscale(1)';
        canvas.width = viewportWidth;
        canvas.height = viewportHeight;

        // up layer
        navigator.mediaDevices
            .getUserMedia({
                video: {
                    width: { ideal: viewportHeight },
                    height: { ideal: viewportWidth },
                    facingMode : 'environment'
                },
                audio: false,
            })
            .then(function (stream) {
                video.srcObject = stream;
                video.play().then(()=>{
                    console.log('Video running')
                });
            })
            .catch(function (err) {
                console.log('An error occurred: ' + err);
            });

        function camera() {
            if(!scanned) {
                CanvasContext.drawImage(video, 0, 0, viewportWidth, viewportHeight);
                let imageData = CanvasContext.getImageData(
                    canvas.width/2 - AREA/2,
                    canvas.height/2 - AREA/2,
                    AREA,
                    AREA
                );

                let code = jsQR(
                    imageData.data,
                    imageData.width,
                    imageData.height,
                    {
                        inversionAttempts: 'dontInvert',
                    },
                );

                if (code) {
                    setScanned(true);
                    setResult(code.data)
                }
            }

            requestAnimationFrame(camera);
        }
        requestAnimationFrame(camera);
    }, [scanned , viewportHeight ,viewportWidth])

    return <>
        <ScanArea Area={AREA}/>
        <video style={{ filter: 'grayscale(1)'}} ref={videoRef}>There is no video</video>
        <canvas style={{display:"none"}} ref={canvasRef}>There is no canvas</canvas>
        { scanned ? <Result>"{result}"</Result> : null }
        </>
}

export default QrScanner;