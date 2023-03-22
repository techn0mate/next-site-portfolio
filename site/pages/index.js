import MyHead from "../components/MyHead";
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"

const icons = [
  { src: "svg/node.svg", alt: "NodeJS" },
  { src: "svg/react.svg", alt: "ReactJS" },
  { src: "svg/git.svg", alt: "Git" },
  { src: "svg/mongo.svg", alt: "MongoDB" },
  { src: "svg/sql.svg", alt: "SQL" },
  { src: "svg/css.svg", alt: "CSS" },
  { src: "svg/js.svg", alt: "JavaScript" },
  { src: "svg/nextjs.svg", alt: "NextJS" },
];

const IconList = () => {

  return (
    <AnimatePresence>
      <span className="bg-indigo-200 rounded-lg py-2 flex flex-row justify-evenly md:m-0 md:ml-10 m-auto mb-4 md:mb-0 w-4/5 max-w-lg">
        {icons.map((icon, index) => (
          <motion.img
            key={index}
            className="svg w-6 md:w-10 bg-zinc-100 mr-1 rounded-lg p-1 cursor-pointer"
            src={icon.src}
            alt={icon.alt}
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            
          />
        ))}
      </span>
    </AnimatePresence>
  );
};

export default function Home() {
  return (
    <>
      <MyHead
        title="Home"
        description="Welcome to SoumyaMondal.com"
        image="https://soumyamondal.com/icon.png"
        url="https://soumyamondal.com"
        />
      <section className="first-block h-screen flex justify-center items-center relative">
        <div className="hero flex flex-col-reverse w-full md:flex-row">
          <span className="left flex flex-col items-end justify-center w-11/12 md:w-2/4">
          <h1 className="font-extrabold text-2xl md:text-5xl text-right">Full Stack <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-700'>Developer</span></h1>
          <p className="font-semibold text-sm md:text-lg pt-2 text-right md:text-right hover:-translate-x-1 transition-all duration-500">Passionate about building excellent software.</p>
          <span className="btn">
            <Link href="/about" className="mt-3 inline-block border-2 border-indigo-600 hover:text-indigo-600 drop-shadow-xl rounded-md px-4 py-2 font-bold hover:translate-y-1 hover:-translate-x-1 transition-all duration-500 select-none"><button>About me</button></Link>
            <Link href="/portfolio" className="mt-3 ml-3 inline-block border-2 border-indigo-600 bg-indigo-500 text-white drop-shadow-xl rounded-md px-4 py-2 font-bold hover:translate-y-1 hover:-translate-x-1 transition-all duration-500 select-none"><button>Portfolio</button></Link>
          </span>
          </span>
          <span className="right md:w-2/4">
            <img className="border border-zinc-800 md:m-2 md:ml-10 m-auto mb-2 w-4/5 max-w-lg hover:filter saturate-150 hover:saturate-200 hover:translate-x-1 transition-all duration-500 rounded-xl cursor-pointer" src="/workstation.jpg" alt="Soumya Mondal" />
          <IconList/>
          </span>
        </div>
        <img className="absolute translate-x-1/2 right-10 top-10 w-40 opacity-20" src="/svg/ornament.svg"/>
        <img className="absolute -translate-x-1/2 left-10 bottom-20 w-40 -z-10 opacity-20" src="/svg/ornament.svg"/>
      </section>
      <section className="cto h-screen text-white relative">
        <span className="left">
          <h2>Stand out.</h2>
          <h4>Use the Asseteer tool to calculate your Unique Type</h4>
          <p>Investment style matters. You don't earn same, neither have same goal or target amount. So find out how to <span className="highlight">diversify portfolio</span> based on your goals.</p>
          <a href="https://youtu.be/Da3wQSM79Rc" target="_blank" className='custom-btn border-2 border-white rounded-md px-6 py-3 hover:bg-white hover:text-zinc-800 transition-all duration-300'><button >Watch Demo <svg xmlns="http://www.w3.org/2000/svg"  className="w-7 h-7" viewBox="0 0 24 24" fill="red" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><path d="m9.75 15.02 5.75-3.27-5.75-3.27v6.54z"/></svg></button></a>
        </span>
        <span className="right">
        <img className='laptop' src='/macbook.png'/>
        </span>
      </section>
      
      
    </>
  )
}
