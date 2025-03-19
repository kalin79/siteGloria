'use client';
import Image from 'next/image';
import styles from '@/styles/scss/banner.module.scss';
interface BannerEstaticoInternoInterface {
    title: string;
    idMarca: number;
    marca: string;
    logoMarca: string;
    slug: string;
    multimedia: string;
}
interface multimediaParameters {
    multimediaContents: BannerEstaticoInternoInterface;
}

const BannerEstatico = ({ multimediaContents }: multimediaParameters) => {
    return (
        <>
            <div className={styles.BannerInternoContainer}>
                <div className={styles.logoMarcaContainer}>
                    <Image src={`/${multimediaContents.logoMarca}`} width={300} height={300} alt="Gloria" />
                </div>
                <div className='bgDegradadoBg'>
                    <div className={styles.infoVideoBox}>
                        <div className={`containerFluid ${styles.containerFluid}`}>
                            <div className="gridBanner">
                                <div>
                                    <h2 className='misti font-normal' dangerouslySetInnerHTML={{ __html: multimediaContents.title }}></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image src={multimediaContents.multimedia} fill className={styles.imageFill} alt='' />
                </div>
            </div>
        </>
    )
}

export default BannerEstatico
