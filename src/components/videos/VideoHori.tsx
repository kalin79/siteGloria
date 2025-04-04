'use client';
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap"; // Importar GSAP

import Image from 'next/image'
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
interface videoParameters {
    index: number,
    videosContents: VideoContent,
}
const VideoHori = ({ index, videosContents }: videoParameters) => {
    const router = useRouter();
    // Referencia al div  que contiene la informacion.
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Estado para almacenar las coodenadas

    // const [hoverPosition, setHoverPosition] = useState<{ top: number, left: number } | null>(null)

    // Timeout para el debouncing

    const hoverTimeout = useRef<NodeJS.Timeout | null>(null)

    // Funcion para manejar el evento de hover con debouncing

    const handleMouseEnter = (index: number, slug: string, marca: string, title: string, video: string) => {

        // limpiar el timeout anterior si existe

        if (hoverTimeout.current) {
            clearTimeout(hoverTimeout.current);
        }

        // Establecer un nuevo timeout

        hoverTimeout.current = setTimeout(() => {
            const card = cardRefs.current[index];
            if (card) {
                // Obtener las coordenadas del div usando getBoundingClientRect()
                const rect = card.getBoundingClientRect();
                console.log(rect);
                mostrarPopUp(rect.top + window.scrollY, rect.left + window.scrollX, rect.width, rect.height, slug, marca, title, video);

            }
        }, 200)

    }

    const handleMouseLeave = () => {
        const divRemove = document.querySelector(".popupVideo");

        if (hoverTimeout.current) {
            clearTimeout(hoverTimeout.current)


        }

        if (divRemove) {
            // divRemove.remove()
            gsap.to(divRemove, {
                scale: 0, // Escala inicial (0 = completamente pequeño)
                opacity: 0, // Opacidad inicial (0 = completamente transparente)
                duration: 0.5, // Duración de la animación
                ease: "power2.out", // Curva de easing
                onComplete: () => divRemove.remove()
            });

        }





        // setHoverPosition(null);

    }

    const handleClickViewVideo = (slug: string, marca: string) => {
        router.push(`/${marca}/video/${slug}`)
    }

    const mostrarPopUp = (top: number, left: number, width: number, height: number, slug: string, marca: string, title: string, video: string) => {
        console.log(top, left);
        document.querySelectorAll(".popupVideo").forEach(el => el.remove());
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

        divContenedorVideo.style.top = (top - 10) + "px";
        divContenedorVideo.style.left = left + "px";
        divContenedorVideo.style.width = width + "px";
        divContenedorVideo.style.height = height + "px";

        divContenedorVideo.addEventListener("mouseleave", handleMouseLeave);

        divContenedorVideo.addEventListener("click", () => { handleClickViewVideo(slug, marca) });

        document.body.appendChild(divContenedorVideo);

        // Animación con GSAP
        gsap.from(divContenedorVideo, {
            scale: 0, // Escala inicial (0 = completamente pequeño)
            opacity: 0, // Opacidad inicial (0 = completamente transparente)
            duration: 0.5, // Duración de la animación
            ease: "power2.out", // Curva de easing
            // onComplete: () => setActivePopupVideo(true)
        });
    }

    // Limpiar event listeners y timeouts al desmontar el componente
    useEffect(() => {
        return () => {
            if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
            document.querySelectorAll(".popupVideo").forEach(el => el.remove());
        };
    }, []);
    return (
        <div
            ref={(el) => { (cardRefs.current[index] = el) }}
            onMouseEnter={() => handleMouseEnter(index, videosContents.slug, videosContents.marca, videosContents.title, videosContents.video)}
            className={`${styles.cardVideoBox} `}
            onClick={() => handleClickViewVideo(videosContents.slug, videosContents.marca)}
        >
            <div className={styles.cardBody}>
                <Image src={videosContents.imagen} className={styles.videoBoxImg} fill alt='Bonle :: Loncheras divertidas y nutritivas para tus pequeños' />
            </div>
            <div className={styles.cardFooter}>
                <Image src='/play.svg' className={styles.playIcon} width={34} height={34} alt='Bonle :: Reproducir el video' />
                <div className={`${styles.etiquetaCard} ${videosContents.colorMarca}`}>
                    {videosContents.marca}
                </div>
                <h3 className='mitsi font-medium'>
                    <span>{videosContents.title}</span>
                    <span className={`${styles.numberBox} mitsi font-bold`}>{index + 1}</span>
                </h3>
            </div>
        </div>
    )
}

export default VideoHori
