import styled from "styled-components";
import Qrscanner from "./Page/qrscaner";

const vh = window.innerHeight;

const Container = styled.div`
  height: ${vh}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


function App():JSX.Element {
  return (
      <Container>
        <Qrscanner/>
      </Container>
  );
}

export default App;
