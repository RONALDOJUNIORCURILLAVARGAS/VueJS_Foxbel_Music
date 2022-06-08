<template>
<div class="all">
  <div class="home">
      <navbar />
      <deezerPlayList :arresults="groupResults" @selection-track="checkSong($event)"/>
      
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
      }
  },
  methods:{
      checkSong(selectsong){
        console.log('checksong',selectsong)
        this.songsDefault=selectsong
        console.log('new song',this.songsDefault)
      },
        async getAlbuma(){         
               await deezerApi.get('/track/140421773').then((resp)=>{
                 this.songsDefault=resp.data
                 if(resp.data.title.length>13){
                   this.songsDefault.title=resp.data.title.substr(0,13)+'...'
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
