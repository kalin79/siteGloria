'use client';
import Image from 'next/image';
import styles from '@/styles/scss/legal.module.scss';
interface BannerEstaticoInternoInterface {
    title: string;
    subTitle: string;
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
                                    <h1 className='misti font-normal' dangerouslySetInnerHTML={{ __html: multimediaContents.title }}></h1>
                                    <p className='misti font-light' dangerouslySetInnerHTML={{ __html: multimediaContents.subTitle }}></p>
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
