import {
    Popover as Pop,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useUserContext } from "@/hooks/UserContext"
import { supabaseClient } from "@/lib/supabase"
import { useState } from "react"

const Popover = ({ username, setUsername, value, popcontent, updateUser }: any) => {
    // const updateUser = async () => {
    //     const { data, error } = await supabaseClient.auth.updateUser({
    //         data: { username: 'brother@gmail.com' }
    //     })
    //     console.log(data,error);
    // }

    return (
        <div>
            <Pop>
                <PopoverTrigger className="bg-black text-white text-sm py-2 px-6 rounded font-semibold w-[90vw] sm:w-60">{value}</PopoverTrigger>
                <PopoverContent>
                    <div className="flex flex-col gap-2">
                        <input type="text" placeholder={username} value={username} onChange={e => setUsername(e.target.value)} className="border border-slate-300 rounded py-1 px-2 outline-slate-600 w-full" />
                        <button className="bg-slate-800 text-white text-sm py-2 px-6 rounded font-semibold" onClick={updateUser}>{popcontent}</button>
                    </div>
                </PopoverContent>
            </Pop>
        </div>
    )
}

export default Popover