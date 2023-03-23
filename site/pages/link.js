import React from 'react'
import MyHead from "../components/MyHead";
import LinkTreeCard from '../components/LinkTreeCard';
import { motion, AnimatePresence } from 'framer-motion';


const projects = [
    {title: 'Email Marketing course', url: 'https://bit.ly/beginnersemailcourse', image: '/svg/email.svg'},
    {title: 'Coding Tutorials', url: 'https://www.youtube.com/@indgeek', image: '/svg/code2.svg'},
    {title: 'Coding Blog', url: 'https://indgeek.com', image: '/svg/indgeek.svg'},
    {title: 'How to start a Blog', url: 'https://turbohosty.com/blog/how-to-start-a-money-making-blog-in-2023/', image: '/svg/browser.svg'},
    {title: 'My Github', url: 'https://github.com/lifeofsoumya', image: '/svg/github.svg'},
    {title: 'TypeFinance', url: 'https://typefinance.com', image: 'https://typefinance.com/favicon.png'},
]

const Portfolio = () => {
    return (
        <>
        <MyHead
        title="LinkTree"
        description="My Link Tree"
        image="https://soumyamondal.com/soumya2.jpg"
        url="https://soumyamondal.com/link"
        />
        <section className="relative">
        <h1 className='text-center text-5xl py-5 font-extrabold'>Link<span className='text-indigo-500'>Tree</span></h1>
        <div className='flex flex-col justify-center max-w-7xl m-auto my-4 md:my-10 w-full md:w-2/5'>
        <AnimatePresence>
            {projects.map((project, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 + 0.7 } }}
                exit={{ opacity: 0, y: -40 }}
            >
                <LinkTreeCard
                title={project.title}
                url={project.url}
                image={project.image}
                />
            </motion.div>
            ))}
        </AnimatePresence>
        </div>
        <img className="absolute translate-x-1/2 right-10 top-10 w-40 opacity-20 -z-10 " src="/svg/ornament.svg"/>
        <img className="absolute -translate-x-1/2 left-10 bottom-20 w-40 -z-10 opacity-20" src="/svg/ornament.svg"/>
        </section>
        </>
    )
}

export default Portfolio