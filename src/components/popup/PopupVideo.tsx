'use client';
import VideoBanner from "@/components/videos/ViewVideo";
interface BannerInterface {
    title: string;
    subTitle: string;
    idMarca: number;
    marca: string;
    slugMarca: string;
    slug: string;
    type: string; // video o imagen
    multimedia: string;
    like: string;
    logoMarca: string;
    duracion: string;
}
interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    items: BannerInterface; // Recibe un array de strings
}
const PopupVideo = ({ isOpen, onClose, items }: PopupProps) => {
    if (!isOpen) return null;
    return (
        <div className={`modal fade ${isOpen ? "show d-block" : "d-none"}`} style={{ background: "rgba(0, 0, 0, 0.5)" }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <button type="button" className="buttonClosePopUp" onClick={onClose}>X</button>

                    <div className="modal-body">
                        <VideoBanner videoContent={items} />
                    </div>
                    {/* <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={onClose}>
                            Cerrar
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default PopupVideo
