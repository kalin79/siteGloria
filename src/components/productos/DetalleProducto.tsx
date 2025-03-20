'use client';
import Image from 'next/image'
import styles from '@/styles/scss/productos.module.scss';
const DetalleProducto = () => {
    return (
        <div className={styles.detallePrincipalContainer}>
            <div className={styles.gridDetalle}>
                <div className={styles.miniThumbBox}>
                    <div className={styles.marcoImagen}>
                        <Image src='/t1.png' fill alt='' />
                    </div>
                    <div className={styles.marcoImagen}>
                        <Image src='/t2.png' fill alt='' />
                    </div>
                    <div className={styles.marcoImagen}>
                        <Image src='/t3.png' fill alt='' />
                    </div>
                </div>
                <div className={styles.viewImageMain}>
                    <Image src='/t4.png' fill alt='' />
                </div>
                <div className={styles.descriptionBox}>
                    <h1 className='mitsi font-normal'>Leche Entera UHT Gloria</h1>
                    <p className='poppins font-normal'>Es un producto elaborado a partir de la leche entera de vaca enriquecido con vitaminas A y D. Por su naturaleza aporta proteínas de alta calidad y minerales como el calcio y el fósforo.</p>
                    <h2 className='mitsi font-normal'>PRESENTACIONES</h2>
                    <div className='productoLineaBox'>
                        <div>
                            <div className='iconBox'>
                                <Image src='/ico1.png' fill alt='' />
                            </div>
                            <p>Caja 1 L</p>
                        </div>
                        <div>
                            <div className='iconBox'>
                                <Image src='/ico2.png' fill alt='' />
                            </div>
                            <p>Botella <br />
                                946 ml</p>
                        </div>
                        <div>
                            <div className='iconBox'>
                                <Image src='/ico3.png' fill alt='' />
                            </div>
                            <p>Bolsa <br />
                                900 ml</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerDescription}>
                <div>
                    <h2 className='mitsu font-extralight'>Un vaso de bienestar en
                        cada momento</h2>
                    <h3 className='mitsu font-normal'>
                        200 ml de producto contiene:
                    </h3>
                </div>
                <div>
                    <div>
                        <div className={styles.infoBox}>
                            <h4 className='mitsu font-extralight'>6.3 g</h4>
                            <h2 className='mitsu font-normal'>Grasas</h2>
                        </div>
                    </div>
                    <div>
                        <div className={styles.infoBox}>
                            <h4 className='mitsu font-extralight'>9.6 g</h4>
                            <h2 className='mitsu font-normal'>Carbohidratos</h2>
                        </div>
                    </div>
                    <div>
                        <div className={styles.infoBox}>
                            <h4 className='mitsu font-extralight'>5.8 g</h4>
                            <h2 className='mitsu font-normal'>Proteínas</h2>
                        </div>
                    </div>
                    <div>
                        <div className={styles.infoBox}>
                            <h4 className='mitsu font-extralight'>236 kCal</h4>
                            <h2 className='mitsu font-normal'>Energía</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetalleProducto
