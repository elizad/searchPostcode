import React, {useState} from 'react';
import axios from 'axios';
import {search} from '../../api/apiCalls';


type FormProps = {
    title: string,
    paragraph: string
}


export const Form = ({ title, paragraph }: FormProps) => {

    const [searchResults, setsearchResults] = useState<any>("");

    const [addressLine1, setaddressLine1] = useState<any>("");
    const [addressLine2, setaddressLine2] = useState<any>("");
    const [postcode, setpostcode] = useState<any>("");
    const [error, seterror] = useState<any>(null);
    const handleSearch = async (searchQuery: any) => {
        const {success, message, data} = await search(searchQuery);
        if (success){
            setsearchResults(data);
            seterror(null);
        }  else {
            seterror(message);
        }
    };


    return (
        <div className="m-2 container">
            <h2>{ title }</h2>

            <input type="text" name="addressField1" title="addressField1Input" value={addressLine1}
                   placeholder=" Building Name or Street"
                   onChange={(event) => setaddressLine1(event.target.value) }
            />
            <input type="text" name="addressField2"  title="addressField2Input" value={addressLine2}
                   placeholder="Building Name or Street"
                   onChange={(event) => setaddressLine2(event.target.value) }
            />

            <input type="text" name="postcode" title="postcodeInput"
                   placeholder="Type the postcode"
                   onChange={ (searchEvent) => handleSearch(searchEvent.target.value)} />

            <div>{searchResults && searchResults?.addresses.map((item:any, index:number) =>
                //inline style example
                (<li style={{cursor:"pointer",color:"green"}} key={index}
                     onClick={()=>{setaddressLine1(item.line_1); setaddressLine2(item.line_2); console.log(item) }}>
                    {item.formatted_address.join(" ")}</li>) )} </div>

            <div> {error && (<span> {error}</span>) }</div>


            <p>
                { paragraph }
            </p>
        </div>
    )
}

const el = <Form title="Welcome!" paragraph="To this example" />