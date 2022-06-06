import deezerApi from '../api/deezerApi'

export const getAlbum = async( ) => {
    const {data}=await deezerApi.get('/artist/9635624/top?limit=3')
    console.log(data)
}