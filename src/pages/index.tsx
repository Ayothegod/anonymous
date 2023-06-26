// import { Inter } from 'next/font/google'
import Header from "@/components/Header";
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
  
  async function signUpWithEmail() {
    const { data, error } = await supabaseClient.auth.signUp({
      email: 'example@email.com',
      password: 'example-password',
      options: {
        data: {
          full_name: 'John',
          username: 'aiiomide',
        },
      },
    })

    console.log(data,error);
  }

  async function signInWithEmail() {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: 'example@email.com',
      password: 'example-password',
    })
    console.log(data,error);
  }

  async function getMetadata() {
    const {
      data: { user },
    }: any = await supabaseClient.auth.getUser()
    // let metadata = user.user_metadata
    console.log(user);
    
    
  }
  
  return (
    <>
      <main className="m-20">
        <p className='text-2xl font-semibold leading-none border border-slate-200 p-4 rounded'>Welcome to the anonymous messaging app, lets create great stuff</p>
        <p>Lets add stuff</p>
        <Header/>


        <button onClick={getMetadata} className="border border-slate-200 p-2 mx-4 rounded">Get metadata</button>
        <button onClick={signUpWithEmail} className="border border-slate-200 p-2 mx-4 rounded">Add users</button>
        <button onClick={signInWithEmail} className="border border-slate-200 p-2 mx-4 rounded">login</button>
      </main>
    </>
  )
}
