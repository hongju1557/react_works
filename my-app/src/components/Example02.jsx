//리스트(배열) 렌더링

const Example02 = () => {
    const items = ["사과","바나나","딸기"];
    return(
        <div>
            <h2>리스트 렌더링</h2>
            <ul className="list">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Example02;
