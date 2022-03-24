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
  },
   mounted(){
      //Ejecucion a una vez de la función
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
