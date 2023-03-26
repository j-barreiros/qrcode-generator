// Hooks
import { useContext } from "react";
import { APPContext } from "../../context/appcontext/appcontext.context";

// Context
import { QRDataContext } from "../../context/qrdata/qrdata.context";
import Button from "../button/button.component";

// Components
import QRListItem from "../qr-list-item/qr-list-item.component";

// Style
import { QRListContainer } from "./qr-list.style";


const QRList = () => {

  const { qrList } = useContext(QRDataContext);
  const { changeMode } = useContext(APPContext);

  return (
    <QRListContainer>
      <Button
        size="small"
        onClick={() => changeMode('create')}
        text={"CREATE NEW QR"}
      />
      <section className="list">
        {qrList.map(qr => <QRListItem key={qr.id} qr={qr} />)}
      </section>
    </QRListContainer>
  )
}

export default QRList;