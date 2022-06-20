import styled from 'styled-components'

const Btn = styled.div`
  background-color: #3F3D56;
  height: 3.4rem;
  border-radius: 100px;
  color : white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  padding: 0 6.4rem;
  margin: 0 auto;
  font-weight: 500;
`

interface ButtonPropsType {
    text : string
}

function Button(props : ButtonPropsType):JSX.Element {
    return (
       <Btn>
           {props.text}
       </Btn>
    );
}

export default Button;
