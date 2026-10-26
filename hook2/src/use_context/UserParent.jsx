import UserChild from "./UserChild"
import { createContext } from "react";

export const UserContext = createContext({});

const UserParent = () => {
    
    const user = { name: "홍길동", age: 20 }

    return(
        <div>
            <h2>UserParent 컴포넌트</h2>
            <UserContext.Provider value={user}>
                <UserChild/>
            </UserContext.Provider>
        </div>
    )
}

export default UserParent

