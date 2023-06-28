import { useUserContext } from "@/hooks/UserContext"
import Link from "next/link"

const Header = () => {
  const user = useUserContext()
  console.log(user);
  
  return (
    <div>
      <nav className="p-4 flex item-center justify-between border-b border-b-slate-200">
        <Link href={user?.email ? "/user" : "/signin"}>
          <h1 className="text-2xl font-semibold cursur-pointer">Anonymous</h1>
        </Link>
        <Link href="/signin">
          <button className="bg-black text-white text-sm p-2 rounded font-semibold">Get Started</button>
        </Link>
      </nav>
    </div>
  )
}

export default Header