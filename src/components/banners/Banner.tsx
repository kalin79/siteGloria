'use client';
import Image from 'next/image';
import Link from 'next/link';
import VideoBanner from "@/components/videos/Banner"
import styles from '@/styles/scss/carrusel.module.scss';
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
    duracion: string;
}
interface multimediaParameters {
    multimediaContents: BannerInterface;
}
const Banner = ({ multimediaContents }: multimediaParameters) => {
    return (
        <>
            <div className='bgDegradadoBg'>
                {
                    (multimediaContents.type === 'video') ? (
                        <>
                            <div className={styles.infoVideoBox}>
                                <div className={`containerFluid ${styles.containerFluid}`}>
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
                                        <button>
                                            <span className='poppins font-medium'>Reproducir</span>
                                            <Image src="/playButton.svg" width={22} height={22} alt='Play' />
                                        </button>
                                        <Link href={`/${multimediaContents.slugMarca}/video/${multimediaContents.slug}`} className='buttonBtn'>
                                            <span className='poppins font-medium'>Más información</span>
                                            <Image src="/info.svg" width={32} height={32} alt='Más información' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <VideoBanner />
                        </>
                    ) : (
                        <>
                            <div className={styles.infoVideoBox}>
                                <div className={`containerFluid ${styles.containerFluid}`}>
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
                            <Image src={multimediaContents.multimedia} fill className={styles.imageFill} alt='' />
                        </>
                    )
                }

            </div>
        </>

    )
}

export default Banner
