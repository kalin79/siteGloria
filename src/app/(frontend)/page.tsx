import BannerPrincipalComponent from "@/components/home/BannerPrincipal";
import MarcasComponent from "@/components/home/Marcas";
import VideosComponent from "@/components/home/VideosCarrusel";
import VideosHoriComponent from "@/components/home/VideosCarruselHori";
import CampanasComponent from "@/components/home/Campanas";
import ProductsComponent from "@/components/home/Productos";
import NoticiasComponent from "@/components/home/Noticias";
import PropositoComponet from "@/components/somos/Proposito";
import LecherosComponet from "@/components/banners/Lecheros";

export default function Home() {
    return (
        <>
            <BannerPrincipalComponent />
            <div className="containerHomeMain">
                <MarcasComponent />
                <VideosComponent />
                <CampanasComponent titularCampana="Gloria" subtitularCampana="Videos que inspiran" />
                <VideosHoriComponent />
                <ProductsComponent />
                <PropositoComponet />
                <NoticiasComponent />
                <LecherosComponet />
            </div>

        </>
    );
}
