import React,{useEffect,useReducer} from 'react'


const initialState = {
    loading: true,
    posts:[],
    error:''

}
const reducer = (state,action) =>  {
    switch(action.type){
        case "FETCH_SUCCESS":
            return {
                loading:false,
                posts: action.payload,
                error:''
            }
            break;
            case "FETCH_ERROR" :
                return {
                      loading:false,
                posts: {},
                error:'error occured'
                }
                break;
                default :
                return state
    }
}

function CounterTwo() {
const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res => res.json())
        .then((res) => {
              dispatch({type:"FETCH_SUCCESS", payload:res});
        }).catch(
            (err) => {
                dispatch({type:"FETCH_ERROR"})
            }
        )
    
},[])
    return (
        <div>
       <ul>
           {
               state.posts.map((item) => {
                   return <li key={item.id}>
                          {
              state.loading ? 'loading...' : item.id
          }
          {
              state.error ? state.error : ''
          }
                   </li>
               })
           }
       </ul>
        </div>
    )
}

export default CounterTwo
