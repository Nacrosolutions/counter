
import {styled} from 'styled-components'
import Button from './Button';


const StyledDiv=styled.div`
display: flex;
margin: 0 auto;
background-color: #3a3a3a;
width:900px;
height: 700px;
border-radius: 10px;
`;


const StyledBlock=styled.div`
    background-color:  purple;
    margin: 100px auto;
    height:100px;
    width:500px;

`


export default function Counter () {
return (
    <StyledDiv>
  <StyledBlock>
    <p style={{fontSize:"32px",marginTop:"20px"}}>Counter  </p>
    <Button>+</Button>
    <Button>-</Button>
    <Button>Toggle</Button>
  </StyledBlock>

    </StyledDiv>
)


}