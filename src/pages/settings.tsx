import Dropdown from "@/components/ui-lib/Dropdown"
import Popover from "@/components/ui-lib/Popover"
import Link from "next/link"
import { useState } from "react"
import { LogOut } from "lucide-react"
import useSignout from "@/hooks/useSignout"
import { useUserContext } from "@/hooks/UserContext"
import { supabaseClient } from "@/lib/supabase"

const Settings = () => {
  const signout: any = useSignout()
  const user = useUserContext()
  console.log(user);
  if (user) {
    const usernameString = user?.user_metadata?.username
  }
  const [username, setUsername] = useState<any>(user?.user_metadata?.username)
  const [email, setEmail] = useState(user?.email)
  const [password, setPassword] = useState("")

  const updateUsername = async () => {
    const { data, error } = await supabaseClient.auth.updateUser({
      data: { username: 'new@gmail.com' }
    })
    console.log(data, error);
  }

  const updateEmail = async () => {
    const { data, error } = await supabaseClient.auth.updateUser({ email: 'new@gmail.com' })
    console.log(data, error);

  }

  return (
    <div className="px-2 max-w-[60rem] mx-auto">
      <nav className="p-2 flex item-center justify-between border-b border-b-slate-200 relative">
        <Link href={user?.email ? "/user" : "/signin"}>
          <h1 className="text-2xl font-semibold cursor-pointer">Anonymous</h1>
        </Link>
        <div>
          <Dropdown />
        </div>
      </nav>

      <div className="mt-8">
        <h2 className="font-semibold text-2xl capitalize text-center">Settings</h2>
        <div className="flex items-center justify-center mt-4 sm:mt-10 max-w-[40rem] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full p-4 gap-4">

            <div className="flex flex-col items-center justify-center">
              <Popover username={username} popcontent="Correct Username" value="Update Username" setUsername={setUsername} updateUser={updateUsername} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <Popover username={email} popcontent="Correct Email" value="Update Email" setUsername={setEmail} updateUser={updateEmail}/>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Popover username={password} popcontent="Correct Password" value="Update Password" setUsername={setPassword} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <button className="bg-white text-black border border-slate-200 text-sm py-2 px-6 rounded font-semibold w-[90vw] sm:w-60 flex items-center justify-center gap-4" onClick={signout}><LogOut className="h-5 w-5" />Logout</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Settings