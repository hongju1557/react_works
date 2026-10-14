import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

const AxiosTodos = () => {

    // JSONPlaceholder API에서 todos 데이터 가져오기
    const [datas,setDatas] = useState([]);

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
            setDatas(response.data);
        })
        .catch((error) => {
            console.error("할 일 목록을 가져오지 못했습니다.", error);
        });
    },[]);

    return(
        <div>
            <h2>할 일(To-do)목록</h2>
            <ul>
                {datas.map((todo) => (
                    <li key={todo.id}>
                        <Link to={`/axios/${todo.id}`}>{todo.title}</Link>
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default AxiosTodos
