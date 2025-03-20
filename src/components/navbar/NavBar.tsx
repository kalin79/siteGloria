'use client';
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from "react";
import gsap from "gsap";
import styles from '@/styles/scss/navbar.module.scss';

// import { Poppins } from 'next/font/google'

// const poppins500 = Poppins({
//     weight: '500',
//     subsets: ['latin'],
//     display: 'swap',
// })


const NavBar = () => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                gsap.to(".navegationMenu", { backgroundColor: "rgba(26, 23, 43,0.85) ", duration: 0.3 });
            } else {
                gsap.to(".navegationMenu", { backgroundColor: "transparent", duration: 0.3 });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`${styles.navegationMenu} navegationMenu`}>
            <nav className={`${styles.navBar}`}>
                <Link href='/'>
                    <Image src='/logo.svg' className={styles.logoMainBox} width="160" height='126' alt='Gloria' />
                </Link>
                <div className={`${styles.menuOption}`}>
                    {/* <div className={`${styles.searchBox}`}>
                        <Image src='/lupa.svg' width="24" height='24' alt='buscar' />
                        <input type="text" placeholder='Buscar aqui tus videos favoritos ...' />
                    </div> */}
                    <div className={`${styles.loginBox}`}>
                        <h5 className='poppins font-medium'>C</h5>
                        {/* <Image src='/user.png' width="55" height='52' alt='Bienvenido :: Kalin' /> */}
                    </div>
                    <div className={`${styles.menuButton}`}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
