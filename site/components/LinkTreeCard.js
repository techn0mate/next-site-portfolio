import Link from 'next/link'
import React from 'react'

const LinkTreeCard = ({title, url, image}) => {
    return (
        <span className='w-full'>
            <Link className='flex flex-row items-center p-2 rounded-xl text-white bg-indigo-500 hover:bg-indigo-400 mb-3 mx-2 hover:translate-x-1 hover:translate-y-1 transition-all duration-500' href={url}>
                <img className="w-11 mr-5" src={image} alt="" />
                <h4 className='font-bold md:text-lg'>{title}</h4>
            </Link>
        </span>
    )
}

export default LinkTreeCard