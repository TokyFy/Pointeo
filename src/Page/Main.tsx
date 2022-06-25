import Hero from '../components/Hero';
import imageHero from '../image/ImageHero1.svg';
import Button, { BtnContainer } from '../components/Btn';
import TopBar from '../components/TopBar';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Inner = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
function Main(): JSX.Element {
  return (
    <>
      <Wrapper>
        <TopBar />
        <Inner>
          <Hero
            image={imageHero}
            Header={'Heyo!!!'}
            Description={
              'You can now add points to member or register a new one'
            }
          />
          <BtnContainer>
            <Button text={'Scan a Qr code'} />
            <Button text={'Add a Users'} outline />
          </BtnContainer>
        </Inner>
      </Wrapper>
    </>
  );
}

export default Main;
