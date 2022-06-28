import styled from "styled-components";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./Page/home";
import QrScanner from "./Page/qrscaner";
import Main from "./Page/Main";
import Result from "./Page/result";
import useViewports from "./hooks/useViewports";

const Container = styled.div<{ height: number }>`
  height: ${props => props.height}px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fffcfc;
  margin: auto auto;
  max-width: 600px;
  max-height: 820px;

  @media screen and (min-width: 600px) {
    border-radius: 5px;
  }
`


function App():JSX.Element {

    const [viewportHeight] = useViewports()

    return (
        <Container height={viewportHeight}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/app" element={<Main/>}/>
                    <Route path="/Scan" element={<QrScanner/>}/>
                    <Route path="/result" element={<Result/>}/>
                </Routes>
            </Router>
        </Container>
  );
}

export default App;
