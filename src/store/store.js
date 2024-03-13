import {createSlice,configureStore} from '@reduxjs/toolkit';



//?RTK --------Implementation
const initialState={counter:0,showCounter:true}

const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
increment(state) {
state.counter=state.counter+1

},
decrement(state) {
    state.counter=state.counter-1

},
increase(state,action) {
    state.counter=state.counter+action.payload

},

toggle(state) {
    console.log("GERE",state.showCounter)

state.showCounter=!state.showCounter
},
    }
})




// const counterReducer=(state={counter:0,showCounter:true},action)=>{


//     if(action.type==='increment') {
//         return {
//             ...state,
//             counter:state.counter+1
//         }
//     }
//     if(action.type==='increase') {
//         return {
//             ...state,
//             counter:state.counter+action.amount
//         }
//     }
//     if(action.type==='decrement') {
//         return {
//             ...state,
//             counter:state.counter-1
//         }
//     }
//     if(action.type==="toggle") {
//         return {
//             ...state,
//             showCounter:!state.showCounter
//         }
//     }


//     return state;
  
// }

const store=configureStore({
    reducer:{
    counter:counterSlice.reducer,
    }
})

export const counterAction=counterSlice.actions

export default store;