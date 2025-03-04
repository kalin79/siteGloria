'use client';
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import VideoBanner from "@/components/videos/Banner"

// Estilos swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from '@/styles/scss/carrusel.module.scss';

const BannerPrincipal = () => {

    return (

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
            <SwiperSlide>
                <div className='bgDegradadoBg'>
                    <div className={styles.infoVideoBox}>
                        <div className={`containerFluid ${styles.containerFluid}`}>
                            <h2 className='misti font-normal'>
                                Jugando para <br />
                                aprender
                            </h2>
                            <h3 className='misti font-light'>
                                Juegos para fortalecer el vínculo <br /> con tus hijos
                            </h3>
                            <div className={styles.infoTecnicaBox}>
                                <div className={styles.startBox}>
                                    <Image src="/start.svg" width={24} height={24} alt='Calificacion' />
                                    <p className='misti font-light'>8.2  |  1245</p>
                                </div>
                                <div className={styles.startBox}>
                                    <Image src="/time.svg" width={24} height={24} alt='Duracion' />
                                    <p className='misti font-light'>Duración: 32 min</p>
                                </div>
                            </div>
                            <div className={styles.buttonBox}>
                                <button>
                                    <span className='poppins font-medium'>Reproducir</span>
                                    <Image src="/playButton.svg" width={22} height={22} alt='Play' />
                                </button>
                                <Link href={`sdsdfsf`} className='buttonBtn'>
                                    <span className='poppins font-medium'>Más información</span>
                                    <Image src="/info.svg" width={32} height={32} alt='Más información' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <VideoBanner />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bgDegradadoBg'>
                    <Image src="/banner2.png" fill className={styles.imageFill} alt='' />
                </div>
            </SwiperSlide>
        </Swiper>


    );
};

export default BannerPrincipal;
