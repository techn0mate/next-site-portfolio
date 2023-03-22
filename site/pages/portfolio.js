import React from 'react'
import MyHead from "../components/MyHead";
import PortfolioCard from '../components/PortfolioCard';
import { motion, AnimatePresence } from 'framer-motion';


const projects = [
  {title: 'LMS Platform', url: ['https://github.com/lifeofsoumya', 'https://github.com/lifeofsoumya'], image: '/404.png', desc: 'A learning management system that helps teachers create and update courses, let students buy and enroll to courses and study from the uploaded videos and texts', tags: ['NodeJS', 'ReactJS', 'MongoDB', 'Keyhasher', 'Git']},
  {title: 'TypeFinance', url: ['https://github.com/lifeofsoumya', 'https://typefinance.com'], image: '/404.png', desc: 'A Finance website with a Unique Tool (using custom algorithm), that determines portfolio segmentation', tags: ['NextJS', 'ReactJS', 'Keyhasher']},
  {title: 'KeyHasher NPM Library', url: ['https://github.com/lifeofsoumya', 'https://github.com/lifeofsoumya'], image: '/projects/project-8.png', desc: 'Encrypts data with multiple processes, Uses password numbers to Encrypt and Decrypt, does sha256 Hashing', tags: ['NodeJS', 'Git']},
  {title: 'Anonymessage Chat', url: ['https://github.com/lifeofsoumya', 'https://github.com/lifeofsoumya'], image: '/projects/project-1.jpg', desc: 'A Chat app made with Socket.io, HTML, CSS, JavaScript', tags: ['HTML', 'CSS', 'JS']},
  {title: 'Stock down Notifier', url: ['https://github.com/lifeofsoumya', 'https://github.com/lifeofsoumya'], image: '/projects/project-9.jpg', desc: 'A learning management system that helps teachers create and update courses, let students buy and enroll to courses and study from the uploaded videos and texts', tags: ['NodeJS', 'ReactJS', 'MongoDB', 'Keyhasher', 'Git']},
  {title: 'LMS Platform', url: ['https://github.com/lifeofsoumya', 'https://github.com/lifeofsoumya'], image: '/404.png', desc: 'A learning management system that helps teachers create and update courses, let students buy and enroll to courses and study from the uploaded videos and texts', tags: ['NodeJS', 'ReactJS', 'MongoDB', 'Keyhasher', 'Git']},
  {title: 'IndGeek', url: ['https://github.com/indgeek', 'https://indgeek.com'], image: '/404.png', desc: 'Technical content based website, where I share my tech knowledge in form of Articles', tags: ['WordPress', 'CSS']},
]



const Portfolio = () => {
  return (
    <>
    <section className="relative">
    <h1 className='text-center text-5xl py-5 font-extrabold'>My <span className='text-indigo-500'>Portfolio</span></h1>
    <div className='flex flex-row flex-wrap justify-center max-w-7xl m-auto'>
      <AnimatePresence>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0, transition: { delay: index * 0.1 + 0.3 } }}
            exit={{ opacity: 0, x: -40 }}
          >
            <PortfolioCard
              title={project.title}
              url={project.url}
              image={project.image}
              desc={project.desc}
              tags={project.tags}
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