'use client';
import Image from 'next/image'
import { useRouter } from "next/navigation";

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
}
const Card = ({ productContents }: productParameters) => {
    const router = useRouter();
    const handleClickViewVideo = (slug: string, marca: string) => {
        router.push(`/${marca}/producto/${slug}`)
    }
    return (
        <div
            className={styles.cardPrduct}
            onClick={() => handleClickViewVideo(productContents.slug, productContents.marca)}
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
