class Settings {

    get UrlBase() {
        return process.env.REACT_APP_API_BASE_URL || ''
    }

    get UrlApiKey() {
        return process.env.REACT_APP_API_KEY || ''
    }
}


export default new Settings()