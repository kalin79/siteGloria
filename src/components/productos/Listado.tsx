'use client';
import Image from 'next/image';
import CardComponent from "@/components/productos/Card";
import styles from '@/styles/scss/productos.module.scss';
interface ProductContent {
    title: string;
    presentacion: string;
    idMarca: number;
    marca: string;
    slug: string;
    imagen: string;
    receta: boolean;
}
const Listado = () => {
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
        <div className={`containerFluid `}>
            <div className={`${styles.containerflex2}`}>
                <div>
                    <h3 className='misti font-medium'>MUNDO GLORIA</h3>
                    <h2 className='misti font-light'>
                        Explora nuestra <br />selección de <br /><span className='font-medium'>productos lácteos:</span>
                    </h2>

                </div>
                <div>
                    <div className={`${styles.headerProducts}`}>
                        <div>
                            <p className='font-light misti'>
                                Nutritivos, deliciosos y perfectos para toda la familia. <br />Desliza y encuentra tus favoritos.
                            </p>
                            <div className={`${styles.chefContent}`}>
                                <Image src="/iconChef.svg" width={42} height={47} alt='Receta' />
                                <p className='font-light misti'>
                                    Producto <br />con receta
                                </p>
                            </div>

                        </div>
                        {/* <div>
                            <Link href={`/marca/producto/gloria`} className='buttonBtn' title='Ir a productos'>Ver todos los productos</Link>
                        </div> */}
                    </div>

                </div>

            </div>
            <div className={styles.listadoProductoMarcaContainer}>
                <div className={styles.filtroProductosBox}>
                    <p className='poppins font-medium'>Filtrar productos</p>
                    <Image src="/filtro.svg" width={32} height={32} alt='Filtrado Productos' />
                </div>
                <div className={styles.viewProducts}>
                    {products.map((item, index) => (
                        <CardComponent key={index} productContents={item} />
                    ))}
                </div>
                <div className={styles.centerPaginado}>
                    <div className={styles.paginadoBox}>
                        <button>
                            <Image src="/atras.svg" width={18} height={9} alt='Atras' />
                        </button>
                        <div className={styles.paginadoNumerado}>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                        </div>
                        <button>
                            <Image src="/adelante.svg" width={18} height={9} alt='Atras' />
                        </button>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Listado
