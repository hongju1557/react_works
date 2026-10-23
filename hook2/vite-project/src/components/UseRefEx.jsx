import { useState, useRef } from "react"

const UseRefEx = () => {
    const [count, setCount] = useState(0);

    const countRef = useRef(0);

    console.log("렌더링...");

    //1증가 시키는 함수
    const increaseCount = () => {
        setCount(count+1);
    }

    const increaseCountRef = () => {
        countRef.current = countRef.current + 1;
        console.log("Ref:", countRef.current);
        
    }
    

    return(
        <div>
            <h1>UseRef실습</h1>
            <p>State: {count}</p>
            <p>Ref : {countRef.current}</p>
            <button onClick={increaseCount}>state 증가</button>
            <button onClick={increaseCountRef}>Ref증가</button>
        </div>
    )
}

export default UseRefEx