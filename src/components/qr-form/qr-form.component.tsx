import { FormEvent, useContext, useState } from "react";
import { QRFormStyle } from "./qr-form.style";

// Components
import { QRCode } from 'react-qrcode-logo';
import { QRDataContext } from "../../context/qrdata/qrdata.context";
import Button from "../button/button.component";

const QRForm = () => {

    const [originalText, setOriginalText] = useState("");
    const qrContext = useContext(QRDataContext);

    const handleSaveQR = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        qrContext.addQR(originalText);
        setOriginalText("");
    }

    return (
        <QRFormStyle onSubmit={(event) => handleSaveQR(event)}>

            <textarea
                className="text-input qr-textarea"
                value={originalText}
                placeholder="URL or text that will be converted"
                onChange={event => setOriginalText(event.target.value)}
                required={true}
                rows={4}
                autoComplete={"off"}
            >

            </textarea>
            <Button
                text="SAVE"
                size="big"
                onClick={(event: any) => handleSaveQR(event)} 
            />
            <QRCode
                value={originalText}
                size={230}
            />

        </QRFormStyle>
    )
}

export default QRForm;