import Hero from '../components/Hero';
import imageHero from '../image/ImageHero1.svg';
import Button, { BtnContainer } from '../components/Btn';
import TopBar from '../components/TopBar';
import { useNavigate } from 'react-router-dom';
import { Inner, Wrapper } from '../components/LayoutUtil';

function Main(): JSX.Element {
  const navigate = useNavigate();

  const scanClickHandler = () => {
    navigate('/scan');
  };

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
            <Button onClick={scanClickHandler} text={'Scan a Qr code'} />
            <Button text={'Add a Users'} outline />
          </BtnContainer>
        </Inner>
      </Wrapper>
    </>
  );
}

export default Main;
