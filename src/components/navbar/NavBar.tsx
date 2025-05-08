'use client';
import { useEffect, useState, useRef } from "react";
// import { signOut, useSession } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from 'next/image'
import Link from 'next/link'
import gsap from "gsap";
import styles from '@/styles/scss/navbar.module.scss';

const NavBar = () => {
    const [isMenuCooporativo, setIsMenuCoorporativo] = useState(false)
    const [isMenuMarcas, setIsMenuMarcas] = useState(false)
    const miDivRefMenu = useRef(null);
    const { data: session } = useSession();
    // onClick={() => signOut()}
    const handleCloseMenu = () => {
        const tlMenu = gsap.timeline();
        tlMenu.to(miDivRefMenu.current, {
            x: '-100%',
            ease: "power2.out",
            duration: .5,
        })
    }

    const handleViewMenu = () => {
        const tlMenu = gsap.timeline();
        tlMenu.to(miDivRefMenu.current, {
            x: 0,
            ease: "power2.out",
            duration: .5,
        })
    }



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
                        {
                            (session) ? (
                                <>
                                    <div className={`${styles.loginBox}`}>
                                        <h5 className='poppins font-medium'>{session?.user?.name && session.user.name.length > 0 ? session.user.name.charAt(0) : ""}</h5>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link href="/auth/login" className={`${styles.buttonLogin} `}>
                                        <Image src="/btnlogin.svg" width={18} height={18} alt="login" />
                                        <span className="poppins">Iniciar sesión</span>
                                    </Link>
                                </>
                            )
                        }
                        <div className={`${styles.menuButton}`} onClick={handleViewMenu}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.viewMenuContainer} ref={miDivRefMenu}>
                <div className={`containerFluid ${styles.containerFluid}`}>
                    <div className={styles.gridContainer}>
                        <div>
                            <Link href='/'>
                                <Image src='/logo.svg' className={styles.logoMainBox} width="160" height='126' alt='Gloria' />
                            </Link>
                            <div className={styles.btnCloseContainer} onClick={handleCloseMenu}>
                                <Image src='/close.svg' width="58" height='54' alt='Gloria :: Cerrar Menu' />
                            </div>
                            <div className={styles.alignMenuVertical}>
                                <div className={styles.MenuTop}>
                                    <nav>
                                        <Link href='/'>Home</Link>
                                        <div className={styles.menuMultiple}>
                                            <div className={`${styles.menuMultipleHeader} ${isMenuCooporativo ? `${styles.active}` : ''}`} onClick={() => {
                                                setIsMenuCoorporativo(prev => !prev)
                                                setIsMenuMarcas(false)
                                            }}>
                                                <h2>Gloria</h2>
                                                <Image src='/arrow2.svg' className={styles.arrowBox} width="28" height='14' alt='Gloria' />
                                            </div>
                                            <div className={`${styles.menuMultipleListado} ${isMenuCooporativo ? `${styles.active}` : ''}`} >
                                                <Link href='/quienes-somos'>Quienes Somos</Link>
                                                <Link href='/nuestro-compromiso'>Nuestro compromiso</Link>
                                                <Link href='/ganaderos'>Ganaderos</Link>
                                                <Link href='/informacion-financiera'>Informaci&oacute;n financiera</Link>
                                                <Link href='/sostenibilidad'>Sostenibilidad</Link>
                                                <Link href='/noticias'>Noticias</Link>
                                            </div>
                                        </div>
                                        <div className={styles.menuMultiple}>
                                            <div className={`${styles.menuMultipleHeader} ${isMenuMarcas ? `${styles.active}` : ''}`} onClick={() => {
                                                setIsMenuCoorporativo(false)
                                                setIsMenuMarcas(prev => !prev)
                                            }}>
                                                <h2>Marcas</h2>
                                                <Image src='/arrow2.svg' className={styles.arrowBox} width="28" height='14' alt='Gloria' />
                                            </div>
                                            <div className={`${styles.menuMultipleListado} ${isMenuMarcas ? `${styles.active}` : ''}`} >
                                                <Link href='/quienes-somos'>Gloria</Link>
                                                <Link href='/bonle'>Bonl&eacute;</Link>
                                                <Link href='/pro'>Pro</Link>
                                                <Link href='/actibio'>ActiBio</Link>
                                                <Link href='/batti-mix'>Batti mix</Link>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                <div className={styles.MenuTop}>
                                    <div className={styles.contactoContainer}>
                                        <h3>Contáctanos</h3>
                                        <div className={styles.phoneContainer}>
                                            <div>
                                                <Image src='/fono.svg' width="23" height='20' alt='Llamanos al : 0800-1-8152' />
                                                <h4>0800-1-8152</h4>
                                            </div>
                                            <div>
                                                <p>De lunes a viernes de 8:30 am a 6:30 pm, marcando la opción 1</p>
                                            </div>
                                        </div>
                                        <div className={styles.emailContainer}>
                                            <Image src='/email.svg' width="20" height='16' alt='Email: reportes@gloriateescucha.com' />
                                            <a href="mailto:reportes@gloriateescucha.com" target='_blank'>reportes@gloriateescucha.com</a>
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
