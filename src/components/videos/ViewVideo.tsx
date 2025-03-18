"use client";
import styles from '@/styles/scss/videos.module.scss';

const ViewVideo = () => {
    return (
        <>
            <div className={styles.videoContainerFullPage}>
                <video width="100%" height="100%"
                    autoPlay // Reproducir automáticamente
                    controls={true} // Ocultar controles
                >
                    <source src="/videocorto.mp4" type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
            </div>
        </>
    )
}

export default ViewVideo
