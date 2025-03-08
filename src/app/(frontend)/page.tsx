import BannerPrincipalComponent from "@/components/home/BannerPrincipal";
import MarcasComponent from "@/components/home/Marcas";
import VideosComponent from "@/components/home/VideosCarrusel";
import VideosHoriComponent from "@/components/home/VideosCarruselHori";
import CampanasComponent from "@/components/home/Campanas";
export default function Home() {
    return (
        <>
            <BannerPrincipalComponent />
            <div className="containerHomeMain">
                <MarcasComponent />
                <VideosComponent />
                <CampanasComponent />
                <VideosHoriComponent />
            </div>

        </>
    );
}
