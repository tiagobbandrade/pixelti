import { GatewayCard } from "./GatewayCard";

export function GatewaysGrid({toggleModal}: {toggleModal: () => void}){
    return (
        <main className='py-8 px-16 grid grid-cols-auto justify-items-center gap-6 xl:px-0'>
          <GatewayCard openModal={toggleModal} gatewayName='Gateway 1' />
          <GatewayCard openModal={toggleModal} gatewayName='Gateway 1' />
          <GatewayCard openModal={toggleModal} gatewayName='Gateway 1' />
          <GatewayCard openModal={toggleModal} gatewayName='Gateway 1' />
        </main>
    )
}