import React from 'react'
import Head from 'next/head'

const Contact = () => {
  return (
    <>
    <Head>
            <title>Contact us - TypeFinance</title>
            <meta name="TypeFinance" content="Contact typeFinance" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
    </Head>
    <div>
      <div className="text-black h-screen flex flex-col justify-center items-center">
        <h1 className='text-4xl' style={{fontFamily:"poppins", fontWeight:"500"}}>Contact Page</h1>
        <p className='text-md py-4 lg:text-xl'>Fill out the form below to get in touch:</p>
        
      </div>      
    </div>
    </>
  )
}

export default Contact