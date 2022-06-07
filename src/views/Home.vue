<template>
<div class="all">
  <div class="home">
      <navbar />
      <deezerPlayList />
      
  </div>
  <!-- Envio de objeto recibido de la API -->
    <reproductorPlayList :cancion="this.songsDefault" />
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
      }
  },
  methods:{
    async consumirApi(){
            const axios = require("axios");
            const options = {
              method: 'GET',
              url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
              params: {q: 'billie'},
              headers: {
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
                'X-RapidAPI-Key': 'e2f9d5cdcdmshe3af8e1a48b083cp1b7481jsn160a9a0fa4c6'
              }
            };
            

            await axios.request(options).then(function (response) {
              console.log('dataaaaaa:',response.data);
            }).catch(function (error) {
              console.error(error);
            });
        },
        async getAlbuma(){         
               await deezerApi.get('/track/140421773').then((resp)=>{
                 this.songsDefault=resp.data
                 console.log('data',resp.data)
               }).catch(err=>console.log(err))
            }
  },
   created(){
      //Ejecucion a una vez de la función
      this.getAlbuma()
      this.consumirApi()
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
