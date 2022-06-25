import styled from "styled-components";

import Menu from '../image/Menu.svg';
import ThemeIcon from '../image/ThemeIcon.svg';

const Bar = styled.div`
  width: 100%;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 0 1.6rem;
  margin-top: 1rem;
  span {
    margin: 0 auto;
    font-weight: 600;
    color: #3F3D56;
  }
  
  .themeIcon {
    height: 24px;
    width: auto;
  }
  
  img {
    height: 1rem;
    width: auto;
  }
`

function TopBar():JSX.Element {
    return (
        <Bar>
            <img  src={Menu} alt={'Humberger Menu'}/>
            <span>Pointeo</span>
            <img className={'themeIcon'} src={ThemeIcon} alt={'Moon Icons'}/>
        </Bar>
    );
}

export default TopBar;
