import React from 'react'
import FaqQuestion from '../components/FaqQuestion'
import MyHead from "../components/MyHead";

function faq() {
    return (
        <>
        <MyHead
        title="My FAQs"
        description="Facts and Questions about me"
        image="https://soumyamondal.com/soumya2.jpg"
        url="https://soumyamondal.com/faq"
        />
        <section className="relative h-auto min-h-screen">
        <h1 className='text-center text-5xl py-5 md:py-16 font-extrabold'><span className='text-indigo-500'>FAQ</span>s</h1>
        <div className='my-3 md:my-10 w-full md:w-3/5 m-auto'>
            <FaqQuestion
            question="What Tech stacks are you into?"
            answer="I've earned vanilla frontend, ReactJS, NextJS, NodeJS, MongoDB knowledge in past two
            years, currently I'm trying to get into NodeJS and Database to become a
            fullstack developer. Besides that I've a pretty good experience in WordPress
            CMS."
            />
            <FaqQuestion
            question="Explain more about your skills!"
            answer="Please check out the /about Page"
            />
            <FaqQuestion
            question="How you got into web development?"
            answer="Since when I was 14, a curiosity has always been there into me to explore how this things work, which led me to learn full stack development.
            I saw a goDaddy ad once and determined to have my own website one day."
            />
            <FaqQuestion
            question="What more Technologies do you Prefer?"
            answer="I'm an Electronics and Communication Engineer, basically I like majority of technologies that can be interacted in real life.
            I like tweaking with Arduino, raspberry projects to create automated security systems."
            />
            <FaqQuestion
            question="Anything apart from Tech industry?"
            answer="Since 2016, I've been doing freelancing on Fiverr with my Graphics designing and animation skills,
            I've left animation for too much work load but those days taught me many precious lessons to improve my skillset as well as lifestyle."/>
            <FaqQuestion
            question="Your expectations from future self?"
            answer="Since when I was 14, a curiosity has always been there into me to explore how this things work, which led me to learn full stack development.
            I saw a goDaddy ad once and determined to have my own website one day."
            />
        </div>
        <img className="absolute translate-x-1/2 right-10 top-10 w-40 opacity-0 md:opacity-10 -z-10 " src="/svg/ornament.svg"/>
        <img className="absolute -translate-x-1/2 left-10 bottom-20 w-40 -z-10 opacity-0 md:opacity-10" src="/svg/ornament.svg"/>
        </section>
        </>
    )
}

export default faq