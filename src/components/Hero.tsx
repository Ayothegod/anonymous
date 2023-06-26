import hero from "@/assets/clint-patterson-dYEuFB8KQJk-unsplash (1).jpg"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="text-center mt-10 flex flex-col items-center justify-center ">
        <h2 className="text-xl font-medium">Anonymous messaging tailoured just for you.</h2>
        <p className="text-slate-500 text-xs">need the most secured way to get anonymous feedbacks! <span className="text-slate-700 font-bold">we got you.</span></p>

        <Image src={hero} alt="heroImage" className="h-[50vh] w-[60vw] object-cover object-center rounded my-6"/>
        <button className="bg-black text-white text-sm p-2 rounded font-semibold">Demo</button>
    </div>
  )
}

export default Hero