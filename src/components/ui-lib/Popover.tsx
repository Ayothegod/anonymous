import {
    Popover as Pop,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useUserContext } from "@/hooks/UserContext"
import { useState } from "react"

const Popover = ({ username, setUsername }: any) => {
    // const user = useUserContext()
//   const [username, setUsername] = useState<any>("Brother")

    return (
        <div>
            <Pop>
                <PopoverTrigger className="bg-black text-white text-sm py-2 px-6 rounded font-semibold">Change Username</PopoverTrigger>
                <PopoverContent>
                    <div className="flex flex-col gap-2">
                        <input type="text" placeholder={username} value={username} onChange={e => setUsername(e.target.value)} className="border border-slate-300 rounded py-1 px-2 outline-slate-600 w-full"/>
                        <button className="bg-slate-800 text-white text-sm py-2 px-6 rounded font-semibold" >Correct Username</button>
                    </div>
                </PopoverContent>
            </Pop>
        </div>
    )
}

export default Popover