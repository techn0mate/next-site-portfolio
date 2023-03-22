import React from 'react'
import Link from 'next/link'

const LinkTreeBtn = () => {
    return (
        <span>
            <Link href="/" className="link-tree bg-indigo-600 text-white -translate-x-2 md:-translate-x-2 hover:translate-x-0 transition-all duration-300 rounded-r-md px-2 md:px-4 p-1 md:p-3 fixed left-0 bottom-10 shadow-lg">
                <img className='w-5' src="/svg/whitelink.svg" alt="Soumya LinkTree" />
            </Link>
        </span>
    )
}

export default LinkTreeBtn;