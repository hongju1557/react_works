import { useRef } from "react"

const InputFocus = () => {
    //객체는 초기화 null
    const inputRef = useRef(null);
    console.log(inputRef);

    const doClick = () => {
        alert(`환영합니다. ${inputRef.current.value}`)
        inputRef.current.focus();
        inputRef.current.value = "";
    }
    

    return(
        <div>
            <h2>DOM 요소에 접근(입력상자)</h2>
            <input 
            type="text"
            ref={inputRef}
            placeholder="이름을 입력하세요." 
            />
            <button>가입</button>

        </div>
    )
}

export default InputFocus