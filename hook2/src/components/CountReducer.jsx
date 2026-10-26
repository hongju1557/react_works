import { useReducer } from "react"

const reducer =(state, action) => {
    console.log(state,action);

    switch (action.type) {
            case "INCREMENT":
                return {count: state.count +1}
            case "DECREMENT":
                return {count: state.count -1}
            case "RESET":
                return {count: 0}
            default:
                return state;
    }
    
}

const CountReducer = () => {
    //useReducer(reducer 함수, 초기 상태)
    const [state,dispatch] = useReducer(reducer, {count: 0});


    return(
        <div>
            <h2>useReducer</h2>
            <h3>state: {state.count}</h3>
            <button onClick={()=> {
                dispatch({type: "INCREMENT"})
            }}>증가</button>
            <button onClick={()=> {
                dispatch({type:"DECREMENT"})
            }}>감소</button>
            <button onClick={()=>{
                dispatch({type: "RESET"})
            }}>초기화</button>
        </div>
    )
}

export default CountReducer
