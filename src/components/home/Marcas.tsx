"use client"
import CardComponent from "@/components/marcas/Card";
import styles from '@/styles/scss/marca.module.scss';

const Marcas = () => {
    return (
        <div className="containerFluid">
            <div className={styles.titularBoxMain}>
                <h3 className="misti font-medium">NUESTROS MUNDOS</h3>
                <h1 className="misti font-light">Cuidamos tu mundo, <span>alimentamos tu vida.</span></h1>
            </div>
            <div className={styles.listadoCard}>
                <CardComponent logosrc="/gloria.svg" slug="gloria" />
                <CardComponent logosrc="/Bonle.png" slug="gloria-bonle" />
                <CardComponent logosrc="/PRO.png" slug="pro" />
                <CardComponent logosrc="/Actibio.png" slug="actibio" />
                <CardComponent logosrc="/Battimix.png" slug="batti-mix" />
            </div>
        </div>
    )
}

export default Marcas
