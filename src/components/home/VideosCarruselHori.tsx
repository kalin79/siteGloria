'use client';
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap"; // Importar GSAP
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
    const router = useRouter();
    // Referencia al div  que contiene la informacion.
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    let isAnimating = false;
    const tlCard = gsap.timeline({ paused: false });
    // Funcion para manejar el evento de hover con debouncing

    const handleMouseEnter = (index: number, slug: string, marca: string, title: string, video: string) => {
        const card = cardRefs.current[index];

        // solo animamos sino existe otra animacion activa 
        if (!tlCard.isActive() && !isAnimating) {
            isAnimating = true; //bloqueamos nuevas animaciones
            tlCard.clear(); // limpiar animaciones previas
            if (card) {
                const rect = card.getBoundingClientRect();
                document.querySelectorAll(".popupVideo").forEach(el => el.remove());
                mostrarPopUp(rect.top + window.scrollY, rect.left + window.scrollX, rect.width, rect.height, slug, marca, title, video);
            } else {
                isAnimating = false;
            }

        } else {
            if ((document.querySelector(".popupVideo")) && !tlCard.isActive()) {
                isAnimating = false;
                document.querySelectorAll(".popupVideo").forEach(el => el.remove());
            }
        }

    }



    const handleMouseLeave = () => {

        const divRemove = document.querySelector(".popupVideo");
        if (divRemove) {
            if (!tlCard.isActive() && isAnimating) {
                tlCard.clear();
                tlCard.to(divRemove, {
                    scale: 0, // Escala inicial (0 = completamente pequeño)
                    opacity: 0, // Opacidad inicial (0 = completamente transparente)
                    duration: 0.5, // Duración de la animación
                    ease: "power2.out", // Curva de easing
                    onComplete: () => {
                        divRemove.remove();
                        isAnimating = false;
                    }
                });
                tlCard.play();
            };
        }


    }

    const handleClickViewVideo = (slug: string, marca: string) => {
        router.push(`/${marca}/video/${slug}`)
    }

    const mostrarPopUp = (top: number, left: number, width: number, height: number, slug: string, marca: string, title: string, video: string) => {

        const divContenedorVideo = document.createElement("div");
        const divVideo = document.createElement("div");
        const divControles = document.createElement("div");
        const videoElement = document.createElement("video");
        const divTitular = document.createElement("div");
        const altoContenido = 80;
        const divFlexControlador = document.createElement("div");
        const imagenPlay = document.createElement('img');
        // Div para contenedor del video

        videoElement.src = video;
        videoElement.controls = false;
        videoElement.autoplay = true;
        videoElement.muted = true;

        divTitular.textContent = title;
        divTitular.classList.add("titularDiv");


        divVideo.classList.add("videoPlayView");
        divVideo.appendChild(videoElement);
        divVideo.appendChild(divTitular);
        divVideo.style.height = (height - altoContenido) + "px";
        divContenedorVideo.classList.add("popupVideo");
        divContenedorVideo.appendChild(divVideo);


        // Div para el contenedor del controlador de video

        divControles.style.height = altoContenido + "px";
        divControles.classList.add("videoControladorPopup");
        divContenedorVideo.appendChild(divControles);

        divFlexControlador.classList.add("controladorFlex");
        divControles.appendChild(divFlexControlador);

        imagenPlay.src = "/play.svg";
        imagenPlay.alt = 'Ir al Video'; // Texto alternativo
        imagenPlay.width = 42; // Ancho de la imagen
        imagenPlay.height = 42; // Altura de la imagen

        divFlexControlador.appendChild(imagenPlay);

        divContenedorVideo.style.top = top + "px";
        divContenedorVideo.style.left = left + "px";
        divContenedorVideo.style.width = width + "px";
        divContenedorVideo.style.height = height + "px";

        divContenedorVideo.addEventListener("mouseleave", handleMouseLeave);

        divContenedorVideo.addEventListener("click", () => { handleClickViewVideo(slug, marca) });

        document.body.appendChild(divContenedorVideo);

        // Animación con GSAP

        tlCard.from(divContenedorVideo, {
            scale: 0, // Escala inicial (0 = completamente pequeño)
            opacity: 0, // Opacidad inicial (0 = completamente transparente)
            duration: 0.5, // Duración de la animación
            ease: "power2.out", // Curva de easing
            // onComplete: () => setActivePopupVideo(true)
        });
        tlCard.play();
    }

    // Limpiar event listeners y timeouts al desmontar el componente
    useEffect(() => {
        return () => {
            document.querySelectorAll(".popupVideo").forEach(el => el.remove());
        };
    }, []);
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
                            750: {
                                slidesPerView: 3
                            },
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
                                <VideoComponent
                                    ref={(el) => { cardRefs.current[index] = el }}
                                    index={index}
                                    videosContents={item}
                                    onMouseEnter={() => handleMouseEnter(index, item.slug, item.marca, item.title, item.video)}
                                    onMouseMove={() => handleMouseEnter(index, item.slug, item.marca, item.title, item.video)}
                                    onClick={() => handleClickViewVideo(item.slug, item.marca)}
                                />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default VideosCarruselHori
