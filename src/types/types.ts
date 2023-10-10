import { Dispatch, SetStateAction } from "react"

export type DeviceT = {
    _device: string,
    modelId: string
}[]

export type GatewayDataT = {
    _id?: string,
    name: string,
    devices: DeviceT
}

export type ModalContextT = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    gatewayData: GatewayDataT | undefined,
    setGatewayData: Dispatch<SetStateAction<GatewayDataT | undefined>>
}

export type SearchT = {
    searchParams: string,
    setSearchParams: Dispatch<SetStateAction<string>>
}