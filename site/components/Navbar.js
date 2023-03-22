import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = ({ theme, setTheme }) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
      };

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
            {theme === 'light' ? '🌑' : '🌙'}
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