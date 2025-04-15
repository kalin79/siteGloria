'use client';
import Image from 'next/image'
import styles from '@/styles/scss/noticias.module.scss';
interface NoticiaInterface {
    title: string;
    slug: string;
    imagen: string;
}

interface noticiasParameters {
    noticiaContents: NoticiaInterface,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
}

const Card = ({ noticiaContents, onClick }: noticiasParameters) => {
    return (
        <div
            className={styles.cardNoticia}
            onClick={onClick}
        >
            <Image src={noticiaContents.imagen} className={styles.imgContainer} fill alt='' />
            <div className={styles.footerCard}>
                <p className='mitsi font-normal '>
                    {noticiaContents.title}
                </p>
                <div className={styles.btnNoticia}>
                    <Image src="btnmas.svg" width={32} height={32} alt="Ver mas" />
                </div>
            </div>

        </div>
    )
}

export default Card
