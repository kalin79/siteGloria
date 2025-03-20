'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardComponent from "@/components/productos/Card";
import styles from '@/styles/scss/productos.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProductContent {
    title: string;
    presentacion: string;
    idMarca: number;
    marca: string;
    slug: string;
    imagen: string;
    receta: boolean;
}
const Relacionados = () => {
    const products: ProductContent[] = [
        {
            title: 'Leche Gloria UHT Entera',
            presentacion: 'Presentación caja de 1 L',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'leche-gloria-uht-entera',
            imagen: '/p1.png',
            receta: true
        },
        {
            title: 'LECHE EN POLVO INSTANTÁNEA',
            presentacion: 'Presentación botella de 946 mL',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'leche-en-polvo-instantanea',
            imagen: '/p2.png',
            receta: false
        },
        {
            title: 'BONLÉ UHT SIN LACTOSA',
            presentacion: 'Presentación caja de 1 L',
            idMarca: 2,
            marca: 'BONLE',
            slug: 'bonle-uht-sin-lactosa',
            imagen: '/p3.png',
            receta: true
        },
        {
            title: 'Leche Gloria UHT Entera',
            presentacion: 'Presentación caja de 1 L',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'leche-gloria-uht-entera',
            imagen: '/p1.png',
            receta: true
        },
        {
            title: 'LECHE EN POLVO INSTANTÁNEA',
            presentacion: 'Presentación botella de 946 mL',
            idMarca: 1,
            marca: 'Gloria',
            slug: 'leche-en-polvo-instantanea',
            imagen: '/p2.png',
            receta: false
        },
        {
            title: 'BONLÉ UHT SIN LACTOSA',
            presentacion: 'Presentación caja de 1 L',
            idMarca: 2,
            marca: 'BONLE',
            slug: 'bonle-uht-sin-lactosa',
            imagen: '/p3.png',
            receta: true
        },

    ]
    return (
        <div className={styles.productosRelacionadosContainer}>
            <h2 className='mitsi font-light'>
                Otros productos que podrían <br />
                interesarte
            </h2>
            <h3 className='mitsi font-light'>
                200 ml de producto contiene:
            </h3>
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
                        {products.map((item, index) => (
                            <SwiperSlide
                                style={{ width: "auto" }}
                                key={index}
                            >
                                <CardComponent key={index} productContents={item} />

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Relacionados
