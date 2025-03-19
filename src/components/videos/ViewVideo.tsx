"use client";
import styles from '@/styles/scss/videos.module.scss';
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
interface PropVideo {
    videoContent: BannerInterface;
}

const ViewVideo = ({ videoContent }: PropVideo) => {
    return (
        <>
            <div className={styles.videoContainerFullPage}>
                <video width="100%" height="100%"
                    autoPlay // Reproducir automáticamente
                    controls={true} // Ocultar controles
                >
                    <source src={videoContent.multimedia} type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
            </div>
        </>
    )
}

export default ViewVideo
