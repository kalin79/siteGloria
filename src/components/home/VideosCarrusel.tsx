'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import VideoBanner from "@/components/videos/Banner"
import VideoComponent from "@/components/videos/Video";

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
const VideosCarrusel = () => {
    const videos: VideoContent[] = [
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 1,
            marca: 'Bonle',
            slug: 'lonceras-divertidas-y-nutricionales-para-tus-pequenos',
            imagen: '/videoimg.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1'
        },
        {
            title: 'Cómo potenciar el aprendizaje de tus hijos desde casa',
            idMarca: 2,
            marca: 'ActiBio',
            slug: 'como-potenciar-el-aprendizaje-de-tus-hijos-desde-casa',
            imagen: '/videoimg2.png',
            video: '/videocorto.mp4',
            colorMarca: 'color2'
        },
        {
            title: 'Potencia tu actividad física con estos consejos PRO',
            idMarca: 3,
            marca: 'PRO',
            slug: 'potencia-tu-actividad-fisica-con-estos-consejos-pro',
            imagen: '/videoimg3.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3'
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 4,
            marca: 'PRO',
            slug: 'loncheras-divertidas-y-nutritivas-para-tus-pequenos',
            imagen: '/videoimg.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3'
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 5,
            marca: 'Bonle',
            slug: 'loncheras-divertidas-y-nutritivas-para-tus-pequenos',
            imagen: '/videoimg3.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1'
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 1,
            marca: 'Bonle',
            slug: 'lonceras-divertidas-y-nutricionales-para-tus-pequenos',
            imagen: '/videoimg.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1'
        },
        {
            title: 'Cómo potenciar el aprendizaje de tus hijos desde casa',
            idMarca: 2,
            marca: 'ActiBio',
            slug: 'como-potenciar-el-aprendizaje-de-tus-hijos-desde-casa',
            imagen: '/videoimg2.png',
            video: '/videocorto.mp4',
            colorMarca: 'color2'
        },
        {
            title: 'Potencia tu actividad física con estos consejos PRO',
            idMarca: 3,
            marca: 'PRO',
            slug: 'potencia-tu-actividad-fisica-con-estos-consejos-pro',
            imagen: '/videoimg3.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3'
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 4,
            marca: 'PRO',
            slug: 'loncheras-divertidas-y-nutritivas-para-tus-pequenos',
            imagen: '/videoimg.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3'
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 5,
            marca: 'Bonle',
            slug: 'loncheras-divertidas-y-nutritivas-para-tus-pequenos',
            imagen: '/videoimg2.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1'
        },
    ]
    return (
        <>
            <div className={`containerFluid`}>
                <div className={`videosHomeTitularBox`}>
                    <h2 className="mitsi  font-normal">Gloria Contigo: <span className="mitsi font-extralight">Videos que inspiran</span></h2>
                </div>
            </div>
            <div className={styles.videoListContent}>
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
                        className={`${styles.swiperNetflix} swiperNetflix`}
                        breakpoints={{
                            750: {
                                slidesPerView: 3
                            },
                            992: {
                                slidesPerView: 4
                            },
                            1600: {
                                slidesPerView: 6
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

export default VideosCarrusel
