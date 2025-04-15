'use client';
import Image from 'next/image'

import styles from '@/styles/scss/productos.module.scss';
interface ProductContent {
    title: string;
    presentacion: string;
    idMarca: number;
    marca: string;
    slug: string;
    imagen: string;
    receta: boolean;
}
interface productParameters {
    productContents: ProductContent,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
}
const Card = ({ productContents, onClick }: productParameters) => {


    return (
        <div
            className={styles.cardPrduct}
            onClick={onClick}
        >
            {
                (productContents.receta) && (
                    <div className={styles.recetacontent}>
                        <Image src="/iconChef2.svg" width={60} height={68} alt='' />
                    </div>
                )
            }

            <div className={styles.bodyCardBox}>
                <Image src={productContents.imagen} width={408} height={408} alt='' />
            </div>
            <div className={styles.footerCardBox}>
                <h4 className='misti font-medium'>{productContents.title}</h4>
                <h2 className='misti font-normal'>{productContents.presentacion}</h2>
            </div>
        </div>
    )
}

export default Card
