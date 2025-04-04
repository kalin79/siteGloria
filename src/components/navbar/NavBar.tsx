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
        <>
            <div className={`${styles.navegationMenu} navegationMenu`}>
                <div className={`${styles.navBar}`}>
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
                </div>
            </div>
            <div className={styles.viewMenuContainer}>
                <div className={`containerFluid ${styles.containerFluid}`}>
                    <div className={styles.gridContainer}>
                        <div>
                            <Link href='/'>
                                <Image src='/logo.svg' className={styles.logoMainBox} width="160" height='126' alt='Gloria' />
                            </Link>
                            <nav>
                                <Link href='/'>Principa</Link>
                                <div className={styles.menuMultiple}>
                                    <div className={styles.menuMultipleHeader}>
                                        <h2>Gloria</h2>
                                        <Image src='/logo.svg' className={styles.logoMainBox} width="160" height='126' alt='Gloria' />
                                    </div>
                                    <div className={styles.menuMultipleListado}>
                                        <Link href='/quienes-somos'>Quienes Somos</Link>
                                        <Link href='/nuestro-compromiso'>Nuestro compromiso</Link>
                                        <Link href='/ganaderos'>Ganaderos</Link>
                                        <Link href='/informacion-financiera'>Informaci&oacute;n financiera</Link>
                                        <Link href='/sostenibilidad'>Sostenibilidad</Link>
                                        <Link href='/noticias'>Noticias</Link>
                                    </div>
                                </div>
                                <div className={styles.menuMultiple}>
                                    <div className={styles.menuMultipleHeader}>
                                        <h2>Marcas</h2>
                                        <Image src='/logo.svg' className={styles.logoMainBox} width="160" height='126' alt='Gloria' />
                                    </div>
                                    <div className={styles.menuMultipleListado}>
                                        <Link href='/quienes-somos'>Gloria</Link>
                                        <Link href='/bonle'>Bonl&eacute;</Link>
                                        <Link href='/pro'>Pro</Link>
                                        <Link href='/actibio'>ActiBio</Link>
                                        <Link href='/batti-mix'>Batti mix</Link>
                                    </div>
                                </div>
                            </nav>
                            <div className={styles.contactoContainer}>
                                <h3>Contáctanos</h3>
                                <div className={styles.phoneContainer}>
                                    <div>
                                        <Image src='/logo.svg' className={styles.logoMainBox} width="160" height='126' alt='Gloria' />
                                        <h4>0800-1-8152</h4>
                                    </div>
                                    <div>
                                        <p>De lunes a viernes de 8:30 am a 6:30 pm, marcando la opción 1</p>
                                    </div>
                                </div>
                                <div className={styles.emailContainer}>
                                    <div>
                                        <Image src='/logo.svg' className={styles.logoMainBox} width="160" height='126' alt='Gloria' />
                                        <h4>reportes@gloriateescucha.com</h4>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.redesContainer}>
                                <h5>Sigue nuestras redes sociales</h5>
                                <div className={styles.listRedes}>
                                    <a href="/" target='_blank'>
                                        <Image src="/facebook.svg" width={32} height={32} alt='Facebook' />
                                    </a>
                                    <a href="/" target='_blank'>
                                        <Image src="/instagram.svg" width={32} height={32} alt='Instagram' />
                                    </a>
                                    <a href="/" target='_blank'>
                                        <Image src="/youtube.svg" width={32} height={32} alt='Youtube' />
                                    </a>
                                    <a href="/" target='_blank'>
                                        <Image src="/linkedin.svg" width={32} height={32} alt='Linkedin' />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.legalesContainer}>
                                <Link href="/legales/terminos-y-condiciones">T&eacute;rminos y Condiciones</Link>
                                <Link href="/legales/politicias-de-proteccion-de-datos">Politicias de Protecci&oacute;n de Datos</Link>
                            </div>
                        </div>
                        <div>
                            <div className={styles.curvaImage}>
                                <Image src='/bgMenu.png' className={styles.fondoBg} fill alt='Gloria' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
