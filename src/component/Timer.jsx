import React,{useReducer,useEffect,useRef} from 'react'
const initialState = {
    miliSecond: 0,
    second:  0,
    minute: 0,
    
}
const reducer = (state,action) => {
    switch(action.type){
        case "timer" :
            return{
                miliSecond: state.miliSecond + 1,
            second: state.second + 1 ,
                minute: state.minute + 1,
        }
        break;
        default :
        return state;
    }
}
function Timer() {

    // const [timer, setTimer] = useState(0);
    // const [timerTwo, setTimerTwo] = useState(0);
    const [time, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
    const minute = setInterval(()=>{
            dispatch({type:"timer"})
    },60000)
        
    }, [])
    useEffect(() => {
    const second = setInterval(()=>{
            dispatch({type:"timer"})
    },1000)
        
    }, [])
    useEffect(() => {
    const milisec = setInterval(()=>{
            dispatch({type:"timer"})
    },1)
        
    }, [])

    return (
        <div>
        <h3>stopwatch </h3>
        <h4><span>{ time.minute}</span> <span>{time.second}</span></h4>
       
            
        </div>
    )
}

export default Timer
