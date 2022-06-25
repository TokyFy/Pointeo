import React, {useEffect, useRef, useState} from "react";
import jsQR from "jsqr";
import styled from "styled-components";

const Light =  styled.div`
  position: absolute;
  background-color: aquamarine;
  height: 30px;
  width: 30px;
  z-index: 3;
  border-radius: 50%;
  bottom: 15px;
  right: 15px;
`

const QrScanner: React.FC = ()=>{

    const videoRef = useRef<HTMLVideoElement>(null) //document.getElementById('video')! as HTMLVideoElement;
    const canvasRef = useRef<HTMLCanvasElement>(null) //document.getElementById('canvas')! as HTMLCanvasElement;

    const [scanned, setScanned] = useState(false);

    useEffect(()=>{

        const video = videoRef.current!;
        const canvas = canvasRef.current!;

        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;

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

        function drawLine(begin : {x: number , y:number}, end:{x: number , y:number}, color:string) {
            CanvasContext.beginPath();
            CanvasContext.moveTo(begin.x, begin.y);
            CanvasContext.lineTo(end.x, end.y);
            CanvasContext.lineWidth = 4;
            CanvasContext.strokeStyle = color;
            CanvasContext.stroke();
        }

        function camera() {
            if(!scanned) {
                CanvasContext.drawImage(video, 0, 0, viewportWidth, viewportHeight);
                let imageData = CanvasContext.getImageData(
                    0,
                    0,
                    canvas.width,
                    canvas.height
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

                    drawLine(
                        code.location.topLeftCorner,
                        code.location.topRightCorner,
                        '#6c63ff'
                    );
                    drawLine(
                        code.location.topRightCorner,
                        code.location.bottomRightCorner,
                        '#6c63ff'
                    );
                    drawLine(
                        code.location.bottomRightCorner,
                        code.location.bottomLeftCorner,
                        '#6c63ff'
                    );
                    drawLine(
                        code.location.bottomLeftCorner,
                        code.location.topLeftCorner,
                        '#6c63ff'
                    );
                }
            }

            requestAnimationFrame(camera);
        }
        requestAnimationFrame(camera);
    }, [scanned])

    return <>
    <video style={{display:"none"}} ref={videoRef}>There is no video</video>
    <canvas style={{}} ref={canvasRef}>There is no canvas</canvas>
        { scanned ? <Light/> : null}
</>
}

export default QrScanner;