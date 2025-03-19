import BannerComponent from "@/components/banners/BannerInterno";
import VideosComponent from "@/components/videos/Carrusel";
import VideosFiltroComponent from "@/components/videos/CarruselMarcaFiltro";
import CampanasComponent from "@/components/home/Campanas";
import ListadoComponent from "@/components/productos/Listado";
interface BannerInternoInterface {
    title: string;
    subTitle: string;
    idMarca: number;
    marca: string;
    logoMarca: string;
    slugMarca: string;
    slug: string;
    type: string; // video o imagen
    multimedia: string;
    like: string;
    duracion: string;
}
export default function Marca() {
    const multimedia: BannerInternoInterface = {
        title: 'Mamá que <br />nutre, mamá <br />en su gloria',
        subTitle: 'Una campaña que celebra el amor y la nutrición que solo una mamá puede dar, con la calidad de Leche Gloria.',
        idMarca: 1,
        marca: 'Gloria',
        logoMarca: 'gloria.svg',
        slugMarca: 'gloria',
        slug: 'mama-que-nutre-mama-en-su-gloria',
        type: 'video', // video o imagen
        multimedia: 'video.mp4',
        like: '8.2  |  1245',
        duracion: '23 seg',
    }
    return (
        <>
            <BannerComponent multimediaContents={multimedia} />
            <div className="containerInternaMain">
                <VideosComponent />
                <VideosFiltroComponent />
                <CampanasComponent titularCampana="Gloria" subtitularCampana="Videos que inspiran" />
                <ListadoComponent />
            </div>

        </>
    );
}
