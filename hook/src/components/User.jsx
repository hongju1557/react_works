import { useEffect, useState } from "react"

const User = () => {
    const [name,setName] = useState();
    const [age,setAge] = useState();

    //이름 변경 함수
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeAge = (e) => {
        setAge(e.target.value);
    }
    useEffect(()=> {
        console.log("렌더링...");
        console.log(`이름 :  ${name}, 나이 : ${age}`);
        
    },[age]
);
    
    

    return (
        <div>
            <h2>사용자 정보</h2>
            <input 
            type="text" 
            placeholder="이름 입력"
            value={name}
            onChange={onChangeName}
            />
            <input 
            type="text" 
            placeholder="나이 입력"
            value={age}
            onChange={onChangeAge}
            />
            <p>이름 : {name}</p>
            <p>나이 : {age}</p>
        </div>
    )
}

export default User