import { createContext, useEffect, useState } from "react";
import { QRContextType, QRType } from "./qrdata.types";

const initialState = {
    qrList: [],
    addQR: (originalText: string) => null,
    deleteQR: (qrId: number) => null,
}

export const QRDataContext = createContext<QRContextType>(initialState);


type QRDataContextProviderProps = {
    children: React.ReactNode;
}

const QRDataContextProvider = ({ children }: QRDataContextProviderProps) => {

    const getFromLocalStorage = () => {
        const qrFromLocalStorage = JSON.parse(localStorage.getItem('QRList') || "");
        if(qrFromLocalStorage) {
            return qrFromLocalStorage as QRType[];
        } else {
            return [] as QRType[];
        }
    }

    const [qrList, setQRList] = useState(() => getFromLocalStorage());

    useEffect(() => {
        localStorage.setItem("QRList",JSON.stringify(qrList));
    }, [qrList])
    


    const contextValue = {
        qrList: qrList,
        addQR: (originalText: string) => {
            setQRList([
                {
                    id: Math.floor(Math.random() * 100),
                    originalText: originalText
                },
                ...qrList
            ]);
        },
        deleteQR: (filteredQrId: number) => {
            setQRList(qrList.filter(qr => qr.id != filteredQrId))
        }
    }

    return (
        <QRDataContext.Provider value={contextValue}>
            {children}
        </QRDataContext.Provider>

    )
}

export default QRDataContextProvider;