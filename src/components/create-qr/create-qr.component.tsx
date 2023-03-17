// Hooks
import { useState } from "react";

// Style
import { CreateQRContainer } from "./create-qr.style";

import qrPlaceholder from "../../assets/placeholder-qr.png";
import QRForm from "../qr-form/qr-form.component";

const CreateQR = () => {

    const [qrCode, setQrCode] = useState("");

    const handleQrConversion = (originalText : string) => {
        fetch(` https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${originalText}`)
            .then((response) => setQrCode(response.url))
    }

    return (
        <CreateQRContainer>
            <h1 className="generate-qr-title">Generate a QR Code</h1>
            <QRForm handleQrConversion={handleQrConversion}/>    

            <img
                alt="generated qr code"
                src={qrCode != "" ? qrCode : qrPlaceholder}
            />
        </CreateQRContainer>
    )
}


export default CreateQR;