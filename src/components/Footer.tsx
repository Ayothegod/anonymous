import Link from "next/link"

const Footer = () => {
  return (
    <div className="border-t border-t-slate-200 mt-4 py-4 px-4 ">
        <nav className="flex item-center justify-between">
          <h1 className="text-lg font-semibold">Anonymous</h1>
          <button className="bg-black text-white text-sm p-2 rounded font-semibold">Get Started</button>
        </nav>
        <div className="flex items-center justify-center gap-8 text-sm text-slate-500">
            <Link href="/"><p>Terms of service.</p></Link>
            <Link href="/"><p>Disclaimer.</p></Link>
        </div>
    </div>
  )
}

export default Footer