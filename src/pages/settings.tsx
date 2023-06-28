import Header from "@/components/Header"
import Dropdown from "@/components/ui-lib/Dropdown"

const Settings = () => {
  return (
    <div className="px-2 max-w-[60rem] mx-auto">
      <nav className="p-2 flex item-center justify-between border-b border-b-slate-200 relative">
        <h1 className="text-2xl font-semibold">Anonymous</h1>
        <div>
          <Dropdown />
        </div>
      </nav>
      
      <div>
        <h2 className="font-semibold text-2xl capitalize">Settings</h2>
        <p>settings page

        </p>
      </div>
    </div>
  )
}

export default Settings