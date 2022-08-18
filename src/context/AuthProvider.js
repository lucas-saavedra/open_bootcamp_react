import { createContext, useContext, useState } from "react";


let AuthContext = createContext(null)
const fakeUserDb = {
    email: 'lucassaavedra50@gmail.com',
    password: '123456'
}
export const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null)
    let [error, setError] = useState(null)

    let signin = (newUser) => {
        if (fakeUserDb.email === newUser.email && fakeUserDb.password === newUser.password) {
            setUser(newUser);
        } else {
            setError('Password or email incorrect')
        }
    }

    let signout = () => {
        setUser(null);
        setError(null);
    }

    let value = { user, signin, signout, error }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


export const useAuth = () => {
    return useContext(AuthContext)
}

