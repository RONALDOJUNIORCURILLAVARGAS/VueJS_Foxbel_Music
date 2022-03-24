<template>
  <div class="reproductor">
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
          <!-- <audio controls preload="metadata" src="../music/Audio.mp3"></audio> -->
          
      </div>
  </div>
</template>

<script>
export default {
    //name: 'reproductorPlayList',
    computed:{
        function(){
            console.log('dfh')
            console.log(this.songsDefault)
        }
    },
    data(){

        return{
            songsDefault:{},
            current:{},
            index:0,
            value:0.25,
            isPlaying:false,
            isSound:true,
            player:new Audio()
        }
    },
    props:{
        cancion:{
            type:Object,
        },
    },
    created(){
        this.player.src=this.current.src
        
        setTimeout(() => {
             this.songsDefault.title=this.cancion.title
             this.songsDefault.artist=this.cancion.artist.name
             this.songsDefault.album=this.cancion.album.title
             this.songsDefault.imagesrc=this.cancion.album.cover
             this.songsDefault.audio=this.cancion.preview

            this.asignar_cancion()

             console.log(this.cancion.album.cover_medium)
             console.log(this.cancion.preview)
        }, 1000);


    },
    methods: {
        asignar_cancion(){
            this.player.src=this.songsDefault.audio
            console.log(this.cancion.artist.name)
        },
        play(){
            //const audio = new Audio(sound)
            this.player.play()
            this.isPlaying=true
        },
        pause(){
            this.player.pause()
            this.isPlaying=false
        },
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
    mounted() {
        this.player.volume=this.value  
       // console.log(typeof(this.current))  
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