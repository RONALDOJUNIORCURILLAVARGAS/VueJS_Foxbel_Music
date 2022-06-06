<template>
<div class="all">
  <div class="home">
      <navbar />
      <deezerPlayList />
      
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
      }
  },
  methods:{
    async consumirApi(){
            try {
              //Direccion del API 
               this.songsDefault= await fetch(`https://api.deezer.com/track/1522667852`,{
                 mode:'cors'
               }).then(r => r.json())     

            } catch (error) {
                console.log(error)
            }
        },
        async getAlbuma(){
                const {data}=await deezerApi.get(`/track/140421773`)
                this.songsDefault=data
                //https://api.deezer.com/artist/9635624/top?limit=3
                //https://api.deezer.com/artist/9635624
                console.log(typeof(data))
                //export const loadEntries= async({commit})=>{
                //const {data}=await journalApi.get('/entries.json')
                console.log(data)
            }
  },
   mounted(){
      //Ejecucion a una vez de la función
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
