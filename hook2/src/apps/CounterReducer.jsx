import {useDispatch, useSelector} from "react-redux"
import { 
    increment,
    decrement,
    incrementByAmount } from "../store/counterSlice"
import { useState } from "react"

const CounterReducer = () => {
    //store의 state에서 count 값을 가져옴
    const count = useSelector(state => state.counter.count)
    const [inputValue, setInputvalue] = useState();

    //dispatch 함수 가져와서 액션을 전달
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setInputvalue(Number(e.target.value))
    }

    return(
        <div>
            <h2>Counter</h2>
            <h3>현재 숫자 : {count}</h3>
            <button onClick={()=> {
                dispatch(increment())
            }}>증가</button>
            <button onClick={()=> {
                dispatch(decrement())
            }}>감소</button>
            <div>
                {/* 입력한 값 만큼 증가 */}
                <input 
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                 />
                 <button onClick={() => {
                    dispatch(incrementByAmount(inputValue))
                 }}>입력한값만큼 증가</button>
            </div>
        </div>
    )
}

export default CounterReducer
