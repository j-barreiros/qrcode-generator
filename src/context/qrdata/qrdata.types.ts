export type QRType = {
    id: number,
    originalText: string,
}

export type QRContextType = {
    qrList: QRType[],
    addQR: (originalText: string) => void,
    deleteQR: (qrId : number) => void,
}