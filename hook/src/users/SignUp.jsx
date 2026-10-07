import { useState } from "react"

const SignUp = () => {
    //폼 데이터 상태 관리
    //name, age, job, memo 전체 관리
    const [formData, setFormData] = useState({
        name: "", // 이름
        job: "employee", //직업
        gender: "", //성별
        memo: "", // 자기 소개
})

//모든 필드 입력값 변경 함수
const handleInputChange = (e) => {
    const {name, value} = e.target;   //e.target.value, e.target.name

    setFormData({...formData, [name]: value}); // 기존 배열에 [name]:value 추가
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("제출 데이터:", formData);
}

    return(
        <div className="sign-up">
            <h2>회원 가입</h2>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="signup-name">이름</label>
                        <input 
                        id="signup-name"
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        />
                    </li>
                    <li>
                        <label htmlFor="signup-job">직업</label>
                        <select 
                        id="signup-job"
                        name="job"
                        value={formData.job}
                        onChange={handleInputChange}>
                        <option value="employee">회사원</option>
                        <option value="student">학생</option>
                        <option value="nojob">백수</option>
                        <option value="animal">금수</option>
                        </select>
                    </li>
                    <li>
                        <span id="signup-gender-label">성별</span>
                        <div className="gender-options" role="group" aria-labelledby="signup-gender-label">
                        <label>
                        <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender ==="male"}
                        onChange={handleInputChange}
                        />남자
                    </label>
                        <label>
                        <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender ==="female"}
                        onChange={handleInputChange}
                        />여자
                        </label>
                        </div>
                    </li>
                    <li>
                        <label htmlFor="signup-memo">자기소개</label>
                        <textarea 
                        id="signup-memo"
                        name="memo" 
                        rows={5}
                        cols={20}
                        value={formData.memo}
                        onChange={handleInputChange}>
                        </textarea>
                    </li>
                    <li>
                        <button type="submit">가입</button>
                    </li>
                </ul>

            </form>
        </div>
    )
}

export default SignUp
