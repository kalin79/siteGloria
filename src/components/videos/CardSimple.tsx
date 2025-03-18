'use client';
import { useRouter } from "next/navigation";
import Image from 'next/image';

import styles from '@/styles/scss/videos.module.scss';

interface VideoContent {
    title: string;
    idMarca: number;
    marca: string;
    slug: string;
    imagen: string;
    video: string;
    colorMarca: string; // colorGloria
    duracion: string;
    like: number;
}
interface videoParameters {
    videosContents: VideoContent,
}
const CardSimple = ({ videosContents }: videoParameters) => {
    const router = useRouter();
    const handleClickViewVideo = (slug: string, marca: string) => {
        router.push(`/${marca}/video/${slug}`)
    }
    return (
        <div

            className={`${styles.cardVideoBox} `}
            onClick={() => handleClickViewVideo(videosContents.slug, videosContents.marca)}
        >
            <div className={`${styles.cardBody} ${styles.cardBodyBg}`}>
                <Image src='/play2.svg' className={styles.playIcon2} width={52} height={52} alt='Bonle :: Reproducir el video' />
                <Image src={videosContents.imagen} className={styles.videoBoxImg} fill alt='Bonle :: Loncheras divertidas y nutritivas para tus pequeños' />
            </div>
            <div className={`${styles.cardFooter} ${styles.footerBackground}`}>
                <h3 className='mitsi font-medium'>
                    {videosContents.title}
                </h3>
                <div className={styles.likeContainer}>
                    <div>
                        <Image src='/like.svg' className={styles.playIcon} width={18} height={17} alt='Bonle :: Reproducir el video' />
                        {videosContents.like}
                    </div>
                    <div>
                        <Image src='/time2.svg' className={styles.playIcon} width={18} height={18} alt='Bonle :: Reproducir el video' />
                        {videosContents.duracion}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardSimple
