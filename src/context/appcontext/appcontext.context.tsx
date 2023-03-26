import { useState, createContext } from "react";
import { QRType } from "../qrdata/qrdata.types";
import { AppContextType, ModeType } from "./appcontext.types";

const initialState = {
    mode: 'create',
    changeMode: (newMode:string) => {},
    selectedQR: {} as QRType,
    setSelectedQR: (newQR: QRType) => {}, 
}

type APPContextProps = {
    children: React.ReactNode;
}

export const APPContext = createContext(initialState as AppContextType);

const AppContextProvider = ({children}:APPContextProps) => {
    const [mode, setMode] = useState<ModeType>("create");
    const [selectedQR, setSelectedQR] = useState({} as QRType);
    
    const contextValue = {
        mode: mode,
        changeMode: setMode,
        selectedQR: selectedQR,
        setSelectedQR: setSelectedQR,
    }

    return (
        <APPContext.Provider value={contextValue}>
            {children}
        </APPContext.Provider>
    )

}

export default AppContextProvider;