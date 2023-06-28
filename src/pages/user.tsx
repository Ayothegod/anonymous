import { supabaseClient } from "@/lib/supabase"
import Link from "next/link"
import { useEffect, useState } from "react"
import Dropdown from "@/components/ui-lib/Dropdown"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useRouter } from "next/router"
import { Share2, Settings } from "lucide-react"
import ShareOnSocial from "react-share-on-social";
import Image from "next/image"
import { useUserContext } from "@/hooks/UserContext"

const User = () => {
  const router = useRouter()
  const user = useUserContext()
  console.log(user);
  
  const [username, setUsername] = useState("")
  const [copyValue, setCopyValue] = useState("https://anonymous.vercel.app/user")
  const [copyState, setCopyState] = useState(false)
  const [dropdown, setDropdwon] = useState(false)
  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: { user } } = await supabaseClient.auth.getUser()
      setUsername(user?.user_metadata.username)
      if (!user) return router.push("/signin")
    }
    getCurrentUser()
  }, [])

  async function signout() {
    const { error } = await supabaseClient.auth.signOut()
    if (!error) return router.push("/signin")
    console.log(error);
  }

  return (
    <div className="px-2 max-w-[60rem] mx-auto">
      <nav className="p-2 flex item-center justify-between border-b border-b-slate-200 relative">
        <Link href={user?.email ? "/user" : "/signin"}>
          <h1 className="text-2xl font-semibold">Anonymous</h1>
        </Link>
        <div>
          <Dropdown />
        </div>
      </nav>

      <div className="my-4 md:mx-20">
        <h2 className="text-lg">welcome <span className="font-semibold text-2xl capitalize">{username}</span></h2>

        <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-2">
          <input type="text" value={copyValue} className="border-none bg-slate-200 py-2 rounded outline-none px-2 w-full sm:w-96"
            onChange={e => setCopyValue(e.target.value)} />

          <CopyToClipboard text={copyValue}
            onCopy={() => setCopyState(true)}>
            <button className="bg-black text-white text-sm p-2 rounded font-semibold">Copy to clipboard</button>
          </CopyToClipboard>
          {copyState && copyState ? <span className="text-red-600">Copied.</span> : null}
        </div>
      </div>

      <div className="my-8 md:mx-20">
        <h2 className="text-xl font-medium text-slate-800">My Messages</h2>
        <div className="py-8">
          <p>No messages available right now</p>
        </div>
      </div>

      <div className="mb-8 flex items-center gap-4 justify-center">
        <Link href="/settings">
          <button className="bg-black text-white text-sm py-2 px-8 rounded font-semibold flex items-center justify-center gap-2"><Settings className="h-4 w-4" />Settings</button>
        </Link>
        <button className="flex items-center justify-center bg-white text-black border border-slate-500 text-sm py-2 px-8 rounded font-semibold gap-2"><Share2 className="h-4 w-4" /> Share on social</button>
      </div>



      <div>

        {/* <button onClick={signout}>Sign out</button> */}
        {/* <ShareOnSocial
      textToShare="Check out this new wardrobe I just found from IKEA!"
      link="https://ikea.com/wardrobes/kalle"
      linkTitle="KALLE Wardorbe which chooses your clothes for you using AI - IKEA"
      linkMetaDesc="Stop going through the agony of choosing clothes that fit the weather and your mood."
      linkFavicon={favicon}
      noReferer
      >
      <button>Share this product</button>
    </ShareOnSocial> */}
      </div>
    </div>
  )
}
export default User
