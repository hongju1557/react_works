import { useState } from "react"

const InputValue = () => {
    const [text,setText] = useState("")

    const handleInputChange = (event) => {
        setText(event.target.value);
        // console.log(event.target.value);
    }

    return(
        <div>
            <h2>입력값 변경</h2>
            <input type="text"
            placeholder="글자를 입력하세요"
            onChange={handleInputChange}
            />
            <p>입력값 : {text}</p>
        </div>
    )
}

export default InputValue