import { supabaseClient } from "@/lib/supabase"
import Link from "next/link"
import { useEffect, useState } from "react"

const User = () => {
  const [username, setUsername] = useState("")
  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: { user } } = await supabaseClient.auth.getUser()

      setUsername(user?.user_metadata.username)
      // console.log(user?.user_metadata.username);
    }
    // getCurrentUser()
  }, [])


  return (
    <div className="px-2 max-w-[60rem] mx-auto">
      {/* <div>welcome {username}</div> */}
      <nav className="p-4 flex item-center justify-between border-b border-b-slate-200">
          <h1 className="text-2xl font-semibold">Anonymous</h1>
          <Link href="/signin">

          <button className="bg-black text-white text-sm p-2 rounded font-semibold">Get Started</button>
          </Link>
        </nav>
    </div>
  )
}

export default User