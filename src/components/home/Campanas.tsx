'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import RectangularComponent from "@/components/campanas/Rectangular";
import styles from '@/styles/scss/campanas.module.scss';

interface VideoContentCampana {
    title: string;
    subTitle: string;
    idMarca: number;
    marca: string;
    slug: string;
    imagen: string;
    video: string;
}

interface campanaParameters {
    titularCampana: string;
    subtitularCampana: string;
}

const Campanas = ({ titularCampana, subtitularCampana }: campanaParameters) => {
    const videos: VideoContentCampana[] = [
        {
            title: 'Lo estás haciendo bien',
            subTitle: 'Campaña 2024',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'lo-estas-haciendo-bien',
            imagen: '/campa1.png',
            video: '/videocorto.mp4',
        },
        {
            title: 'Mamá que nutre, mamá en su gloria',
            subTitle: 'Campaña 2024',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'mama-que-nutre-mama-en-su-gloria',
            imagen: '/campa2.png',
            video: '/videocorto.mp4',
        },
        {
            title: 'Campaña navideña “Todos vuelven”',
            subTitle: 'Campaña 2024',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'campana-navidena-todos-vuelven',
            imagen: '/campa3.png',
            video: '/videocorto.mp4',
        },
        {
            title: 'Lo estás haciendo bien',
            subTitle: 'Campaña 2024',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'lo-estas-haciendo-bien',
            imagen: '/campa1.png',
            video: '/videocorto.mp4',
        },
        {
            title: 'Mamá que nutre, mamá en su gloria',
            subTitle: 'Campaña 2024',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'mama-que-nutre-mama-en-su-gloria',
            imagen: '/campa2.png',
            video: '/videocorto.mp4',
        },
        {
            title: 'Campaña navideña “Todos vuelven”',
            subTitle: 'Campaña 2024',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'campana-navidena-todos-vuelven',
            imagen: '/campa3.png',
            video: '/videocorto.mp4',
        },
    ]
    return (
        <>
            <div className={`containerFluid`}>
                <div className={`videosHomeTitularBox`}>
                    <h2 className="mitsi  font-normal">Campañas {titularCampana}: <span className="mitsi font-extralight">{subtitularCampana}</span></h2>
                </div>
            </div>
            <div className={styles.campanaListContent}>
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
                                slidesPerView: 3
                            },
                            1600: {
                                slidesPerView: 3
                            }
                        }}

                    >
                        {videos.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className={styles.slideNetflix}
                            >
                                <RectangularComponent videosContents={item} />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Campanas
