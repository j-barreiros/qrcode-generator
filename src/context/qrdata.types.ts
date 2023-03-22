export type QRType = {
    id: number,
    title: string,
    originalText: string,
}

export type QRContextType = {
    qrList: QRType[],
    addQR: (qrTitle : string, originalText: string) => void,
    deleteQR: (qrId : number) => void,
}