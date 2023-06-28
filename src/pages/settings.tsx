import Header from "@/components/Header"
import Dropdown from "@/components/ui-lib/Dropdown"
import Popover from "@/components/ui-lib/Popover"
import Link from "next/link"
import { useState } from "react"

const Settings = () => {
  const [username, setUsername] = useState<any>("Brother")
  const [openSetting, setOpenSetting] = useState(false)
  return (
    <div className="px-2 max-w-[60rem] mx-auto">
      <nav className="p-2 flex item-center justify-between border-b border-b-slate-200 relative">
        <Link href="/user">
          <h1 className="text-2xl font-semibold">Anonymous</h1>
        </Link>
        <div>
          <Dropdown />
        </div>
      </nav>

      <div className="mt-8">
        <h2 className="font-semibold text-2xl capitalize text-center">Settings</h2>
        <div className="flex flex-col items-center justify-center mt-4">
          <Popover username={username} setUsername={setUsername} />
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <Popover username={username} setUsername={setUsername} />
        </div>
      </div>

    </div>
  )
}

export default Settings