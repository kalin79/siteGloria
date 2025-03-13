'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import VideoBanner from "@/components/videos/Banner"
import VideoComponent from "@/components/videos/VideoHori";

// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
const VideosCarruselHori = () => {
    const videos: VideoContent[] = [
        {
            title: 'Nutrición para Crecer:',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'nutricion-para-crecer',
            imagen: '/videohor1.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1'
        },
        {
            title: 'Energía en Cada Cucharada: El Poder del Yogurt y los Cereales',
            idMarca: 2,
            marca: 'ActiBio',
            slug: 'energia-en-cada-cucharada-el-poder-del-yogurt-y-los-cereales',
            imagen: '/videohor2.png',
            video: '/videocorto.mp4',
            colorMarca: 'color2'
        },
        {
            title: 'Ganar Masa Muscular: ¿Cómo Te Ayuda Tu Batido Energético?',
            idMarca: 3,
            marca: 'PRO',
            slug: 'ganar-masa-muscular-¿como-te-ayuda-tu-batido-energetico',
            imagen: '/videohor3.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3'
        },
        {
            title: 'Nutrición para Crecer: Los Mejores Alimentos para Cada Etapa de Tu Hijo',
            idMarca: 4,
            marca: 'Gloria',
            slug: 'nutricion-para-crecer-los-mejores-alimentos-para-cada-etapa-de-tu-hijo',
            imagen: '/videohor4.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1'
        },
        {
            title: 'Nutrición para Crecer:',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'nutricion-para-crecer',
            imagen: '/videohor1.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1'
        },
        {
            title: 'Energía en Cada Cucharada: El Poder del Yogurt y los Cereales',
            idMarca: 2,
            marca: 'ActiBio',
            slug: 'energia-en-cada-cucharada-el-poder-del-yogurt-y-los-cereales',
            imagen: '/videohor2.png',
            video: '/videocorto.mp4',
            colorMarca: 'color2'
        },
        {
            title: 'Ganar Masa Muscular: ¿Cómo Te Ayuda Tu Batido Energético?',
            idMarca: 3,
            marca: 'PRO',
            slug: 'ganar-masa-muscular-¿como-te-ayuda-tu-batido-energetico',
            imagen: '/videohor3.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3'
        },
        {
            title: 'Nutrición para Crecer: Los Mejores Alimentos para Cada Etapa de Tu Hijo',
            idMarca: 4,
            marca: 'Gloria',
            slug: 'nutricion-para-crecer-los-mejores-alimentos-para-cada-etapa-de-tu-hijo',
            imagen: '/videohor4.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1'
        },

    ]
    return (
        <>
            <div className={`containerFluid`}>
                <div className={`videosHomeTitularBox`}>
                    <h2 className="mitsi  font-normal"><span className="mitsi font-extralight">Tendencia en la </span>comunidad Gloria Contigo</h2>
                </div>
            </div>
            <div className={styles.videoHoriListContent}>
                <div className={`listScrollVideo`}>
                    <Swiper
                        spaceBetween={10}
                        centeredSlides={true}
                        slidesPerView={1} // Muestra 5 películas a la vez
                        navigation
                        pagination={{ clickable: true }}
                        // autoplay={{ delay: 3000 }}
                        loop={true}
                        modules={[Navigation]}
                        className={`${styles.swiperNetflix} swiperNetflixHori`}
                        breakpoints={{
                            992: {
                                slidesPerView: 5
                            },
                            1600: {
                                slidesPerView: 5
                            }
                        }}

                    >
                        {videos.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className={styles.slideNetflix}
                            >
                                <VideoComponent index={index} videosContents={item} />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default VideosCarruselHori
