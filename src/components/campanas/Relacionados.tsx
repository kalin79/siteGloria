'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import RectangularComponent from "@/components/campanas/Rectangular";
import styles from '@/styles/scss/campanas.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface VideoContentCampana {
    title: string;
    subTitle: string;
    idMarca: number;
    marca: string;
    slug: string;
    imagen: string;
    video: string;
}
const Relacionados = () => {
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
        <div className={styles.productosRelacionadosContainer}>
            <h3 className='mitsi font-light'>
                CAMPAÑAS GLORIA
            </h3>
            <h2 className='mitsi font-light'>
                Videos que inspiran
            </h2>

            <div className={styles.listaProductosContainer}>
                <div className={styles.viewProducts2}>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={"auto"} // Permite ajustar el tamaño según el contenido
                        freeMode={true} // Activa el desplazamiento libre
                        grabCursor={true} // Muestra el cursor tipo "agarre"
                        style={{ overflowX: "auto" }} // Permite el scroll horizontal
                        className={`swiperScrollHorizontal ${styles.swiperScrollHorizontalVideo}`}
                    >
                        {videos.map((item, index) => (
                            <SwiperSlide
                                style={{ width: "auto" }}
                                key={index}
                            >
                                <RectangularComponent videosContents={item} />

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Relacionados
