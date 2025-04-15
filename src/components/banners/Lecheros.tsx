'use client';
import Image from 'next/image';
import styles from '@/styles/scss/banner.module.scss';

const Lecheros = () => {
    return (
        <div className='containerFluid'>
            <div className={styles.bannerLecherosContainer}>
                <div>
                    <Image src="/ganadero.webp" width="2175" height={1160} alt='Día a dia con nuestros productores lecheros' />
                </div>
                <div>
                    <div className={styles.logoGanadero}>
                        <Image src="/logoGanadero.svg" width={112} height={107} alt='Desarrollo Ganadero' />
                    </div>
                    <div className={styles.titluarGanadero}>
                        <h2 className='mitsi font-light '>
                            Día a dia con nuestros <span>productores lecheros</span>
                        </h2>
                    </div>
                    <p className='mitsi font-light '>
                        Consulta tu historial, la leche acopiada, servicios y beneficios por ser proveedor de Gloria.
                    </p>
                    <div className={styles.buttonBox}>
                        <a href="https://www.portalganaderogloria.com.pe/" target="_blank" className={`buttonBtn ${styles.buttonBtn}`}>Ingresa aquí</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lecheros
