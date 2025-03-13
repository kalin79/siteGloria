'use client';
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/scss/footer.module.scss';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="containerFluid">
                <div className={styles.gridContainer}>
                    <div>
                        <Link href="/">
                            <Image src="/logoFooter.svg" width={160} height={126} alt='Gloria' />
                        </Link>
                    </div>
                    <div>
                        <h3 className='mitsi font-medium'>Leche Gloria</h3>
                        <div className={styles.listLink}>
                            <Link href="/quienes-somos">Quienes Somos</Link>
                            <Link href="/nuestro-compromiso">Nuestro compromiso</Link>
                            <Link href="/ganaderos">Ganaderos</Link>
                            <Link href="/informacion-financiera">Información financiera</Link>
                            <Link href="/sostenibilidad">Sostenibilidad</Link>
                            <Link href="/noticias">Noticias</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className='mitsi font-medium'>Marcas</h3>
                        <div className={styles.listLink}>
                            <Link href="/gloria">Gloria</Link>
                            <Link href="/pro">PRO</Link>
                            <Link href="/actibio">ActiBio</Link>
                            <Link href="/bonle">Bonlé</Link>
                            <Link href="/batti-mix">BattiMix</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className='mitsi font-medium'>Legales</h3>
                        <div className={styles.listLink}>
                            <Link href="/terminos-y-condiciones">T&eacute;rminos y Condiciones</Link>
                            <Link href="/politicias-de-proteccion-de-datos">Politicias de Protecci&oacute;n de Datos</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className='mitsi font-medium'>0800-1-8152</h2>
                        <p className='mitsi font-normal'>De lunes a viernes de 8:30 am a 6:30 pm, marcando la opción 1</p>
                        <a href="mailto:reportes@gloriateescucha.com" className='mitsi font-light'>reportes@gloriateescucha.com</a>
                    </div>
                </div>
                <div className={`${styles.cierreFooter}`}>
                    <div className={styles.redesBox}>
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
                    <div className={styles.CopyBox}>
                        <h4 className='mitsi font-normal'>© GLORIA. All Rights Reserved.</h4>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
