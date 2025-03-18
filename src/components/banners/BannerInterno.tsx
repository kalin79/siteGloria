'use client';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';
import VideoBanner from "@/components/videos/Banner"
import styles from '@/styles/scss/banner.module.scss';

interface BannerInternoInterface {
    title: string;
    subTitle: string;
    idMarca: number;
    marca: string;
    logoMarca: string;
    slugMarca: string;
    slug: string;
    type: string; // video o imagen
    multimedia: string;
    like: string;
    duracion: string;
}
interface multimediaParameters {
    multimediaContents: BannerInternoInterface;
}
const BannerInterno = ({ multimediaContents }: multimediaParameters) => {
    const router = useRouter();
    const handleVideo = () => {
        router.push(`/${multimediaContents.slugMarca}/video/${multimediaContents.slug}`)
    }
    return (
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
                                    <div className="gridBanner">
                                        <div>
                                            <h1 className='mitsi font-normal' dangerouslySetInnerHTML={{ __html: multimediaContents.marca }}></h1>
                                            <h2 className='mitsi font-normal' dangerouslySetInnerHTML={{ __html: multimediaContents.title }}></h2>
                                            <p className='mitsi font-normal' dangerouslySetInnerHTML={{ __html: multimediaContents.subTitle }}></p>
                                            <div className={styles.buttonBox}>
                                                <button
                                                    onClick={handleVideo}
                                                >
                                                    <span className='poppins font-medium'>Ver m&aacute;s</span>
                                                    {/* <Image src="/playButton.svg" width={22} height={22} alt='Play' /> */}
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
                                    <div className="gridBanner">
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
    )
}

export default BannerInterno
