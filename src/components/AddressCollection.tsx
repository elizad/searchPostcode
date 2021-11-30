import { FC } from 'react'
import { IAddressResult } from '../api/apiCalls'

interface ICards {
    addresses: Array<IAddressResult>
    onClick: (addressContext: IAddressResult) => void
}



export const AddressCollection: FC<ICards> = ({ addresses, onClick }) => {
    return <div className="grid-container">
        {
            Array.isArray(addresses) && addresses.map((address:IAddressResult, index:number) => <div style={{cursor:"pointer",color:"green"}} key={index} onClick={() => onClick(address)}>
                {address.formatted_address.join(" ")}
            </div>)
        }
    </div>
}