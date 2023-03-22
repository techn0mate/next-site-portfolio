import React from 'react'
import MyHead from "../components/MyHead";
import ContactForm from '../components/ContactForm';
import Link from 'next/link';

const Contact = () => {
  return (
    <>
    <MyHead
        title="Contact me"
        description="Contact soumya Mondal"
        image="https://soumyamondal.com/typefinance-dp.jpg"
        url="https://soumyamondal.com"
        />
    <div className='m-2'>
      <div className="h-auto min-h-screen flex flex-col justify-center items-center">
        <h1 className='text-center text-3xl md:text-5xl pt-5 md:pt-16 font-extrabold'><span className='text-indigo-500'>Contact</span> Me</h1>
        <p className='text-md text-center pt-2 lg:text-xl'>Fill out the form below to get in touch:</p>
        <span className="icons flex flex-row gap-3 pt-2">
          <Link href="mailto:it.soumyamondal@gmail.com"><img className='w-9 bg-white rounded-lg p-1' src="/svg/email.svg" /></Link>
          <Link href="https://wa.me/+919734174147"><img className='w-9 bg-white rounded-lg p-1' src="/svg/whatsapp.svg" /></Link>
        </span>
        <ContactForm/>        
      </div>      
    </div>
    </>
  )
}

export default Contact