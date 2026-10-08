const AddTodo = () => {
    if (inputValue.trim() !=='') {
        const newTodo = {
            id: todos.length = 1,
            text: inputValue,
            completed: false
        }
    }

    setTodos([...todos, newTodo])
    setInputValue('')


    return (
        <div></div>
    )
    
}

export default AddTodo