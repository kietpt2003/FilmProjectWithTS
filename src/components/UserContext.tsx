import React, { createContext, useState } from 'react'
import { ProfileProps } from './CustomProps'

type UserContextProviderProps = {
    children: React.ReactNode
}

type UserContextType = {
    user: ProfileProps | undefined
    setUser: React.Dispatch<React.SetStateAction<ProfileProps | undefined>>
}
export const UserContext = createContext<UserContextType | undefined>(undefined)
export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<ProfileProps | undefined>(undefined)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}