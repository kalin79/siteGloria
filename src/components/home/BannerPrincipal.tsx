'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import BannerComponent from "@/components/banners/Banner"

// Estilos swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    logoMarca: string;
}
const BannerPrincipal = () => {

    const banners: BannerInterface[] = [
        {
            title: 'Jugando para aprender',
            subTitle: 'Juegos para fortalecer el vínculo con tus hijos',
            idMarca: 1,
            marca: 'Bonle',
            slugMarca: 'bonle',
            slug: 'lonceras-divertidas-y-nutricionales-para-tus-pequenos',
            type: 'video',
            multimedia: '/videocorto.mp4',
            like: '8.2  |  1245',
            duracion: '32 min',
            logoMarca: 'gloria.svg',
        },
        {
            title: 'Esta es una <br />prueba',
            subTitle: 'ok esta bien',
            idMarca: 1,
            marca: 'Gloria',
            slugMarca: 'gloria',
            slug: 'como-potenciar-el-aprendizaje-de-tus-hijos-desde-casa',
            type: 'imagen',
            multimedia: '/banner2.png',
            like: '',
            duracion: '',
            logoMarca: 'gloria.svg',
        },

    ]

    return (
        <>

            <Swiper
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                effect={'fade'}
                spaceBetween={30}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                // autoplay={{ delay: 8000 }}
                className={`${styles.bannerCarrusel} bannerCarruselHome`}

            >
                {banners.map((item, index) => (
                    <SwiperSlide
                        key={index}
                    >
                        <BannerComponent multimediaContents={item} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </>


    );
};

export default BannerPrincipal;
