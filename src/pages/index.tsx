// import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import { supabaseClient } from "@/lib/supabase";
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  
  async function signUpWithEmail() {
    const { data, error } = await supabaseClient.auth.signUp({
      email: 'example@email.com',
      password: 'example-password',
      options: {
        data: {
          first_name: 'John',
          age: 27,
        },
      },
    })
  }

  async function signInWithEmail() {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: 'example@email.com',
      password: 'example-password',
    })
    console.log(data,error);
  }
  
  return (
    <>
      <main className="m-20">
        <p className='text-2xl font-semibold leading-none border border-slate-200 p-4 rounded'>Welcome to the anonymous messaging app, lets create great stuff</p>
        <p>Lets add stuff</p>
        <Header/>


        <button onClick={signUpWithEmail} className="border border-slate-200 p-2 mx-4 rounded">Add users</button>
        <button onClick={signInWithEmail} className="border border-slate-200 p-2 mx-4 rounded">login</button>
      </main>
    </>
  )
}
