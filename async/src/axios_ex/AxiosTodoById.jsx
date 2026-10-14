import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const AxiosTodoById = () => {

    const {id} = useParams();
    const [data,setData] = useState(null);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response =>{
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            }
            )
    },[id])

    return(
    <div>
        <h2>할 일 상세보기</h2>
        {data && (
            <div>
                <p>제목: {data.title}</p>
                <p>완료 여부:{data.completed ? "완료" : "미완료"}</p>
            </div>
        )}
    </div>
    )
}

export default AxiosTodoById