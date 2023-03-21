import React from "react";
import MyHead from "../components/MyHead";
import Link from "next/link";

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
          f
        </div>
        <div className="w-full md:w-11/12 m-auto my-2 h-auto px-6 rounded-3xl md:h-screen flex items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Skill set</h2>
            <div className="progress w-full md:w-1/2 m-auto flex flex-col md:flex-row">
            <div className="left flex flex-col md:flex-row gap-8 w-full md:w-1/2">
              <div className="flex flex-col w-full md:w-11/12 m-auto">
                <div className="w-full space-y-4">
                  <div className="w-full h-3 bg-gray-300 rounded-md overflow-hidden">
                    <div className="h-full bg-indigo-500" style={{ width: "95%" }}></div>
                  </div>
                  ReactJS
                  <div className="w-full h-3 bg-gray-300 rounded-md overflow-hidden">
                    <div className="h-full bg-indigo-500" style={{ width: "89%" }}></div>
                  </div>
                  NodeJS
                  <div className="w-full h-3 bg-gray-300 rounded-md overflow-hidden">
                    <div className="h-full bg-indigo-500" style={{ width: "78%" }}></div>
                  </div>
                  NextJS
                  <div className="w-full h-3 bg-gray-300 rounded-md overflow-hidden">
                    <div className="h-full bg-indigo-500" style={{ width: "87%" }}></div>
                  </div>
                  JavaScript
                  <div className="w-full h-3 bg-gray-300 rounded-md overflow-hidden">
                    <div className="h-full bg-indigo-500" style={{ width: "88%", transition: "width 1s"  }}></div>
                  </div>
                  CSS
                </div>
              </div>
            </div>
            <div className="right flex flex-col md:flex-row gap-8 w-full md:w-1/2">
              <div className="flex flex-col w-full md:w-11/12 m-auto">
                <div className="w-full space-y-4 py-4">
                  <div className="w-full h-3 bg-gray-300 rounded-md overflow-hidden">
                    <div className="h-full bg-indigo-500" style={{ width: "83%" }}></div>
                  </div>
                  SQL
                  <div className="w-full h-3 bg-gray-300 rounded-md overflow-hidden">
                    <div className="h-full bg-indigo-500" style={{ width: "85%" }}></div>
                  </div>
                  MongoDB
                  <div className="w-full h-3 bg-gray-300 rounded-md overflow-hidden">
                    <div className="h-full bg-indigo-500" style={{ width: "60%" }}></div>
                  </div>
                  C
                  <div className="w-full h-3 bg-gray-300 rounded-md overflow-hidden">
                    <div className="h-full bg-indigo-500" style={{ width: "80%" }}></div>
                  </div>
                  C++
                  <div className="w-full h-3 bg-gray-300 rounded-md overflow-hidden">
                    <div className="h-full bg-indigo-500" style={{ width: "30%" }}></div>
                  </div>
                  DevOps
                </div>
              </div>
            </div>
              </div>


            <h1>about TypeFinance</h1>
            <p>
              Welcome to the ultimate financial planning system, TypeFinance! Our
              goal is to help you make informed decisions about your investments,
              so that you can achieve your financial goals in the most efficient
              way possible. 
              <br/>
              Our system takes into account your goal amount, target
              time, and current investment amount to provide you with a customized
              investment plan. Based on your inputs, we use advanced algorithms to
              calculate how much percentage of your investment portfolio should be
              allocated to different asset classes, such as crypto, stocks, fd,
              and mutual funds.
              <br/>
              We understand that financial planning can be a
              daunting task, especially for those who are new to investing. That's
              why we've designed our system to be user-friendly and easy to use.
              Simply enter your investment goals and preferences, and our system
              will do the rest!
              <br/>
              Our team of experienced financial experts has
              worked hard to create a system that is both accurate and reliable.
              We believe that everyone should have access to quality financial
              advice, and our system is a step towards making that a reality.
              Thank you for choosing our financial planning system. We hope that
              it will help you achieve your financial goals and secure your
              future.
              <br/>
              Make sure to read the <Link className="bg-red-400 hover:bg-red-500 hover:text-white rounded-sm p-1 duration-500" href='/disclaimer'>disclaimer </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
