// Hooks
import { useState } from "react";

// Components
import QRForm from "../qr-form/qr-form.component";

// Style
import { CreateQRContainer } from "./create-qr.style";


const CreateQR = () => {

    return (
        <CreateQRContainer>
            <h1 className="generate-qr-title">Generate a QR Code</h1>
            <QRForm />
        </CreateQRContainer>
    )
}


export default CreateQR;