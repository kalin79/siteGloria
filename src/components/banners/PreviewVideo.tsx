'use client';
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import VideoBanner from "@/components/videos/Banner"
import dynamic from "next/dynamic";
import styles from '@/styles/scss/banner.module.scss';
// Importamos el Popup sin SSR
const DynamicPopup = dynamic(() => import("@/components/popup/PopupVideo"), { ssr: false });

interface BannerInterface {
    title: string;
    subTitle: string;
    idMarca: number;
    marca: string;
    slugMarca: string;
    slug: string;
    type: string; // video o imagen
    multimedia: string;
    like: string;
    logoMarca: string;
    duracion: string;
}
interface multimediaParameters {
    multimediaContents: BannerInterface;
}
const PreviewVideo = ({ multimediaContents }: multimediaParameters) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {/* Renderizamos el Popup con los datos */}
            <DynamicPopup isOpen={isOpen} onClose={() => setIsOpen(false)} items={multimediaContents} />
            <div className={styles.BannerInternoContainer}>
                <div className={styles.logoMarcaContainer}>
                    <Image src={`/${multimediaContents.logoMarca}`} width={300} height={300} alt="Gloria" />
                </div>
                <div className='bgDegradadoBg'>
                    {
                        (multimediaContents.type === 'video') ? (
                            <>
                                <div className={styles.infoVideoBox}>
                                    <div className={`containerFluid ${styles.containerFluid}`}>
                                        <div className={`gridBanner`}>
                                            <div>
                                                <h2 className='misti font-normal' dangerouslySetInnerHTML={{ __html: multimediaContents.title }}></h2>
                                                <h3 className='misti font-light' dangerouslySetInnerHTML={{ __html: multimediaContents.subTitle }}></h3>
                                                <div className={styles.infoTecnicaBox}>
                                                    <div className={styles.startBox}>
                                                        <Image src="/start.svg" width={24} height={24} alt='Calificacion' />
                                                        <p className='misti font-light'>{multimediaContents.like}</p>
                                                    </div>
                                                    <div className={styles.startBox}>
                                                        <Image src="/time.svg" width={24} height={24} alt='Duracion' />
                                                        <p className='misti font-light'>Duración: {multimediaContents.duracion}</p>
                                                    </div>
                                                </div>
                                                <div className={styles.buttonBox}>
                                                    <button onClick={() => setIsOpen(true)}>
                                                        <span className='poppins font-medium'>Reproduci</span>
                                                        <Image src="/playButton.svg" width={22} height={22} alt='Play' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <VideoBanner />
                            </>
                        ) : (
                            <>
                                <div className={styles.infoVideoBox}>
                                    <div className={`containerFluid ${styles.containerFluid}`}>
                                        <div className='gridBanner'>
                                            <div>
                                                <h2 className='misti font-normal' dangerouslySetInnerHTML={{ __html: multimediaContents.title }}></h2>
                                                <h3 className='misti font-light' dangerouslySetInnerHTML={{ __html: multimediaContents.subTitle }}></h3>

                                                <div className={styles.buttonBox}>
                                                    <Link href={`/${multimediaContents.slugMarca}/video/${multimediaContents.slug}`} className='buttonBtn'>
                                                        <span className='poppins font-medium'>Más información</span>
                                                        <Image src="/info.svg" width={32} height={32} alt='Más información' />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Image src={multimediaContents.multimedia} fill className={styles.imageFill} alt='' />
                            </>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default PreviewVideo
