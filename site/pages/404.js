import Head from "next/head";
import Link from 'next/link'

export default function Custom404() {
    return(
        <>
        <Head>
            <title>404 Page not found - TypeFinance</title>
            <meta name="TypeFinance" content="Content not found typeFinance" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <div className="w-auto max-w-3xl bg-white rounded-xl m-auto my-20 pb-10 text-black text-center">
            <img className="w-full rounded-xl" src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt=""/>
            <h1 className="font-medium text-bold  text-7xl">404</h1>
            <p className="font-mono py-2">Sorry, The page you are looking for can't be found</p>            
            <Link href="/" className="bg-green-400 p-2 rounded-md text-xl hover:bg-zinc-800 hover:text-white transition-all" style={{fontFamily:"poppins", fontWeight:"500"}}>Homepage</Link>
        </div>
        </>
    )
}