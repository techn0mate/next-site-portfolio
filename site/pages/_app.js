import "../styles/globals.css";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NProgress from 'nprogress';
import '../public/nprogress.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      NProgress.start();
    };
    const handleComplete = () => {
      setIsLoading(false);
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  // const themeLocal = localStorage.getItem('theme');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const themeLocal = localStorage.getItem('theme');
    setTheme(themeLocal);
  }, [])
  useEffect(() => {
    const html = document.querySelector('html')
    if (theme === 'light') {
      html.classList.remove('dark')
      html.classList.add('light');
    } else {
      html.classList.add('dark')
      html.classList.remove('light')
    }
  }, [theme])

  return(
    <>
    <Navbar theme={theme} setTheme={setTheme}/>
    <Component {...pageProps} />
    <ToastContainer />
    {isLoading && <div className="nprogress-custom-parent"><div className="nprogress-custom-bar"/></div>}
    <Footer/>

    </>
  ) 
}
