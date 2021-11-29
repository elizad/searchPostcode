import React from "react";
import axios from "axios";

export  const search = async (searchquery:any) => {
    const API_BASE_URL =  "https://api.getAddress.io/find/";
    const API_QUERY_PARAMS = "?expand=true&api-key=ZRQqkksRp06yfRujeVubqw33517";
    const REQUEST_URL = API_BASE_URL + searchquery + API_QUERY_PARAMS;

    if (searchquery.trim().length < 4) return {
        success:false
    };
    if ( !searchquery.match(/([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/) )
    {
        return {
            success:false,
            message:"Invalid postcode"
        };
    }
    try {
        const {data} = await axios.get(REQUEST_URL);
        return {
            success:true,
            data:data
        }
    } catch (error: any) {
        return {
            success:false,
            message: error.response.data.Message
        }
    }};