import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const FetchOneById = () => {

    const {id} = useParams();

    const [data,setData] = useState(null);
    useEffect(()=> {

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json()) //json 데이터를 자바스크립트 객체로 변환
            .then(result => { //result - 자바스크립트 객체
                setData(result);
                console.log(result);
                
            })
            .catch(error => console.error(error));
    },[id])
        

    return(
        <div>
            <h2>할 일 (To-do) 데이터</h2>
            {data &&(
            <div>
                <p>id: {id}</p>
                <p>제목: {data.title}</p>
                <p>완료 여부: {data.completed ? "완료" : "미완료"}</p>
            </div>
            )}
        </div>
    )
}

export default FetchOneById