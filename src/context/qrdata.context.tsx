import { createContext, useState } from "react";
import { QRContextType, QRType } from "./qrdata.types";

const initialState = {
    qrList: [],
    addQR: (qrTitle: string, originalText: string) => null,
    deleteQR: (qrId: number) => null,
}

export const QRDataContext = createContext<QRContextType>(initialState);


type QRDataContextProviderProps = {
    children: React.ReactNode;
}

const QRDataContextProvider = ({ children }: QRDataContextProviderProps) => {

    const [qrList, setQRList] = useState([] as QRType[]);

    const contextValue = {
        qrList: qrList,
        addQR: (qrTitle: string, originalText: string) => {
            setQRList([
                {
                    id: Math.floor(Math.random() * 100),
                    title: qrTitle,
                    originalText: originalText
                },
                ...qrList
            ]
            );
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