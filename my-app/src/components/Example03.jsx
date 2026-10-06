const Example03 = () => {
    //클릭 이벤트 함수
    const handleClick = () => {
        alert("버튼이 클릭되었습니다.")
    }
    //입력 값 변경 핸들러(함수)
    const handleInputChange = (event) => {
        // console.log(event);
        console.log(event.target.value);
        
    }

    return(
        <div>
            <h2>이벤트 핸들러 함수</h2>
            {/* 함수 호출할 때 소괄호 생략함 */}
            <button onClick={handleClick}>클릭하세요</button>
            <p>
            <input 
            type="text"
            placeholder="여기에 글자 입력."
            onChange={handleInputChange} 
            />
            </p>
        </div>
    )
};
export default Example03