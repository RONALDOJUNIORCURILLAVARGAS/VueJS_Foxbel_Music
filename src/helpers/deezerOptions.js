import deezerApi from '@/api/deezerApi'

export const getAlbum=()=>{
    //export const getAlbum=([a,b,c,d]=[])=>{
    /* const albumARr=[
        deezerApi.get(`/${b}`),
        deezerApi.get(`/${a}`),
        deezerApi.get(`/${c}`),
        deezerApi.get(`/${d}`),
    ] */
    const album=deezerApi.get(`user/2529/playlists`)
    console.log(album)

}
/* 
export const getPokemonNames=async([a,b,c,d]=[])=>{


    const promiseArr=[
        deezerApi.get(`/${b}`),
        deezerApi.get(`/${a}`),
        deezerApi.get(`/${c}`),
        deezerApi.get(`/${d}`),
    ]
   const [p1,p2,p3,p4]=await Promise.all(promiseArr)
   return [
       {name:p1.data.name,id:p1.data.id},
       {name:p2.data.name,id:p2.data.id},
       {name:p3.data.name,id:p3.data.id},
       {name:p4.data.name,id:p4.data.id}
    ]  
} */