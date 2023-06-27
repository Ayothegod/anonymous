// import { Inter } from 'next/font/google'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import { supabaseClient } from "@/lib/supabase";
import { useEffect } from "react";
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    const getData = async() => {
      let { data: messages, error } = await supabaseClient
  .from('messages')
  .select(`
  id,
  profiles (
   id,full_name
  )
`)

    console.log("message",messages);
    
      }
      // getData()
  },[])
  async function getMetadata() {
    const {
      data: { user },
    }: any = await supabaseClient.auth.getUser()
    console.log(user);
  }
  
  return (
    <>
      <main className="px-2 max-w-[60rem] mx-auto">
        <Header/>
        <Hero/>
        <Offer/>
        <Footer/>

        <div>
        {/* <button onClick={getMetadata} className="border border-slate-200 p-2 mx-4 rounded">Get metadata</button>
        <button onClick={signUpWithEmail} className="border border-slate-200 p-2 mx-4 rounded">Add users</button>
      <button onClick={signInWithEmail} className="border border-slate-200 p-2 mx-4 rounded">login</button> */}
      </div>
      </main>
    </>
  )
}
