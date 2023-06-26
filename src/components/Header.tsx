import Dropdown from "@/components/ui-lib/Dropdown"
const Header = () => {
  return (
    <div>
        {/* <Dropdown/> */}
        <nav className="p-4 flex item-center justify-between border-b border-b-slate-200">
          <h1 className="text-2xl font-semibold">Anonymous</h1>
          <button className="bg-black text-white text-sm p-2 rounded font-semibold">Get Started</button>
        </nav>
    </div>
  )
}

export default Header