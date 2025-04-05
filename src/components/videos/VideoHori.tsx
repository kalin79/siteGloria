'use client';
import { forwardRef } from 'react';
import Image from 'next/image'
import styles from '@/styles/scss/videos.module.scss';
interface VideoContent {
    title: string;
    idMarca: number;
    marca: string;
    slug: string;
    imagen: string;
    video: string;
    colorMarca: string;
}
interface videoParameters {
    index: number,
    videosContents: VideoContent,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
    onMouseEnter: (event: React.MouseEvent<HTMLDivElement>) => void,
    onMouseMove: (event: React.MouseEvent<HTMLDivElement>) => void
}
const VideoHori = forwardRef<HTMLDivElement, videoParameters>(({ index, videosContents, onMouseEnter, onMouseMove, onClick }, ref) => {

    return (
        <div
            ref={ref}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
            onMouseMove={onMouseMove}
            className={`${styles.cardVideoBox} `}
        >
            <div className={styles.cardBody}>
                <Image src={videosContents.imagen} className={styles.videoBoxImg} fill alt='Bonle :: Loncheras divertidas y nutritivas para tus pequeños' />
            </div>
            {/* <div className={styles.playBoxHori}>
                <Image src='/play3.svg' className={styles.playIcon} width={52} height={52} alt='Bonle :: Reproducir el video' />
            </div> */}
            <div className={`${styles.etiquetaCard} ${videosContents.colorMarca}`}>
                {videosContents.marca}
            </div>
            <div className={styles.cardFooter}>
                <h3 className='mitsi font-medium'>
                    <span>{videosContents.title}</span>
                    <span className={`${styles.numberBox} mitsi font-bold`}>{index + 1}</span>
                </h3>
            </div>
        </div>
    )
}
)
VideoHori.displayName = 'VideoHori';
export default VideoHori
