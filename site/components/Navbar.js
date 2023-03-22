import Link from 'next/link';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = ({ theme, setTheme }) => {
    const router = useRouter()
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(()=>{
        setShowMenu(false);
    }, [router.asPath])

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    };

    const On = ()=>{
        return(
            <svg fill="white" className='w-7 select-none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 16 8.5Zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5ZM16 5H8a7 7 0 0 0 0 14h8a7 7 0 0 0 0-14Zm0 12H8A5 5 0 0 1 8 7h8a5 5 0 0 1 0 10Z"/></svg>
        )
    }
    const Off =()=>{
        return(
            <svg fill="white" className='w-7 select-none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 8 8.5Zm0 5A1.5 1.5 0 1 1 9.5 12 1.5 1.5 0 0 1 8 13.5ZM16 5H8a7 7 0 0 0 0 14h8a7 7 0 0 0 0-14Zm0 12H8A5 5 0 0 1 8 7h8a5 5 0 0 1 0 10Z"/></svg>
        )
    }

    return (
        <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>
            <Link className='' href="/">
                <span className="text-white font-bold flex flex-row items-center text-xl">
                <img src='/icon.png' alt='soumya mondal logo' width="40px"/>
                <p className='pl-4'>Soumya</p>
                </span>
            </Link>
        </div>
        <button className={styles.toggle + ' select-none'} onClick={toggleTheme}>
            {theme === 'light' ? <Off/> : <On/>}
        </button>
        <ul className={`${styles.navbar__links} ${showMenu ? styles['show-menu'] : ''}`}>
            <li className='select-none hover:font-semibold transition-all duration-50'>
            <Link href="/">Home</Link>
            </li>
            <li className='select-none hover:font-bold transition-all duration-50'>
            <Link href="/about">About</Link>
            </li>
            <li className='select-none hover:font-bold transition-all duration-50'>
            <Link href="/contact">Contact</Link>
            </li>
            <li className='select-none hover:font-bold transition-all duration-50'>
            <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className='select-none hover:font-bold transition-all duration-50'>
            <Link href="/blog">Blogs</Link>
            </li>
        </ul>
        <div className={styles.navbar__menu_icon + " ham-menu select-none"} onClick={toggleMenu} tabIndex={-1}>
            <svg width="25" height="25" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z" fill='white'/></svg>
        </div>
        </nav>
        );
};

export default Navbar;