import {
  LifeBuoy,
  LogOut,
  MessageSquare,
  Settings,
  User,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { supabaseClient } from "@/lib/supabase"
import { useRouter } from "next/router"
import Link from "next/link"

export default function DropdownMenuDemo() {
  const router = useRouter()
  async function signout() {
    const { error } = await supabaseClient.auth.signOut()
    if (!error) return router.push("/signin")
    console.log(error);
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-black text-white text-sm py-2 px-4 rounded font-semibold">Menu</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 m-2">

        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        <Link href="/profile">
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>My Profile</span>
          </DropdownMenuItem>
        </Link>

          <Link href="/settings">
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <MessageSquare className="mr-2 h-4 w-4" />
            <span>My Messages</span>
          </DropdownMenuItem>

          <DropdownMenuItem disabled>
            <Users className="mr-2 h-4 w-4" />
            <span>Group Message</span>
          </DropdownMenuItem>

        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem disabled>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={signout}>
          <LogOut className="mr-2 h-4 w-4" />
          <button>Sign out</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
