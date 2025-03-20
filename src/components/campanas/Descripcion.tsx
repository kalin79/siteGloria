'use client';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/scss/campanas.module.scss';
const Descripcion = () => {
    return (
        <>
            <div className={styles.descriptionCampanaContainer}>
                <div>
                    <div className={styles.boxImagen}>
                        <Image src='/camp.png' fill alt='Bonle :: Loncheras divertidas y nutritivas para tus pequeños' />
                    </div>
                </div>
                <div>
                    <div className={styles.infoBox}>
                        <h1>
                            ¡Un nuevo año escolar está por comenzar y, detrás de cada mochila lista, hay padres que han dado todo para que sus hijos empiecen con el pie derecho!
                        </h1>
                        <div className='cmsInfo'>
                            <p>
                                Desde madrugar para preparar el desayuno hasta alistar los uniformes y repasar las tareas, cada detalle refleja su amor, compromiso y esfuerzo incondicional.
                            </p>
                            <p>
                                Porque más que buenos estudiantes, están formando grandes personas, y Leche Gloria está ahí para acompañarlos en este camino. Con la nutrición y energía que necesitan, los niños están listos para aprender, crecer y alcanzar sus sueños. ¡Un gran regreso a clases comienza con el esfuerzo de mamá y papá!
                            </p>
                            <p>
                                Participa <a href="https://google.com.pe" target='_blank'>aqu&iacute;</a>
                            </p>
                        </div>
                        <div className={styles.legalesBox}>
                            <Link href='/gloria/legales/13-terminos-condiciones'>Terminos y Condiciones</Link>
                            <Link href='/gloria/legales/135-politica-de-datos'>Politicas de Datos</Link>
                            <Link href='/gloria/legales/7654-politica-de-cookies'>Politicas de Cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Descripcion
