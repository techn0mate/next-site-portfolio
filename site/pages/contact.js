import React from 'react'
import MyHead from "../components/MyHead";

const Contact = () => {
  return (
    <>
    <MyHead
        title="Contact me"
        description="Contact soumya Mondal"
        image="https://soumyamondal.com/typefinance-dp.jpg"
        url="https://soumyamondal.com"
        />
    <div>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className='text-4xl' style={{fontFamily:"poppins", fontWeight:"500"}}>Contact Page</h1>
        <p className='text-md py-4 lg:text-xl'>Fill out the form below to get in touch:</p>        
      </div>      
    </div>
    </>
  )
}

export default Contact