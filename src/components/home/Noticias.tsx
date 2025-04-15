'use client';
import Link from 'next/link'
import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from 'swiper/react';
import CardComponent from "@/components/noticias/Card";

// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '@/styles/scss/noticias.module.scss';
interface NoticiaInterface {
    title: string;
    slug: string;
    imagen: string;
}
const Noticias = () => {
    const router = useRouter();
    const noticias: NoticiaInterface[] = [
        {
            title: 'Ganadería: orgullo y unidad familiar que perdura en el tiempo.',
            slug: 'ganaderia-orgullo-y-unidad-familiar-que-perdura-en-el-tiempo',
            imagen: '/n1.png',
        },
        {
            title: 'Renuevan certificaciones BASC y OEA',
            slug: 'renuevan-certificaciones-basc-y-oea',
            imagen: '/n2.png',
        },
        {
            title: 'Leche Gloria regstra incremento de ventas en 32.9% en el 2024',
            slug: 'leche-gloria-regstra-incremento-de-ventas-en-329-en-el-2024',
            imagen: '/n3.png',
        },
        {
            title: 'Ganadería: orgullo y unidad familiar que perdura en el tiempo.',
            slug: 'ganaderia-orgullo-y-unidad-familiar-que-perdura-en-el-tiempo',
            imagen: '/n4.png',
        },
        {
            title: 'Renuevan certificaciones BASC y OEA',
            slug: 'renuevan-certificaciones-basc-y-oea',
            imagen: '/n2.png',
        },
        {
            title: 'Leche Gloria regstra incremento de ventas en 32.9% en el 2024',
            slug: 'leche-gloria-regstra-incremento-de-ventas-en-329-en-el-2024',
            imagen: '/n3.png',
        },

    ]
    const handleClickViewVideo = (slug: string) => {
        router.push(`/noticias/${slug}`)
    }
    return (
        <div className={`containerFluidLeft bgAzul2`}>
            <div className={styles.blogHomeContent}>
                <div className={styles.blogHeader}>
                    <h2 className='misti font-light'>
                        Noticias que Inspiran: <br />
                        <span className='font-normal'>
                            Historias y Actualidad <br />
                            de Gloria
                        </span>
                    </h2>
                    <Link href={`/noticias`} className='buttonBtn' title='Ver todas las noticias'>Ver todas las noticias</Link>
                </div>
                <div className={styles.blogBody}>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={"auto"} // Permite ajustar el tamaño según el contenido
                        freeMode={true} // Activa el desplazamiento libre
                        grabCursor={true} // Muestra el cursor tipo "agarre"
                        style={{ overflowX: "auto" }} // Permite el scroll horizontal
                        className={`swiperScrollHorizontal`}
                    >
                        {noticias.map((item, index) => (
                            <SwiperSlide
                                style={{ width: "auto" }}
                                key={index}
                            >
                                <CardComponent
                                    noticiaContents={item}
                                    onClick={() => handleClickViewVideo(item.slug)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Noticias
