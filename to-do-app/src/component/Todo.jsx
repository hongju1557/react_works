import { useState } from "react"

const Todo = () => {
    const [todos, setTodos] = useState([
        {id: 1, text : '운동하기', completed: false},
        {id: 2, text : '영화보기', completed: false},
    ])
    const [inputValue, setInputValue] = useState('')

    console.log(todos.length);

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value)
        
    }
    

    return(
        <div></div>
    )
}

export default Todo