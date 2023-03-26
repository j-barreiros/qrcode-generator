import { MouseEvent, useContext } from "react";
import { QRCode } from "react-qrcode-logo";
import { APPContext } from "../../context/appcontext/appcontext.context";
import { QRDataContext } from "../../context/qrdata/qrdata.context";
import { QRType } from "../../context/qrdata/qrdata.types";
import { QrListItemContainer } from "./qr-list-item.style";

// SVG ICON
import DeleteIcon from "../../assets/delete-icon";

type QrListItemProps = {
    qr: QRType;
}

const QRListItem = ({ qr }: QrListItemProps) => {

    const { id, originalText } = qr;
    const { deleteQR } = useContext(QRDataContext);

    const { changeMode, setSelectedQR } = useContext(APPContext);

    const handleClick = () => {
        setSelectedQR(qr);
        changeMode("display");
    }

    const handleDelete = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        event.stopPropagation();
        deleteQR(id);
    }

    const limitQRTitleSize = (fullTitle:string, maxSize:number) => {
        if(fullTitle.length > maxSize) {
            return fullTitle.slice(0,maxSize).concat("...");
        } else {
            return fullTitle;
        }
    }

    return (
        <QrListItemContainer onClick={handleClick}>
            <section className="qr-info">
                <div className="qr-miniature" title={originalText}>
                    <QRCode
                        value={originalText}
                        size={30}
                        quietZone={3}
                    />
                </div>
                <p className="qr-title" title={originalText}>{limitQRTitleSize(originalText, 20)}</p>
            </section>
            <button
                className='delete-btn'
                onClick={(event) => handleDelete(event)}
            >
                <DeleteIcon />
            </button>
        </QrListItemContainer>
    )
}

export default QRListItem;