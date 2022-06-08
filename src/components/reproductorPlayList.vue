<template>
  <div class="reproductor">
      <!-- ========== Start Cancion inicial detalles e imagen ========== -->
      <img :src="songsDefault.imagesrc"  alt="image-reproductor" srcset=""/>
      <div class="details">
          <div class="title">
              <span>{{ songsDefault.title }}</span>
          </div>
          
          <div class="description">
              <span>{{ songsDefault.artist }}</span> -
              <span>{{ songsDefault.album }}</span>
          </div>
      </div>
      <!-- ========== End Cancion inicial detalles e imagen ========== -->



      <!-- ========== Start Reproductor play,pause,next,back ========== -->
      <div class="player">
          
          <div class="content-button">
                <div class="button-icon-action">
                    <font-awesome-icon icon="backward-step" class="btn-icon" /> 
                </div>
                <div class="button-icon-action2" v-if="!isPlaying" @click="play">
                    <font-awesome-icon icon="circle-play" class="btn-icon-play"/>
                </div>

                <div class="button-icon-action2" v-else @click="pause">
                  <font-awesome-icon icon="circle-stop" class="btn-icon-play"/>
                 </div> 

                <div class="button-icon-action">
                   <font-awesome-icon icon="forward-step" class="btn-icon"/>
              </div>       
          </div>
          
      </div>
      <!-- ========== End Reproductor play,pause,next,back ========== -->
      
        <!-- ========== Start Barra de control de sonido ========== -->
        <div class="sound">
          <div class="barra">
            <input type="range" min="0" max="1" v-model="value" step="0.1" id="mislider" >  
          </div>
          <div class="actividad_sonido" v-if="isSound" @click="sound">
              <font-awesome-icon icon="volume-off" />
          </div>
          <div class="actividad_sonido" v-else @click="sound">
              <font-awesome-icon icon="volume-xmark" />
          </div>
      </div>
        
        <!-- ========== End Barra de control de sonido ========== -->
      
  </div>
</template>

<script>
export default {
    name: 'reproductorPlayList',
    data(){
        return{
            songsDefault:{},
            current:{},
            index:0,
            value:0.25,
            isPlaying:false,
            isSound:true,
            player:new Audio(),
        }
    },
    props:{
        cancion:{
            type:Object,
        },
    },
    created(){
        //Inicio de volumen
        this.player.src=this.current.src
        setTimeout(() => {
             this.asignar_cancion()
        }, 1000);


    },
    methods: {
        //Asignacion de direccion de cancion
        asignar_cancion(){
            this.songsDefault.title=this.cancion.title
            this.songsDefault.artist=this.cancion.artist.name
            this.songsDefault.album=this.cancion.album.title
            this.songsDefault.imagesrc=this.cancion.album.cover
            this.songsDefault.audio=this.cancion.preview
            this.player.src=this.songsDefault.audio
        },
        //Reproducir canción
        play(){
            this.player.play()
            this.isPlaying=true
        },
        //Pausar canción
        pause(){
            this.player.pause()
            this.isPlaying=false
        },
        //Cambiar estado de sonido
        sound(){
            if(this.isSound){
                this.player.volume=0
                this.isSound=false

            }else{
                this.isSound=true
            }
        }
    },
    watch:{
        //Ejecutar funciones cuando los siguientes valores sufran cambios
        cancion(){
            this.pause()
            console.log('elemn',this.songsDefault)
            console.log('cambio',this.cancion.title)
            this.songsDefault.id=this.cancion.id
            this.songsDefault.title=this.cancion.title
            this.songsDefault.artist=this.cancion.artist
            this.songsDefault.album=this.cancion.title
            this.songsDefault.imagesrc=this.cancion.image
            this.songsDefault.audio=this.cancion.preview
            this.player.src=this.songsDefault.audio
            this.play()
            //this.asignar_cancion()
        },
        value:function () {
            if(this.isSound){
                this.player.volume=this.value
            }
        },
        isSound:function() {
            if(this.isSound){
                this.player.volume=this.value
            }
        }
    },
    //Ejecutar una vez
    mounted() {
        //Asignar valor inicial del volumen
        this.player.volume=this.value  
     
    },
  
}
</script>

<style scoped>
.reproductor{
    width: 100%;
    height: 10vh;
    background-color: #EB5757;
    display: flex;
}
.reproductor img{
    width: 5vw;
}
.details{
    width: 15vw;
    height: 10vh;
}
.title{
    margin-left: 1rem;
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 28px;
    color: #FFFFFF;
    margin-top: 1rem;
}
.description{
    margin-left: 1rem;
    font-family: 'Quicksand-light';
    font-style: normal;
    font-weight: 700;
    font-size: 0.8rem;
    color: #FFFFFF;
}
.player{
    width: 60vw;
    height: 10vh;
}
.content-button{
    width: 28vh;
    height: 8vh;
    margin: auto;
    margin-top:1vh;
    display: flex;
}
.button-icon-action{
    width: 8vh;
    height: 8vh;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    text-align:center;

    align-items: center;
    display: flex;
    justify-content: center;
    color: #FFFFFF;
    margin:auto;
}
.button-icon-action:hover{
    color: #FFFFFF;
    background: #FF7676;
    opacity: 0.5;
}
.button-icon-action2{
    width: 8vh;
    height: 8vh;
    text-align: center;
    border-radius: 50%;
    background: #FFFFFF;
    color: #FF7676;
    cursor: pointer;
    margin:auto;
}
.button-icon-action2:hover{
    background: #FFFFFF;
    color: #662323;
    opacity: 0.5;
}

.button-icon-action .btn-icon{
    font-size: 3vh;
}
.btn-icon-play{
    font-size: 8vh;
}
.sound{
    width: 20vw;
    height: 10vh;
    display: flex;
}
.sound .barra{
    width: 15vw;
    height: 2vh;
    margin: auto;
    margin-top: 4vh;
    color: black;
    text-align: center;
    
}
.actividad_sonido{
    margin-top: 3.5vh;
    width: 3vh;
    height: 3vh;
    font-size: 3vh;
    margin: auto;
    color: #FFFFFF;
    cursor: pointer;
    border-radius: 50%;
}
.actividad_sonido:hover{
    opacity: 0.5;
}



audio{
    display: none;
}
</style>