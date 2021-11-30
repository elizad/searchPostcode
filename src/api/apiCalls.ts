import Axios from 'axios';
import Settings from './../utilities/Settings';

export interface IAddressResult {
    formatted_address: Array<string>
    thoroughfare: string
    building_name: string
    sub_building_name: string
    sub_building_number: string
    building_number: string
    line_1: string
    line_2: string
    line_3: string
    line_4: string
    locality: string
    town_or_city: string
    county: string
    district: string
    country: string
}

export interface ISearchResult {
    postcode: string
    latitude: number
    longitude: number
    addresses: Array<IAddressResult>
}


interface IApiCallResult<T> {
    success: boolean
    message: string
    data?: T
}


export const makePostalCodeSearch = async (searchquery:string): Promise<IApiCallResult<ISearchResult>> => {

    if (searchquery.trim().length < 4) return { success:false, message: '' }

    if (!searchquery.match(/([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/) )
    {
        return {
            success:false,
            message:"Invalid postcode"
        };
    }
    try {

        const requestUrl = `${Settings.UrlBase}/find/${encodeURI(searchquery)}?expand=true&api-key=${Settings.UrlApiKey}`
        const { data } = await Axios.get<ISearchResult>(requestUrl)

        return {
            success: true,
            data: data,
            message: ''
        }

    } catch (error: any) {

        return {
            success: false,
            message: error.message
        }
    }
}