import styled from 'styled-components'

const Btn = styled.div<{outline? : boolean , large? : boolean}>`
  background-color: ${props => props.outline ? "transparent" : "#3F3D56"};
  height: 3.4rem;
  border-radius: 100px;
  color :  ${props => props.outline ? "3F3D56" : "white"};
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  padding: 0 ${props => props.large ? "6.4" : "3.2"}rem;
  margin: 0 auto;
  font-weight: 500;
  border: 2px solid ${props => props.outline ? "#3F3D56" : "transparent"};
  min-width: 14rem;
`

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface ButtonPropsType {
    text : string,
    outline ?: boolean,
    large?: boolean
}

function Button(props : ButtonPropsType):JSX.Element {
    return (
       <Btn large={props.large} outline={props.outline}>
           {props.text}
       </Btn>
    );
}

export default Button;
