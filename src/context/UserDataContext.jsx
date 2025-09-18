import { createContext, useState } from "react"

export const UserDataContext = createContext();

export function UserContextProvider(props){
    const [userData, setUserData] = useState([])
    const logUser = (user)=>{
        setUserData(user);
    }

    const dataContext = {
        userData,
        logUser
    }
    return(
        <UserDataContext.Provider value={dataContext}>
            {props.children}
        </UserDataContext.Provider>
    )
}
