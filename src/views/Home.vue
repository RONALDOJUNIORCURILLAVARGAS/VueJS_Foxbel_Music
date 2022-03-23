<template>
<div class="all">
  <div class="home">
      <navbar />
      <deezerPlayList msg="INICIO" />
      
    </div>
    <reproductorPlayList />
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
  created() {
        /* const {id} = this.$route.params
        console.log(id) */
       // this.id=id
 
        this.getPokemon()
    },
  methods:{
    async getPokemon(){
            try {
               // const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.id }`).then(r => r.json() )
               const albumes = await fetch(`https://api.deezer.com/user/2529/playlists`,{
                 mode:'cors'
               }).then(r => r.json() )
                console.log(albumes)

            } catch (error) {

                console.log('No hay nada que hacer aqui no existe ese pokemon')
            }
            
        }
    
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
