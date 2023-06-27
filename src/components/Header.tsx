import Link from "next/link"
const Header = () => {
  return (
    <div>
        <nav className="p-4 flex item-center justify-between border-b border-b-slate-200">
          <h1 className="text-2xl font-semibold">Anonymous</h1>
          <Link href="/signin">

          <button className="bg-black text-white text-sm p-2 rounded font-semibold">Get Started</button>
          </Link>
        </nav>
    </div>
  )
}

export default Header