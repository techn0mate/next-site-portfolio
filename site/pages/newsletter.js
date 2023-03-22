import React from 'react'
import { toast } from 'react-toastify';

const newsletter = () => {
    const handleSubmit =(e) =>{
        e.preventDefault();
        toast.success("You're enrolled successfully")
    }
  return (
    <section className='h-auto min-h-screen relative flex flex-col gap-5 justify-center items-center'>
        <h1 className="font-extrabold text-2xl md:text-4xl text-center">Enroll to <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-700'>Newsletter</span></h1>
        <div className="">
            <form onSubmit={handleSubmit} className="">
                <input className="border-1 border-gray-100 bg-white text-black shadow-lg p-2 rounded-l-lg focus:outline-none" type="email" placeholder='Enter your email' required/>
                <input className="bg-indigo-600 text-white p-2 rounded-r-lg" type="submit" value="Subscribe" />
            </form>
        </div>


        <img className="absolute translate-x-1/2 right-10 top-10 w-40 opacity-5 md:opacity-20" src="/svg/ornament.svg"/>
        <img className="absolute -translate-x-1/2 left-10 bottom-20 w-40 -z-10 opacity-5 md:opacity-20" src="/svg/ornament.svg"/>
        <img className="moving-svg absolute -translate-x-1/2 left-10 top-20 w-40 -z-10 opacity-5 md:opacity-10" src="/svg/zigzag.svg"/>
        <img className="up-moving-svg hidden md:block absolute -translate-x-1/2 right-10 bottom-20 w-40 -z-10 opacity-10 md:opacity-20" src="/svg/dots.svg"/>
    </section >
  )
}

export default newsletter