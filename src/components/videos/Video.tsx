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
    colorMarca: string; // colorGloria
}
interface videoParameters {
    index: number,
    videosContents: VideoContent,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    onMouseEnter: (event: React.MouseEvent<HTMLDivElement>) => void;
    onMouseMove: (event: React.MouseEvent<HTMLDivElement>) => void;
}
const Video = forwardRef<HTMLDivElement, videoParameters>(({ videosContents, onMouseEnter, onMouseMove, onClick }, ref) => {
    return (
        <div
            ref={ref}
            onMouseEnter={onMouseEnter}
            className={`${styles.cardVideoBox} `}
            onClick={onClick}
            onMouseMove={onMouseMove}
        >
            <div className={styles.cardBody}>
                <Image src='/play.svg' className={styles.playIcon} width={34} height={34} alt='Bonle :: Reproducir el video' />
                <Image src={videosContents.imagen} className={styles.videoBoxImg} fill alt='Bonle :: Loncheras divertidas y nutritivas para tus pequeños' />
            </div>
            <div className={styles.cardFooter}>
                <div className={`${styles.etiquetaCard} ${videosContents.colorMarca}`}>
                    {videosContents.marca}
                </div>
                <h3 className='mitsi font-medium'>
                    {videosContents.title}
                </h3>
            </div>
        </div>
    )
}
)
Video.displayName = 'Video'; // Añadimos el displayName para cumplir con ESLint
export default Video
