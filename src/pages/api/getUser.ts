import { supabaseClient } from "@/lib/supabase";


export default async function getUser(req,res) {
  try {
    
    const {data:{user}}: any = await supabaseClient.auth.getUser()
    // res.json(user);
    console.log(user);
  } catch (error) {
   console.log(error);
    
  }
  
}