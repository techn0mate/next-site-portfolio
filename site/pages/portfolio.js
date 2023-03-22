import React from 'react'
import MyHead from "../components/MyHead";
import PortfolioCard from '../components/PortfolioCard';
import { motion, AnimatePresence } from 'framer-motion';


const projects = [
  {title: 'LMS Platform', url: ['https://github.com/lifeofsoumya', 'https://github.com/lifeofsoumya'], image: '/404.png', desc: 'A learning management system that helps teachers create and update courses, let students buy and enroll to courses and study from the uploaded videos and texts', tags: ['NodeJS', 'ReactJS', 'MongoDB', 'Keyhasher', 'Git']},
  {title: 'LMS Platform', url: ['https://github.com/lifeofsoumya', 'https://github.com/lifeofsoumya'], image: '/404.png', desc: 'A learning management system that helps teachers create and update courses, let students buy and enroll to courses and study from the uploaded videos and texts', tags: ['NodeJS', 'ReactJS', 'MongoDB', 'Keyhasher', 'Git']},
  {title: 'LMS Platform', url: ['https://github.com/lifeofsoumya', 'https://github.com/lifeofsoumya'], image: '/404.png', desc: 'A learning management system that helps teachers create and update courses, let students buy and enroll to courses and study from the uploaded videos and texts', tags: ['NodeJS', 'ReactJS', 'MongoDB', 'Keyhasher', 'Git']},
  {title: 'LMS Platform', url: ['https://github.com/lifeofsoumya', 'https://github.com/lifeofsoumya'], image: '/404.png', desc: 'A learning management system that helps teachers create and update courses, let students buy and enroll to courses and study from the uploaded videos and texts', tags: ['NodeJS', 'ReactJS', 'MongoDB', 'Keyhasher', 'Git']},
  {title: 'LMS Platform', url: ['https://github.com/lifeofsoumya', 'https://github.com/lifeofsoumya'], image: '/404.png', desc: 'A learning management system that helps teachers create and update courses, let students buy and enroll to courses and study from the uploaded videos and texts', tags: ['NodeJS', 'ReactJS', 'MongoDB', 'Keyhasher', 'Git']},
  {title: 'Stock down Notifier', url: ['https://github.com/lifeofsoumya', 'https://github.com/lifeofsoumya'], image: '/projects/project-9.jpg', desc: 'A learning management system that helps teachers create and update courses, let students buy and enroll to courses and study from the uploaded videos and texts', tags: ['NodeJS', 'ReactJS', 'MongoDB', 'Keyhasher', 'Git']},
  {title: 'KeyHasher NPM Library', url: ['https://github.com/lifeofsoumya', 'https://github.com/lifeofsoumya'], image: '/projects/project-8.png', desc: 'Encrypts data with multiple processes, Uses password numbers to Encrypt and Decrypt, does sha256 Hashing', tags: ['NodeJS', 'Git']}
]



const Portfolio = () => {
  return (
    <>

    <h1 className='text-center text-5xl py-5 font-extrabold'>My <span className='text-indigo-500'>Portfolio</span></h1>
    <div className='flex flex-row flex-wrap justify-center max-w-7xl m-auto'>
      <AnimatePresence>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: index * 0.1 + 0.3 } }}
            exit={{ opacity: 0 }}
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
    </>
  )
}

export default Portfolio