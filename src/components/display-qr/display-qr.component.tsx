import React from "react";
import { useContext } from "react";
import { QRCode } from "react-qrcode-logo";
import { APPContext } from "../../context/appcontext/appcontext.context";
import Button from "../button/button.component";
// Style
import { DisplayQRContainer } from "../display-qr/display-qr.style"


const DisplayQR = () => {

    const { selectedQR } = useContext(APPContext);

    return (
        <DisplayQRContainer>
            <h1 className="section-title">Saved QR Code</h1>
            <textarea
                className="qr-input qr-textarea"
                readOnly={true}
                rows={6}
                value={selectedQR.originalText}
            />
            <QRCode
                value={selectedQR?.originalText}
                size={230}
            />
        </DisplayQRContainer>
    )
}

export default DisplayQR;