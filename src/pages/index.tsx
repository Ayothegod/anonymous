// import { Inter } from 'next/font/google'

import Header from "@/components/Header";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className="m-20">
        <p className='text-2xl font-semibold leading-none border border-slate-200 p-4 rounded'>Welcome to the anonymous messaging app</p>
        <Header/>
      </main>
    </>
  )
}
