'use client';
import { useRouter } from "next/navigation";

import Image from 'next/image'
import styles from '@/styles/scss/campanas.module.scss';
interface VideoContentCampana {
    title: string;
    subTitle: string;
    idMarca: number;
    marca: string;
    slug: string;
    imagen: string;
    video: string;
}
interface videoParameters {
    videosContents: VideoContentCampana,
}
const Rectangular = ({ videosContents }: videoParameters) => {
    const router = useRouter();


    const handleClickViewVideo = (slug: string, marca: string) => {
        router.push(`/${marca}/campana/${slug}`)
    }




    return (
        <div
            className={`${styles.cardCampanaRect} `}

            onClick={() => handleClickViewVideo(videosContents.slug, videosContents.marca)}
        >
            <div className={styles.cardBody}>
                <Image src={videosContents.imagen} fill alt='Bonle :: Loncheras divertidas y nutritivas para tus pequeños' />
            </div>
            <div className={styles.cardFooter}>
                <Image src='/play.svg' className={styles.playIcon} width={34} height={34} alt='Bonle :: Reproducir el video' />
                <h2 className='mitsi font-light'>
                    {videosContents.subTitle} - {videosContents.marca}
                </h2>
                <h3 className='mitsi font-medium'>
                    {videosContents.title}
                </h3>
            </div>
        </div>
    )
}

export default Rectangular
