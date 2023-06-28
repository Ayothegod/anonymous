import { createContext, useContext, useState,useEffect } from "react";
import { supabaseClient } from "@/lib/supabase"
import { useRouter } from "next/router";

const userContext = createContext<any>(null)

export function UserContextProvider({ children }: any) {
    const router = useRouter()
    const [user, setUser] = useState({})
    useEffect(() => {
        const getCurrentUser = async () => {
          const { data: { user } } = await supabaseClient.auth.getUser()
          if(user) return setUser(user)
        }
        getCurrentUser()
      }, [])

    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    )
}

export const useUserContext = () => useContext(userContext)
