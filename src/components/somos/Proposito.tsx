'use client';
import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/scss/somos.module.scss';
const Proposito = () => {
    return (
        <div className={styles.propositoContainer}>
            <Image src="/nina.png" className={styles.imgContainer} width={1760} height={2724} alt='Niña tomando leche Gloria' />
            <div className='containerFluid'>
                <div className={`${styles.gridContainer}`}>
                    <div>
                        <h3 className='misti font-medium'>ESTRATEGIA GLORIA</h3>
                        <h2 className='misti font-light'>
                            Construyendo un <br />
                            <span className='font-normal'>Perú nutritivo</span>
                        </h2>
                        <p>
                            En Gloria, trabajamos con pasión para llevar nutrición y bienestar a cada hogar peruano. Con integridad y calidad, impulsamos el desarrollo del país a través de nuestros productos.
                        </p>
                        <div className={styles.listadoBox}>
                            <div>
                                <div className={styles.iconBox}>
                                    <Image src="/pro1.svg" width={100} height={100} alt='PROPÓSITO' />
                                </div>
                                <div className={styles.infoBox}>
                                    <h4>PROPÓSITO</h4>
                                    <p>
                                        Alimentamos el progreso, el
                                        bienestar y los sueños de todos los
                                        peruanos.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.iconBox}>
                                    <Image src="/pro2.svg" width={100} height={100} alt='PROPÓSITO' />
                                </div>
                                <div className={styles.infoBox}>
                                    <h4>VISIÓN</h4>
                                    <p>
                                        Aspiramos a que la alimentación sea un eje central para el
                                        desarrollo del país.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.iconBox}>
                                    <Image src="/pro3.svg" width={100} height={100} alt='PROPÓSITO' />
                                </div>
                                <div className={styles.infoBox}>
                                    <h4>MISIÓN</h4>
                                    <p>
                                        Garantizamos el acceso a alimentos ricos, nutritivos y de calidad para todos los peruanos mediante nuestras marcas, capacidad industrial y estrategia go to market.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.botonBox}>
                            <Link href="/quienes-somos">Sobre Nosotros</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proposito
