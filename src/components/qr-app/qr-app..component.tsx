import { useContext } from "react";
import { APPContext } from "../../context/appcontext/appcontext.context";
import CreateQR from "../create-qr/create-qr.component";
import DisplayQR from "../display-qr/display-qr.component";
import QRList from "../qr-list/qr-list.component";
// Style
import AppContainer from './qr-app.style';

const QRApp = () => {

    const {selectedQR, mode} = useContext(APPContext);

    const selectSection = (mode : 'create' | 'display') => {
        switch (mode) {
            case 'create':
                return <CreateQR />
            case 'display':
                return <DisplayQR />
            default:
                <CreateQR />
        }
    }

    return (
        <section className="app-container">
            <QRList />
            {selectSection(mode)}
        </section>
    )
}

export default QRApp;