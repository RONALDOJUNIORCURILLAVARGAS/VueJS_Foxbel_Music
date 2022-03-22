<template>
  <div class="home">
    <deezerPlayList msg="INICIO" />
    
  </div>
</template>

<script>
// @ is an alias to /src

import deezerPlayList from '../components/deezerPlayList.vue'
import getAlbum from '@/helpers/deezerOptions'

export default {
  name: 'Home',
  components: {
    deezerPlayList
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
