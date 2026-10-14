import axios from "axios";
import { useState } from "react"

const AxiosNewTodo = () => {

    const[title,setTitle] = useState("");

    const handleInputChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //jsonplaceholder API 데이터 보내기
        //axios.post(인자1, 인자2)
        //인자1 - url 경로, 인자2 - 서버로 보낼 데이터 객체
        axios.post("https://jsonplaceholder.typicode.com/todos",{
            title: title,
            completed: false
        }
        )
        .then(response => {
            console.log("추가된 데이터", response.data);
            alert("할 일 추가 완료")
            setTitle("")
        })
        .catch((error) => {
            console.error("할 일 추가에 실패했습니다.", error);
            alert("할 일 추가에 실패했습니다. 다시 시도해 주세요.");
        });

    }

    return(
        <div>
            <h2>할 일 추가</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="할 일 입력"
                value={title}
                onChange={handleInputChange}
                 />
                 <button>추가</button>
            </form>
        </div>
    )
}

export default AxiosNewTodo
