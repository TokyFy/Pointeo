import styled from 'styled-components'

const Btn = styled.div<{outline? : boolean , large? : boolean}>`
  background-color: ${props => props.outline ? "transparent" : "#3F3D56"};
  height: 3.4rem;
  border-radius: 100px;
  color: ${props => props.outline ? "#3F3D56" : "white"};
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  padding: 0 ${props => props.large ? "6.4" : "3.2"}rem;
  font-weight: 500;
  border: 0.15rem solid ${props => props.outline ? "#3F3D56" : "transparent"};
  min-width: 14rem;
  cursor: pointer;

  @media screen and (max-width: 375px) {
    min-width: 12rem;
    padding: 0 ${props => props.large ? "4.2" : "2.4"}rem;
  }
`

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

interface ButtonPropsType {
    text : string,
    outline ?: boolean,
    large?: boolean
    onClick?: () => void
}

function Button(props : ButtonPropsType):JSX.Element {
    return (
        <Btn onClick={props.onClick} large={props.large} outline={props.outline}>
            {props.text}
        </Btn>
    );
}

export default Button;
