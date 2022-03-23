import React,{useReducer} from 'react';

const initialState = {
  firstCounter: 0,
  secondCounter: 9
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
      break;
    case "decrement":
      return { ...state,firstCounter: state.firstCounter - action.value };
      break;
    case "increment 1":
      return { ...state,secondCounter: state.secondCounter + action.value };
      break;
    case "decrement 2":
      return { ...state, secondCounter: state.secondCounter - action.value };
      break;
    case "reset":
      return initialState;
      break;
    default:
      return state;
      break;
  }
};

const FirstCounter = () => {
     const [count, dispatch] = useReducer(reducer, initialState);

    return <div>
       <p>count - {count.firstCounter}</p>
       <p>count - {count.secondCounter}</p>
          <button onClick={() => dispatch({ type: "increment", value:1})}>+</button>
          <button onClick={() => dispatch({ type: "decrement", value:1 })}>-</button>
          <button onClick={() => dispatch({ type: "increment 1", value:1 })}>+1</button>
          <button onClick={() => dispatch({ type: "decrement 2", value:1 })}>-1</button>
          <button onClick={() => dispatch({ type: "reset" })}>0</button>
        </div>
    
}
export default FirstCounter