<template>
<div class="all">
  <div class="home">
      <navbar />
      <deezerPlayList msg="INICIO" />
      
    </div>
    <reproductorPlayList :cancion="songsDefault" />
</div>
  
  

</template>

<script>
// @ is an alias to /src

import deezerPlayList from '@/components/deezerPlayList.vue'
import navbar from '@/components/Navbar.vue'
import reproductorPlayList from '@/components/reproductorPlayList.vue'
import getAlbum from '@/helpers/deezerOptions'
import ReproductorPlayList from '../components/reproductorPlayList.vue'

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
               // const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.id }`).then(r => r.json() )
               this.songsDefault= await fetch(`https://api.deezer.com/track/1522667852`,{
                 mode:'cors'
               }).then(r => r.json() )     
               //console.log(this.songsDefault.album.id)
            } catch (error) {
                console.log('No hay nada que hacer aqui no existe ese pokemon')
            }
        },
  },
   mounted() {
        this.consumirApi()
        /* setTimeout(() => {
          console.log(this.songsDefault)
        }, 10); */
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
