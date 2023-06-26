import { supabaseClient } from "@/lib/supabase"
import { useEffect, useState } from "react"

const User = () => {

    const [username,setUsername] = useState("")
    useEffect(() => {
        const getCurrentUser = async() => {
            const { data: { user } } = await supabaseClient.auth.getUser()
            
            setUsername(user?.user_metadata.username)
            // console.log(user?.user_metadata.username);
            
        }
        getCurrentUser()
    },[])


  return (
    <div>welcome {username}</div>
  )
}

export default User