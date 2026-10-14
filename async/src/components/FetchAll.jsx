import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

const FetchAll = () => {
    // 할 일 목록 상태 관리
    const [datas, setDatas] = useState([]);
    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())  // json을 자바스크립트 객체 반환
            .then((result) => {
                setDatas(result);  //변환 데이터를 저장
                console.log(result);
                
            })
            .catch((error) => console.error(error));
    }, []); // 빈배열  - 처음 한 번만 렌더링 작동

    return(
        <div>
            <h2>할 일 목록</h2>
            <ul>
                {datas.map((todo) => (
                    <li key={todo.id}>
                        <Link to={`/${todo.id}`}>{todo.title}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default FetchAll;