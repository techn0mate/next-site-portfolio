import React from "react";
import MyHead from "../components/MyHead";
import Link from "next/link";
import AnimatedBar from "../components/AnimatedBar";

const About = () => {
  return (
    <>
      <MyHead
        title="About me"
        description="About section - Soumya Mondal"
        image="https://soumyamondal.com/typefinance-dp.jpg"
        url="https://soumyamondal.com"
        />
      <section>
        <h1 className="font-extrabold text-5xl text-center pt-7">About <span className="colored text-indigo-500">Me</span></h1>
        <div className="about w-full md:w-4/5 m-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Experience & Education</h2>
          <span className="education">
          <div className="flex flex-wrap">
            <div className="lg:w-1/2 pr-4 pl-4 m-15 px-4">
              <div className="resume-box">
                <ul>
                  <li>
                    <div className="icon flex flex-row items-center bg-zinc-200 px-2 py-1 my-2 rounded-lg font-bold">
                      <img className="w-7 mr-3" src="/svg/work.svg"/>
                      <span className="time text-indigo-600 open-sans-font uppercase">2021-22 - Present</span>
                    </div>
                    <h5 className="font-bold py-1">Managing multiple Websites</h5>
                    <p className="open-sans-font">I run 4 Blogs, multiple informative websites all on my own </p>
                  </li>
                  <li>
                    <div className="icon flex flex-row items-center bg-zinc-200 px-2 py-1 my-2 rounded-lg font-bold">
                      <img className="w-7 mr-3" src="/svg/work.svg"/>
                      <span className="time text-indigo-600 open-sans-font uppercase">2019 - Present</span>
                    </div>
                    <h5 className="font-bold py-1">Web Developer MERN Stack</h5>
                    <p className="open-sans-font">Doing Full stack web development since 2019 in MERN Stack. Familiar with version controlling and deployment.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2 pr-4 pl-4 m-15px-tb">
              <div className="resume-box">
                <ul>
                  <li>
                    <div className="icon flex flex-row items-center bg-zinc-200 px-2 py-1 my-2 rounded-lg font-bold">
                      <img className="w-7 mr-3" src="/svg/graduate.svg"/>
                      <span className="time text-indigo-600 open-sans-font uppercase">2019 - 2023</span>
                    </div>
                    <h5 className="font-bold py-1">Engineering Degree NITMAS</h5>
                    <p className="open-sans-font">Currently I'm pursuing Engineering Degree in Electronics
                      and Communication.</p>
                  </li>
                  <li>
                    <div className="icon flex flex-row items-center bg-zinc-200 px-2 py-1 my-2 rounded-lg font-bold">
                      <img className="w-7 mr-3" src="/svg/graduate.svg"/>
                      <span className="time text-indigo-600 open-sans-font uppercase">2017 - 2019</span>
                    </div>
                    <h5 className="font-bold py-1">Higher Secondery SRKMS</h5>
                    <p className="open-sans-font">I've completed my Higher Secondary education from
                      Ramakrishna Mission, Sarisha</p>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        <Link href="/resume" className="mt-3 ml-3 inline-block border-2 border-indigo-600 bg-indigo-500 text-white drop-shadow-xl rounded-md px-4 py-2 font-bold hover:translate-y-1 hover:-translate-x-1 transition-all duration-500 select-none"><button>My Resume</button></Link>

          </span>
        </div>
        <div className="w-full md:w-11/12 my-12 m-auto h-auto px-6 rounded-3xl flex items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Skill set</h2>
            <div className="progress w-full md:w-1/2 m-auto flex flex-col md:flex-row">
            <div className="left flex flex-col md:flex-row gap-8 w-full md:w-1/2">
              <div className="flex flex-col w-full md:w-11/12 m-auto">
              <div className="w-full space-y-4">
                <AnimatedBar label="ReactJS" width="95%" />
                <AnimatedBar label="NodeJS" width="89%" />
                <AnimatedBar label="NextJS" width="78%" />
                <AnimatedBar label="JavaScript" width="87%" />
                <AnimatedBar label="CSS" width="88%" />
              </div>
              </div>
            </div>
            <div className="right flex flex-col md:flex-row gap-8 w-full md:w-1/2">
              <div className="flex flex-col w-full md:w-11/12 m-auto">
                  <div className="w-full space-y-4">
                  <AnimatedBar label="SQL" width="83%" />
                  <AnimatedBar label="MongoDB" width="85%" />
                  <AnimatedBar label="C" width="78%" />
                  <AnimatedBar label="C++" width="87%" />
                  <AnimatedBar label="DevOps" width="28%" />
                </div>
              </div>
            </div>
              </div>
          <section className="me w-full md:w-3/6 m-auto pb-7">
          <div className="flex flex-wrap">
            <div className="w-full flex flex-row items-center bg-zinc-200 px-2 py-1 my-7 rounded-lg font-bold">
              <img className="w-7 mr-3" src="/svg/user.svg"/>
              <h3 className="uppercase custom-title text-indigo-600">personal infos</h3>
            </div>
            <div className="w-1/2">
              <ul className="space-y-2">
                <li> <span className="title font-bold">first name :</span> <span className="">Soumya</span>
                </li>
                <li> <span className="title font-bold">last name :</span> <span className="">Mondal</span>
                </li>
                <li> <span className="title font-bold">Age :</span> <span className="">22
                    Years</span> </li>
                <li> <span className="title font-bold">Nationality :</span> <span className="">Indian</span>
                </li>
                <li> <span className="title font-bold">Freelance :</span> <span className="">Available</span>
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <ul className="space-y-2">
                <li> <span className="title font-bold">City :</span> <span className="">Kolkata</span>
                </li>
                <li> <span className="title font-bold">phone :</span> <span className="">+91 9734174147</span> </li>
                <li> <span className="title font-bold">Email :</span> <Link className="bg-indigo-400 hover:bg-indigo-500 text-white rounded-sm p-1 duration-500" href='mailto:it.soumyamondal@gmail.com'>Me</Link>
                </li>
                <li> <span className="title font-bold">Instagram :</span> <span className="">Lifeofsoumya</span>
                </li>
                <li> <span className="title font-bold">languages :</span> <span className="">English,
                    Hindi, Bengali</span> </li>
              </ul>
            </div>
      </div>
          </section>
          
            <h2 className="text-2xl">A little more about me</h2>
            <p>
              The resume might not tell you, but I like sports, like a lot. And I'm obsessed with Tech; Not a total nerd, but I feel the engineering behind each piece of engineered craft (especially softwares). I wish to build something that helps the human kind one day.
              Till today, I've created a lot of softwares to ease my tasks, you've  reached this far on my website, so I assume you've checked some of the projects on the <Link className="bg-indigo-400 hover:bg-indigo-500 text-white rounded-sm p-1 duration-500" href='/portfolio'>Portfolio</Link> page.
            </p>
          </div>
        </div>
      </section>
      <section className='count-section w-full bg-zinc-700'>
        <div className="single-count font-bold text-zinc-300">
          <span>
            <h4>12+</h4>
            <p>Projects</p>
          </span>
          <span>
            <h4>20+</h4> 
            <p>Clients</p>
          </span>
          <span>
            <h4>8+</h4>
            <p>Live sites</p>
          </span>
          <span>
            <h4>5+</h4>
            <p>Years in Development</p>
          </span>
        </div>
      </section>
    </>
  );
};

export default About;
