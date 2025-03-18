'use client'
import { useState } from "react";
import VideoComponent from "@/components/videos/CardSimple";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '@/styles/scss/tabs.module.scss';
import stylesVideo from '@/styles/scss/videos.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
interface VideoContent {
    title: string;
    idMarca: number;
    marca: string;
    slug: string;
    imagen: string;
    video: string;
    colorMarca: string;
    duracion: string;
    like: number;
}
const Tabs = () => {
    const videos: VideoContent[] = [
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 1,
            marca: 'Bonle',
            slug: 'lonceras-divertidas-y-nutricionales-para-tus-pequenos',
            imagen: '/videoimg.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1',
            duracion: '11:34',
            like: 245
        },
        {
            title: 'Cómo potenciar el aprendizaje de tus hijos desde casa',
            idMarca: 2,
            marca: 'ActiBio',
            slug: 'como-potenciar-el-aprendizaje-de-tus-hijos-desde-casa',
            imagen: '/videoimg2.png',
            video: '/videocorto.mp4',
            colorMarca: 'color2',
            duracion: '01:05',
            like: 245
        },
        {
            title: 'Potencia tu actividad física con estos consejos PRO',
            idMarca: 3,
            marca: 'PRO',
            slug: 'potencia-tu-actividad-fisica-con-estos-consejos-pro',
            imagen: '/videoimg3.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3',
            duracion: '01:05',
            like: 245
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 4,
            marca: 'PRO',
            slug: 'loncheras-divertidas-y-nutritivas-para-tus-pequenos',
            imagen: '/videoimg.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3',
            duracion: '01:05',
            like: 245
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 5,
            marca: 'Bonle',
            slug: 'loncheras-divertidas-y-nutritivas-para-tus-pequenos',
            imagen: '/videoimg3.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1',
            duracion: '01:05',
            like: 245
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 1,
            marca: 'Bonle',
            slug: 'lonceras-divertidas-y-nutricionales-para-tus-pequenos',
            imagen: '/videoimg.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1',
            duracion: '01:05',
            like: 245
        },
        {
            title: 'Cómo potenciar el aprendizaje de tus hijos desde casa',
            idMarca: 2,
            marca: 'ActiBio',
            slug: 'como-potenciar-el-aprendizaje-de-tus-hijos-desde-casa',
            imagen: '/videoimg2.png',
            video: '/videocorto.mp4',
            colorMarca: 'color2',
            duracion: '01:05',
            like: 245
        },
        {
            title: 'Potencia tu actividad física con estos consejos PRO',
            idMarca: 3,
            marca: 'PRO',
            slug: 'potencia-tu-actividad-fisica-con-estos-consejos-pro',
            imagen: '/videoimg3.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3',
            duracion: '00:35',
            like: 245
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 4,
            marca: 'PRO',
            slug: 'loncheras-divertidas-y-nutritivas-para-tus-pequenos',
            imagen: '/videoimg.png',
            video: '/videocorto.mp4',
            colorMarca: 'color3',
            duracion: '00:05',
            like: 245
        },
        {
            title: 'Loncheras divertidas y nutritivas para tus pequeños',
            idMarca: 5,
            marca: 'Bonle',
            slug: 'loncheras-divertidas-y-nutritivas-para-tus-pequenos',
            imagen: '/videoimg2.png',
            video: '/videocorto.mp4',
            colorMarca: 'color1',
            duracion: '01:05',
            like: 245
        },
    ]
    const [activeTab, setActiveTab] = useState(0);
    return (
        <>
            <div className={styles.tabsContainer}>
                <div className={styles.headerContainer}>
                    <div
                        className={`mitsi font-normal ${0 === activeTab ? styles.active : ''}`}
                        onClick={() => setActiveTab(0)}
                    >
                        SUGERENCIAS
                    </div>
                    <div
                        className={`mitsi font-normal ${1 === activeTab ? styles.active : ''}`}
                        onClick={() => setActiveTab(1)}
                    >DETALLES</div>
                </div>
                <div className={styles.bodyContainer}>
                    <div className={`${0 === activeTab ? styles.activeContent : ''}`}>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={"auto"} // Permite ajustar el tamaño según el contenido
                            freeMode={true} // Activa el desplazamiento libre
                            grabCursor={true} // Muestra el cursor tipo "agarre"
                            style={{ overflowX: "auto" }} // Permite el scroll horizontal
                            className={`swiperScrollHorizontal ${stylesVideo.swiperScrollHorizontalVideo}`}
                        >
                            {videos.map((item, index) => (
                                <SwiperSlide
                                    style={{ width: "auto" }}
                                    key={index}
                                >
                                    <VideoComponent videosContents={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className={`${1 === activeTab ? styles.activeContent : ''}`}>
                        <div className={styles.infoBox}>
                            <div>
                                <h1 className="mitsi font-normal">Cómo potenciar el aprendizaje de tus hijos desde casa</h1>
                                <div className={`${styles.descriptionBox} mitsi font-normal`}>
                                    <p className="mitsi font-normal">
                                        Descubre estrategias efectivas para mejorar el aprendizaje de tus hijos desde casa. En este video, te brindamos herramientas prácticas, consejos pedagógicos y técnicas para fomentar su autonomía, concentración y motivación en el estudio.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h3 className="mitsi font-normal">DURACIÓN: <span>02 min 23 seg</span></h3>
                                <h3 className="mitsi font-normal">FECHA DE ESTRENO: <span>MAY 2024</span></h3>
                                <h3 className="mitsi font-normal">MARCA AUSPICIADORA: <span>GLORIA</span></h3>
                                <h3 className="mitsi font-normal">CLASIFICACIÓN: <span>+18</span></h3>
                                <div className={styles.elencoContainer}>
                                    <h3 className="mitsi font-normal">ELENCO:</h3>
                                    <p className="mitsi font-normal">Mario Mendez</p>
                                    <p className="mitsi font-normal">Lucia Pérez</p>
                                    <p className="mitsi font-normal">Gabriel Bueno </p>
                                    <p className="mitsi font-normal">Luisa Reyes</p>
                                </div>
                                <div className={styles.autorBox}>
                                    <h3 className="mitsi font-normal">AUTOR:</h3>
                                    <div className={styles.autorList}>
                                        <Image src='/autor.png' width={58} height={58} alt="" />
                                        <div>
                                            <h2>Diego Beltrán Rojas</h2>
                                            <h4>PSICÓLOGO DE FAMILIA</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tabs
