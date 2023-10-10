import { Dispatch, SetStateAction } from "react"

export type GatewayDataT = {
    _id: string,
    name: string,
    devices: {
        _device: string,
        modelId: string
    }[]
}

export type ModalContextT = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    gatewayData: GatewayDataT | undefined,
    setGatewayData: Dispatch<SetStateAction<GatewayDataT | undefined>>
}