const IdList = () => {
    const List = [
        {id:1, name:"홍길동"},{id:2, name:"이순신"}
];
    return (
        <div>
            <h2> 사용자 리스트 </h2>
            <ul>
                {List.map((list)=>(
                    <li key={list.id}>{list.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default IdList