import { useState } from "react"

const Counter = () => {
    //초기화 필수 : const count = 0
    const [count, setCount] = useState(0);

    // 숫자 1 증가 핸들러(함수)
    const increment = () => {
        setCount(count + 1 );
    }
    const decrement = () => {
        setCount(count - 1 );
    }

    return (
        <div>
            <h2>카운터 만들기</h2>
            <h3>현재 Count : {count}</h3>
            <p><button onClick={increment}>+ 증가</button></p>
            <p><button onClick={decrement}>- 감소</button></p>
            <p><button onClick={()=> setCount(0)}>초기화</button></p>
        </div>
    )
}
export default Counter