import UserGrandChild from "./UserGrandChild"

const UserChild = ({user}) => {

    return(
        <div>
            <h2>UserChild 컴포넌트</h2>
            <UserGrandChild user={user}/>
        </div>
    )
}

export default UserChild