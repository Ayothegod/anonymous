import { supabaseClient } from "@/lib/supabase"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const Signup = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const signupUser = async () => {
        if (username.length < 3) return setError("add username")
        if (email.length < 3) return setError("add email")
        if (!email.includes(".com")) return setError("invalid email")
        if (password.length < 6) return setError("password is too short")
        const { data, error } = await supabaseClient.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    username: username,
                },
            },
        })
        // if(data.user?.aud === "authenticated") return router.push("/signin")
        console.log(data, error);
        if (error) return setError("user already exists!");
    }
    // 'ayodasilva12@email.com', 'Softer1234', 'Nexxbux'

    return (
        <div className="px-2 max-w-[60rem] mx-auto flex flex-col items-center justify-center">
            <h1 className="text-2xl font-semibold my-4">Anonymous</h1>
            <div className="flex flex-col sm:border mt-10 w-full sm:w-96 p-4 gap-4">
                <div>
                    <h2 className="text-xl font-semibold">Sign Up</h2>
                    <p className="text-sm text-slate-500 ">sign-up to receive anonymous messages</p>
                </div>
                <div className="flex flex-col my-4 gap-4 items-center border-b pb-4 border-b-slate-200">
                    <input type="text" placeholder="username..." className="border-b border-b-slate-400 p-2 w-full outline-none focus:bg-slate-100"
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="text" placeholder="email..." className="border-b border-b-slate-400 p-2 w-full outline-none focus:bg-slate-100"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="password... 6 or more characters" className="border-b border-b-slate-400 p-2 w-full outline-none focus:bg-slate-100"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    <p className="text-sm text-red-600 font-medium">{error}</p>
                    {/* <label htmlFor="" className="text-sm text-slate-400">forgotten password? <Link href="/" className="text-slate-600 text-base underline">recover it now.</Link></label> */}
                    <button className="bg-black text-white text-sm p-2 rounded font-semibold w-full sm:w-2/3 hover:bg-white hover:border hover:border-slate-200 hover:text-black"
                        onClick={signupUser}
                    >Register</button>
                </div>

                <p className="text-sm text-slate-400 text-center">have an account? <Link href="/signin" className="text-slate-600 text-base underline">sign-in</Link></p>
            </div>
        </div>
    )
}

export default Signup