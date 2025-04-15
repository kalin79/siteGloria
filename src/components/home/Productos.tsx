'use client';
import Image from 'next/image'
import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import VideoBanner from "@/components/videos/Banner"
import CardComponent from "@/components/productos/Card";
import dynamic from "next/dynamic";

// Carga react-select sin SSR
const Select = dynamic(() => import("react-select"), { ssr: false });

// Estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from '@/styles/scss/productos.module.scss';
type OptionType = {
    value: string;
    label: string;
};

interface ProductContent {
    title: string;
    presentacion: string;
    idMarca: number;
    marca: string;
    slug: string;
    imagen: string;
    receta: boolean;
}

const Productos = () => {
    const router = useRouter();
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
    const options: OptionType[] = [
        { value: "Gloria", label: "Gloria" },
        { value: "Pro", label: "Pro" },
        { value: "ActiBio", label: "ActiBio" },
        { value: "Bonle", label: "Bonle" },
        { value: "Battimix", label: "Battimix" },
    ];
    const handleChange = (selectedOption: OptionType | null) => {
        console.log("Selected:", selectedOption);
    };
    const handleClickViewVideo = (slug: string, marca: string) => {
        router.push(`/${marca}/producto/${slug}`)
    }
    return (
        <div className={`containerFluidLeft ${styles.containerFluidLeft}`}>
            <div className={`${styles.containerflex}`}>
                <div>
                    <h3 className='misti font-medium'>NUESTROS PRODUCTOS</h3>
                    <h2 className='misti font-light'>
                        Explora nuestra selección de <span className='font-medium'>productos lácteos:</span>
                    </h2>
                    <p className='font-light misti'>
                        Nutritivos, deliciosos y perfectos para toda la familia. Desliza y encuentra tus favoritos.
                    </p>
                    <div className={`${styles.chefContent}`}>
                        <Image src="/iconChef.svg" width={42} height={47} alt='Receta' />
                        <p className='font-light misti'>
                            Producto <br />con receta
                        </p>
                    </div>
                </div>
                <div>
                    <div className={`${styles.headerProducts}`}>
                        <div>
                            <p className='misti font-normal'>
                                Filtrar productos por marca:
                            </p>
                            <Select
                                inputId="searchableProductHome"
                                options={options}
                                onChange={(newValue) => handleChange(newValue as OptionType | null)}
                                isSearchable={true}
                                placeholder="Buscar..."
                                classNamePrefix="customSelectHomeProducts"
                            />
                        </div>
                        {/* <div>
                            <Link href={`/marca/producto/gloria`} className='buttonBtn' title='Ir a productos'>Ver todos los productos</Link>
                        </div> */}
                    </div>
                    <div className={`${styles.bodyProducts}`}>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={"auto"} // Permite ajustar el tamaño según el contenido
                            freeMode={true} // Activa el desplazamiento libre
                            grabCursor={true} // Muestra el cursor tipo "agarre"
                            style={{ overflowX: "auto" }} // Permite el scroll horizontal
                            className={`swiperScrollHorizontal`}
                        >
                            {products.map((item, index) => (
                                <SwiperSlide
                                    style={{ width: "auto" }}
                                    key={index}
                                >
                                    <CardComponent
                                        productContents={item}
                                        onClick={() => handleClickViewVideo(item.slug, item.marca)}
                                    />
                                </SwiperSlide>
                            ))}



                        </Swiper>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Productos
