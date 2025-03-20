'use client'
import { useState } from "react";
// import { usePathname, useSearchParams } from "next/navigation";
import Image from 'next/image';

import styles from '@/styles/scss/tabs.module.scss';
const Tabs = () => {
    // const pathname = usePathname(); // Obtiene la ruta actual (ej: "/productos")
    // const searchParams = useSearchParams(); // Obtiene los query params (ej: "?id=123")

    const fullURL = typeof window !== "undefined" ? window.location.href : "";

    const [activeTab, setActiveTab] = useState(0);
    const handleShare = (socialMedia: string) => {
        let shareUrl = "";

        switch (socialMedia) {
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullURL)}`;
                break;
            // case "twitter":
            //     shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            //     break;
            case "tiktok":
                shareUrl = "https://www.tiktok.com/@tuusuario"; // Cambia por tu perfil o contenido
                break;

            default:
                return;
        }

        window.open(shareUrl, "_blank", "width=600,height=400");
    };
    const handlePrint = () => {
        window.print();
    };
    return (
        <>
            <div className={styles.tabsContainer}>
                <div className={styles.headerContainer}>
                    <div
                        className={`mitsi font-normal ${0 === activeTab ? styles.active : ''}`}
                        onClick={() => setActiveTab(0)}
                    >
                        DESCRIPCIÓN
                    </div>
                    <div
                        className={`mitsi font-normal ${1 === activeTab ? styles.active : ''}`}
                        onClick={() => setActiveTab(1)}
                    >INGREDIENTES</div>
                    <div
                        className={`mitsi font-normal ${2 === activeTab ? styles.active : ''}`}
                        onClick={() => setActiveTab(2)}
                    >INFORMACIÓN NUTRICIONAL</div>
                    <div
                        className={`mitsi font-normal ${3 === activeTab ? styles.active : ''}`}
                        onClick={() => setActiveTab(3)}
                    >PRODUCTO CON RECETA</div>
                </div>
                <div className={styles.bodyContainer}>
                    {
                        (0 === activeTab) && (
                            <div className={`${0 === activeTab ? styles.activeContent : ''}`}>
                                <div className={styles.infoBox2}>
                                    <div>
                                        <div className={styles.imageBox}>
                                            <Image src='/photo.png' fill alt="" />
                                        </div>
                                    </div>
                                    <div className={styles.spaceColumn}>
                                        <h2 className="mitsi font-normal">La leche que prefiere el Perú</h2>
                                        <p className="mitsi font-normal">
                                            Las innovaciones que han sido aplicadas en la empresa, le han permitido lograr grandes ventajas y oportunidades convirtiéndose en un mercado muy grande con un compromiso muy grande. Todo gracias a la inverción en tecnología e infraestructura adecuadas. El esfuerzo de sus trabajadores, la cultura y los valores compartidos son los que les permiten integrar nociones de calidad, servicio y conservación para sus consumidores.
                                        </p>
                                        <h2 className="mitsi font-normal">Enriquecida con nutrientes</h2>
                                        <p className="mitsi font-normal">
                                            ¡Lista para tomar! No es necasario mezclar esta leche con agua, lo que hará que aproveches mejor las vitaminas A, C y D que contiene. También es una de las fuentes de calcio más destacadas por lo que te ayuda a mantener la masa ósea.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    {
                        (1 === activeTab) && (
                            <div className={`${1 === activeTab ? styles.activeContent : ''}`}>
                                <div className={styles.infoBox3}>
                                    <div>
                                        <h2 className="mitsi font-normal">Ingredientes</h2>
                                        <p className="mitsi font-normal">
                                            Leche cruda, Estabilizador hidrogenofosfato disódico (sin 339 ii), Vitamina A, Vitamina D.
                                        </p>
                                        <p>
                                            Elaborado en instalaciones donde se procesan productos a base de: gluten (avena) y soya.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    {
                        (2 === activeTab) && (
                            <div className={`${2 === activeTab ? styles.activeContent : ''}`}>
                                <div className={`${styles.infoBox3} ${styles.full}`}>
                                    <div>
                                        <h2 className="mitsi font-normal">
                                            Porción: 200 ml : <br />
                                            Porciones por envase:
                                        </h2>
                                        <div className="table-responsive tableResponsiveNutricional">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Valores medios </th>
                                                        <th scope="col">Por cada 100 mg/ml</th>
                                                        <th scope="col">Por cada 1 porción</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Energía (Kcal)</td>
                                                        <td>118</td>
                                                        <td>238</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Proteínas (g)</td>
                                                        <td>2.9</td>
                                                        <td>5.8</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Grasas totales (g)</td>
                                                        <td>3.1</td>
                                                        <td>6.2</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hidratos de carbono disponibles (g)</td>
                                                        <td>4.8</td>
                                                        <td>9.6</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    {
                        (3 === activeTab) && (
                            <div className={`${3 === activeTab ? styles.activeContent : ''}`}>
                                <div className={styles.infoBox4}>
                                    <div>
                                        <div className={styles.imageBox}>
                                            <Image src='/receta.png' fill alt="" />
                                        </div>
                                    </div>
                                    <div className={styles.spaceColumn}>
                                        <div className={styles.autorBox}>
                                            <div>
                                                <h2 className="mitsi font-normal">Arroz con leche</h2>
                                                <div className={styles.autorData}>
                                                    <Image src='/chef.png' width={52} height={52} alt="" />
                                                    <h5>Por Chef Elena Torres</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <div onClick={() => handleShare("facebook")}>
                                                    <Image src='/share.svg' width={82} height={82} alt="" />
                                                    <h4>Compartir</h4>
                                                </div>
                                                <div onClick={handlePrint}>
                                                    <Image src='/print.svg' width={82} height={82} alt="" />
                                                    <h4>Imprimir</h4>
                                                </div>
                                            </div>

                                        </div>
                                        <h3 className="mitsi font-normal">Ingredientes</h3>
                                        <ul>
                                            <li>
                                                3 1/2 Tazas de Agua
                                            </li>
                                            <li>
                                                1 Bastón de Canela
                                            </li>
                                            <li>
                                                2 Clavos de Olor
                                            </li>
                                            <li>
                                                1 Taza de Arroz Largo
                                            </li>
                                            <li>
                                                1/2 Cucharadita de Esencia de Vainilla
                                            </li>
                                            <li>
                                                1 Lata de leche gloria
                                            </li>
                                            <li>
                                                1 Lata de leche condensada gloria
                                            </li>
                                            <li>
                                                1/3 Taza de Pasas
                                            </li>
                                            <li>
                                                1 Cucharadita de Canela en polvo
                                            </li>
                                        </ul>

                                        <h3 className="mitsi font-normal">Instrucciones</h3>
                                        <ul className={styles.vinetasNumber}>
                                            <li>
                                                Colocar en una olla el agua, luego agregar la canela y el clavo de olor. Una vez el agua empiece a hervir, retirar la canela, el clavo de olor y añadir el arroz, previamente lavado. Dejar cocinando a fuego medio para que se cocine.
                                            </li>
                                            <li>
                                                Mover con la ayuda de un tenedor para evitar romper los granos de arroz. Cuando esté cocido y el agua se haya consumido, retirar la canela y el clavo de olor.
                                            </li>
                                            <li>
                                                Echar la esencia de vainilla, la lata de leche GLORIA y la leche condensada GLORIA.
                                            </li>
                                            <li>
                                                Cocinar a fuego medio entre a 5 a 8 minutos. Hasta que veamos que ya no está tan ligera la consistencia.
                                            </li>
                                            <li>
                                                Colocar pasas, decorar con canela al gusto y servir.
                                            </li>
                                        </ul>
                                        <h3 className="mitsi font-normal">Información nutricional</h3>
                                        <div className={styles.nutricionalInfocontainer}>
                                            <div>
                                                <h2>225.6 kcal</h2>
                                                <p>Calorias</p>
                                            </div>
                                            <div>
                                                <h2>39.2 g</h2>
                                                <p>Carboidratos</p>
                                            </div>
                                            <div>
                                                <h2>4.9 g</h2>
                                                <p>Grasas</p>
                                            </div>
                                            <div>
                                                <h2>1.2 g</h2>
                                                <p>Fibras</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default Tabs
