import { supabaseClient } from "@/lib/supabase";
import { useRouter } from "next/router";


const useSignout = () => {
    const router = useRouter()

    async function signout() {
        const { error } = await supabaseClient.auth.signOut()
        if (!error) return console.log("who");
        
        console.log(error);
      }
      return signout
}

export default useSignout