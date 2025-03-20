
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/scss/navbar.module.scss';

// import { Poppins } from 'next/font/google'

// const poppins500 = Poppins({
//     weight: '500',
//     subsets: ['latin'],
//     display: 'swap',
// })


const NavBar = () => {
    return (
        <div className={`${styles.navegationMenu}`}>
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
