import BannerPrincipalComponent from "@/components/home/BannerPrincipal";
import MarcasComponent from "@/components/home/Marcas";
import VideosComponent from "@/components/home/VideosCarrusel";
import VideosHoriComponent from "@/components/home/VideosCarruselHori";
import CampanasComponent from "@/components/home/Campanas";
import ProductsComponent from "@/components/home/Productos";
import NoticiasComponent from "@/components/home/Noticias";
import SuscribeteComponent from "@/components/suscribete/Formulario";
import FooterComponent from "@/components/footer/Footer";
export default function Home() {
    return (
        <>
            <BannerPrincipalComponent />
            <div className="containerHomeMain">
                <MarcasComponent />
                <VideosComponent />
                <CampanasComponent />
                <VideosHoriComponent />
                <ProductsComponent />
                <NoticiasComponent />
                <SuscribeteComponent />
                <FooterComponent />
            </div>

        </>
    );
}
