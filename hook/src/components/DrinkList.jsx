//Drinks의 하위 컴포넌트
const DrinkList = ({drinks}) => {
    return (
        <div>
            <h2>음료 목록</h2>
                <ul>
                {drinks.map((drink, index) => (
                    <li key={index}>{drinks.join(", ")}</li>
                )
                )
            }
                </ul>
        </div>
    )
}

export default DrinkList