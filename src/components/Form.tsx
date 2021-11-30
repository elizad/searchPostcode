import { useState, FC } from 'react';
import { makePostalCodeSearch, ISearchResult, IAddressResult } from './../api/apiCalls';
import { FormInput } from './Form.Input';
import { AddressCollection } from './AddressCollection';
// import {resolveSrv} from "dns";


interface IFormProps {
    title:string
    paragraph: string
}

// default value when nothing is selected or error...
const _noSearchResults: ISearchResult = {
    addresses: [],
    latitude: 0,
    longitude: 0,
    postcode: ''
}

export const Form:FC<IFormProps> = ({ title, paragraph }) => {
    const [searchResults, setsearchResults] = useState(_noSearchResults)
    const [addressLine1, setaddressLine1] = useState("")
    const [addressLine2, setaddressLine2] = useState("")
    const [searchQuery, setSearchQuery] = useState("")
    const [error, seterror] = useState("")

    const handleSearch = async (newSearchQuery: string) => {
        setSearchQuery(newSearchQuery)
        const { success, message, data } = await makePostalCodeSearch(newSearchQuery)
        if (success && data){
            setsearchResults(data)
            seterror("")
        }  else {
            setsearchResults(_noSearchResults)
            seterror(message)
        }
    }

    const onCardClicked = (address: IAddressResult) => {
        setaddressLine1(address.line_1)
        setaddressLine2(address.line_2)
    }

    return (
        <div className="m-2 container">
            <h2>{ title }</h2>

            <FormInput name="addressField1" title="addressField1Input" value={addressLine1} placeholder="Building Name or Street" onChange={setaddressLine1}/>
            <FormInput name="addressField2" title="addressField2Input" value={addressLine2} placeholder="Building Name or Street" onChange={setaddressLine2}/>
            <FormInput name="postcode" title="postcodeInput" value={searchQuery} placeholder="Type the postcode" onChange={handleSearch}/>

            <AddressCollection addresses={searchResults.addresses} onClick={onCardClicked}/>

            {error.length > 0 && (<div><span className="danger">ERROR: {error}</span></div>) }

            <p>{ paragraph }</p>
        </div>
    )
}