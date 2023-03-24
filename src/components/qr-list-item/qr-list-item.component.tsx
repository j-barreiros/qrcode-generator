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

    const { id, title, originalText } = qr;
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

    return (
        <QrListItemContainer onClick={handleClick}>
            <section className="qr-info">
                <div className="qr-miniature">
                    <QRCode
                        value={originalText}
                        size={30}
                        quietZone={3}
                    />
                </div>
                <p className="qr-title">{title}</p>
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