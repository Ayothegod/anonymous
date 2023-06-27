import { supabaseClient } from "@/lib/supabase"
import Link from "next/link"
import { useEffect, useState } from "react"
import Dropdown from "@/components/ui-lib/Dropdown"
import { CopyToClipboard } from "react-copy-to-clipboard"

const User = () => {
  const [username, setUsername] = useState("")
  const [copyValue, setCopyValue] = useState("")
  const [copyState, setCopyState] = useState(false)
  const [dropdown, setDropdwon] = useState(false)
  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: { user } } = await supabaseClient.auth.getUser()
      setUsername(user?.user_metadata.username)
      // console.log(user)
    }
    getCurrentUser()
  }, [])

  return (
    <div className="px-2 max-w-[60rem] mx-auto">
      <nav className="p-2 flex item-center justify-between border-b border-b-slate-200 relative">
        <h1 className="text-2xl font-semibold">Anonymous</h1>
        <div>
          <Dropdown />
        </div>
      </nav>

      <div className="my-4 md:mx-20">
        <h2 className="text-lg mx-4">welcome <span className="font-semibold text-2xl capitalize">{username}</span></h2>

        <div>
          <input type="text" value={copyValue} className="border border-black"
            onChange={e => setCopyValue(e.target.value)} />

          <CopyToClipboard text={copyValue}
            onCopy={() => setCopyState(true)}>
            <button className="bg-black text-white text-sm p-2 rounded font-semibold">Copy to clipboard</button>
          </CopyToClipboard>
          {copyState && copyState ? <span className="text-red-600">Copied.</span> : null}
        </div>
      </div>
    </div>
  )
}
// jksajksjkjkswekewioioweop
export default User