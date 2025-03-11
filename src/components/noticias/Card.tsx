'use client';
import Image from 'next/image'
import { useRouter } from "next/navigation";
import styles from '@/styles/scss/noticias.module.scss';
interface NoticiaInterface {
    title: string;
    slug: string;
    imagen: string;
}

interface noticiasParameters {
    noticiaContents: NoticiaInterface,
}

const Card = ({ noticiaContents }: noticiasParameters) => {
    const router = useRouter();
    const handleClickViewVideo = (slug: string) => {
        router.push(`/noticias/${slug}`)
    }
    return (
        <div
            className={styles.cardNoticia}
            onClick={() => handleClickViewVideo(noticiaContents.slug)}
        >
            <Image src={noticiaContents.imagen} fill alt='' />
            <p className='mitsi font-normal '>
                {noticiaContents.title}
            </p>
        </div>
    )
}

export default Card
