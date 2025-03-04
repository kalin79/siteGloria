import BannerPrincipalComponent from "@/components/home/BannerPrincipal";
import MarcasComponent from "@/components/home/Marcas";
import VideosComponent from "@/components/home/VideosCarrusel";

export default function Home() {
    return (
        <>
            <BannerPrincipalComponent />
            <div className="containerHomeMain">
                <MarcasComponent />
                <VideosComponent />
                <VideosComponent />
            </div>

        </>
    );
}
