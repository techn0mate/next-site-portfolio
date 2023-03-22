import React from 'react'
import Link from 'next/link'

const PortfolioCard = ({title, url, image, desc, tags}) => {
    const tagClasses = 'text-white rounded-xl text-sm ml-2 px-2 mb-1 select-none opacity-80 ';

    return (
        <div>
            <div className="card bg-white w-72 md:w-96 min-w-80 border text-black border-zinc-200 shadow-lg rounded-xl p-3 m-4 hover:translate-y-1 transition-all duration-500">
                <span className="el flex flex-col">
                    <img className='rounded-md' src={image} alt={title}/>
                    <h2 className='text-2xl pt-2 font-bold capitalize px-2'>{title}</h2>
                    <p className='pb-2 px-2'>{desc}</p>
                </span>
                <span className="detail flex flex-row flex-wrap mb-4">
                    {tags.map((tag, index) => (
                        <p key={index} className={
                            tag==='NodeJS' ? `${tagClasses}bg-green-600` :
                            tag==='ReactJS' ? `${tagClasses}bg-blue-600` :
                            tag==='MongoDB' ? `${tagClasses}bg-green-400` :
                            tag==='SQL' ? `${tagClasses}bg-blue-400` :
                            tag==='Git' ? `${tagClasses}bg-orange-600` :
                            tagClasses + 'bg-zinc-400'
                        }>{tag}</p>
                    ))}
                </span>
                <span className="links-head flex flex-row pl-2 pb-2">
                    <img className='w-4 mr-2' src="/svg/link.svg"/>
                    <p className='text-sm'>Links</p>
                    
                </span>
                <span className="links flex flex-row">
                    {url.map((u, index) => (
                        <Link key={index} href={u} className="btn bg-indigo-500 text-white font-bold ml-2 px-4 py-2 rounded-md hover:scale-105 transition-all duration-300">{index === 0 ? <p>Github</p> : <p>Live</p>}</Link>
                    ))}
                </span>
            </div>
        </div>
    )
}

export default PortfolioCard;