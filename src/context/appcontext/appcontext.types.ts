import { QRType } from "../qrdata/qrdata.types";

export type ModeType = 'create' | 'display';

export type AppContextType = {
    mode: ModeType,
    changeMode: (newMode : ModeType) => void,
    selectedQR: QRType,
    setSelectedQR: (newQR : QRType) => void,
}