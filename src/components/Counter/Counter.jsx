
import {styled} from 'styled-components'
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';


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

  const counter=useSelector(state=>state.counter);
  const counterToggle=useSelector(state=>state.showCounter)

 const dispatch=useDispatch();


const incrementHandler=()=>{
  dispatch({type:"increment"})
}

const increaseBy5 =()=>{
  dispatch({type:"increase",amount:5})
}

 
const decrementHandler=()=>{
  dispatch({type:"decrement"})
}
 

const toggleHandler=()=>{
  dispatch({type:"toggle"})
}

return (
    <StyledDiv>
  <StyledBlock>
    {counterToggle && <p style={{fontSize:"32px",marginTop:"20px"}}>Counter {counter}  </p> }
    <Button onClick={incrementHandler}>+</Button>
    <Button onClick={increaseBy5}>+5</Button>
    <Button onClick={decrementHandler}>-</Button>
    <Button  onClick={toggleHandler}>Toggle</Button>
  </StyledBlock>

    </StyledDiv>
)


}