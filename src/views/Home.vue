<template>
<div class="all">
  <div class="home">
      <navbar @selection-option="GetOption($event)" />
      <deezerPlayList :optionresults="optionResult"  :arresults="groupResults" @selection-track="checkSong($event)" @search-track="recivetext($event)"/>
      
  </div>
  <!-- Envio de objeto recibido de la API -->
    <reproductorPlayList :cancion="songsDefault" />
</div>
  
</template>

<script>
// Importaciones
import deezerPlayList from '@/components/deezerPlayList.vue'
import navbar from '@/components/Navbar.vue'
import reproductorPlayList from '@/components/reproductorPlayList.vue'
import deezerApi from '../api/deezerApi'

export default {
  name: 'Home',
  components: {
    deezerPlayList,
    navbar,
    reproductorPlayList,
  },
  data(){
    return{
        songsDefault:{type:Object},
        groupResults:{type:Object},
        optionResult:{type:Object},
      }
  },
  methods:{
      async GetOption(GetUrl){
        console.log('get',GetUrl)
        this.optionResult={'data':'prueba','apellido':'ninguno'}

        if(GetUrl=='Home'){
          this.SearchResult()
          this.getAlbuma()
          this.optionResult=null
        }

      },
      async recivetext(textsearch){
        await deezerApi.get(`/search?q=${textsearch}&limit=8`).then((resp)=>{
            this.groupResults=resp.data.data
            }).catch(err=>console.log(err))
      },
      checkSong(selectsong){
        this.songsDefault=selectsong
        if(selectsong.title.length>13){
          this.songsDefault.title=selectsong.title.substr(0,13)+'...'
        }
      },
        async getAlbuma(){         
               await deezerApi.get('/track/140421773').then((resp)=>{
                 let arr={
                  id:resp.data.id,
                  artist:resp.data.artist.name,
                  title:resp.data.title_short,
                  preview:resp.data.preview,
                  image:resp.data.album.cover,
                }
                 this.songsDefault=arr
                 if(arr.title.length>13){
                   this.songsDefault.title=arr.title.substr(0,13)+'...'
                 }
               }).catch(err=>console.log(err))
            },
        async SearchResult(){
          await deezerApi.get('/search?q=eminem&limit=8').then((resp)=>{
            this.groupResults=resp.data.data
            }).catch(err=>console.log(err))
        },
  },
   created(){
      //Ejecucion a una vez de la función
      this.SearchResult()
      this.getAlbuma()

     
    },
}
</script>
<style>
  .all{
    width: 100%;
    height: 100vh;
  }
  .home{
    width: 100%;
    height: 90vh;
    display: flex;
  }

</style>
