import Header from "@/components/Header"
import Dropdown from "@/components/ui-lib/Dropdown"
import { useUserContext } from "@/hooks/UserContext"

const Profile = () => {
    const user = useUserContext()
    // console.log(user);

    return (
        <div className="px-2 max-w-[60rem] mx-auto mb-8">
            <nav className="p-2 flex item-center justify-between border-b border-b-slate-200 relative">
                <h1 className="text-2xl font-semibold">Anonymous</h1>
                <div>
                    <Dropdown />
                </div>
            </nav>

            <div className="mt-8">
                <h2 className="font-semibold text-2xl capitalize text-center">My Profile</h2>

                <div className="flex flex-col items-center justify-center mt-4">
                    <div className="flex flex-col w-full sm:w-2/3 p-4 gap-4">
                        <div className="flex flex-col ">
                            <label htmlFor="email" className="text-sm text-slate-500">Username:</label>
                            <span className="border-none bg-slate-200 py-2 rounded outline-none px-2 w-full">{user?.user_metadata?.username}</span>
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="email" className="text-sm text-slate-500">Email Address:</label>
                            <span className="border-none bg-slate-200 py-2 rounded outline-none px-2 w-full">{user?.email}</span>
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="email" className="text-sm text-slate-500">Messages Sent:</label>
                            <span className="border-none bg-slate-200 py-2 rounded outline-none px-2 w-full">0</span>
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="email" className="text-sm text-slate-500">Messages Received:</label>
                            <span className="border-none bg-slate-200 py-2 rounded outline-none px-2 w-full">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile