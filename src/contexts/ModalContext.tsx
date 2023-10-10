import { GatewayDataT, ModalContextT } from "@/types/types";
import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

const ModalContext = createContext<ModalContextT | undefined>(undefined)

export function ModalContextProvider({children}: {children: ReactNode}){
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [gatewayData, setGatewayData] = useState<GatewayDataT | undefined>(undefined);

    return(
        <ModalContext.Provider value={{isOpen, setIsOpen, gatewayData, setGatewayData}}>
            {children}
        </ModalContext.Provider>
    )
}

export function useModalContext(){
    return useContext(ModalContext)
}