<template>
  <div class="playlist">
  
  <!-- ========== Start Barra de busqueda y usuario ========== -->
   <div class="cabecera">
       <div class="busqueda">
         <div class="busca">
           <input type="text" v-model="searchText" placeholder="Buscar" name="search" id="buscar">
         <a class="buttom" @click="$emit('searchTrack',searchText)">     
          <font-awesome-icon icon="magnifying-glass" />
         </a>
         </div>     
       </div>
       <div class="usuario">
          <div class="caja-user">
              <font-awesome-icon icon="user" class="icon-user"/>
              <a href="">
                <strong>Francisco M.</strong>
              </a>      
          </div>
       </div>
     </div>
  <!-- ========== End Barra de busqueda y usuario ========== -->
    
  <!-- ========== Start Cuerpo de listas de reproduccion y banner ========== -->
  <div class="cuerpo">

      <!-- ========== Start Banner de canciones principales ========== -->
      <div class="banner">

       </div>
      <!-- ========== End Banner de canciones principales ========== -->
       

       <div class="resultados">
         <div class="title">
           <strong>Resultados</strong>
         </div>
         <div class="canciones" v-if="listsongs">
           <!-- ========== Start Carrusel de canciones buscada o recomendadas ========== -->
           <div class="carrusel">
             <!-- ========== Start Tarjetas dentro del carrusel para cada cancion ========== -->
             <div class="card-song" v-for="item in listsongs" :key="item.id" @click="$emit('selectionTrack',item)">
                <div class="image-card">
                  <img :src="item.image" alt="">
                  <font-awesome-icon icon="ellipsis-vertical" class="select-option-song" />
                  <font-awesome-icon icon="play" class="select-song-play" />
                </div>
                <div>
                  <strong>{{item.title}}</strong>
                </div>
                <div>
                  <span>{{item.artist}}</span>
                </div>                 
              </div>
             <!-- ========== End Tarjetas dentro del carrusel para cada cancion ========== -->
           </div>
           <!-- ========== End Carrusel de canciones buscada o recomendadas ========== -->
           
           
         </div>
         <div class="row h-75 w-100 bg-primary mt-4" v-if="selecoption"></div>
       </div>

     </div>
  <!-- ========== End Cuerpo de listas de reproduccion y banner ========== -->
     
  </div>
</template>

<script>
export default {
  name: 'deezerPlayList',
  data(){
    return{
        listsongs:{
          type:Array,
          default:[]
          },
          searchText:null,
          selecoption:null

      }
  },
  props: {
    msg: String,
    arresults:{
            type:Object,
        },
    optionresults:{
      type:Object,
      default:null,
    }
  },
  created(){
    console.log('first',this.arresults)
  },
  methods : {
  // We can add our functions here
    
    cambio(){
      console.log('nuevo')
      let arr=[]
      for (let item in this.arresults) {
        arr.push({
          id:this.arresults[item].id,
          artist:this.arresults[item].artist.name,
          title:this.arresults[item].title_short,
          preview:this.arresults[item].preview,
          image:this.arresults[item].album.cover,
        })
        if(this.arresults[item].title_short.length>13){
          arr[item].title=this.arresults[item].title_short.substr(0,13)+'...'
        }
        }
        console.log('termin',arr)
        this.listsongs=arr
      
    }
  },
  watch:{
    arresults(){
      console.log('cambio')
      this.cambio()
    },/* 
    searchText(){
      console.log(this.searchText)
    } */
    optionresults(newoption, oldoption){
      console.log('new ',newoption)
      console.log('old ',oldoption)
      this.listsongs=null
      this.selecoption=newoption
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .playlist{
    width: 80vw;
    height: 90vh;
  }
  .cabecera{
    width: 80vw;
    height: 10vh;
    padding-top: 0rem;
    display: flex;
  }
  .busqueda{
    width: 50vw;
    height: 10vh;
    display: flex;
  }
  .busca{
    width: 40vw;
    height: 4.5vh;
    font-family:'Quicksand';
    font-size: 18px;
    border-radius: 100px;
    border: 1px solid #828282; 
    padding-top: 0px;
    margin-left: 4vw;
    margin-top: 2vh;
  } 
#buscar{

    width: 34vw;
    height: 4vh;
    font-family:'Quicksand';
    font-size: 18px;
    outline: none;
    border: none;
    background: none;
    border-radius: 100px;
    padding-left: 1.5rem;
  }
  .buttom{
    width: 4vh;
    height: 4vh;
    text-decoration: none;
    color: #BDBDBD;
    font-size: 30px;
    float: right;
    margin-right: 10px;
    margin-top: 2px;
    cursor: pointer;
  }
  .usuario{
    width: 30vw;
    height: 10vh;
  }
  .caja-user{
    float: right;
    margin-right: 4vh;
    margin-top:3vh;
    cursor: pointer;
  }
  .icon-user{
    margin-right: 10px;
    color: #E86060;
    font-size: 25px;
  }
  .caja-user a{
    text-decoration: none;
    
  }
  .caja-user a strong{
    font-family: 'Quicksand';
    color: #4F4F4F;
  }
  .cuerpo{
    width: 80vw;
    height: 80vh;
  }
  .banner{
    width: 80vw;
    height: 30vh;
  }
  .resultados{
    width: 80vw;
    height: 50vh;
  }
  
  .title{
    width: 76vw;
    height: 2.5vh;
    font-size: 2vh;
    font-family:'Quicksand';
    padding-left: 4vw;
    padding-top: 1.5vh;
    color: #E86060;
  }
  
  .canciones{
    width: 80vw;
    height: 46vh;
    display: flex;
  }
  .carrusel{
    width: 74vw;
    height: 40vh;
    margin-left: 4vw;
    margin-top: 3vh;
    /* background: greenyellow; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .card-song{
    width: 7vw;
    height: 9vw;
    margin-right: 5rem;
    margin-bottom: 1rem;
    cursor: pointer;
  }
 .image-card{
   width: 7vw;
    position: absolute;
 }
 .image-card:hover{
   transform: scale(1.05,1.05);
 }
 .select-option-song{
    color: #FFFFFF;
    position: absolute;
    font-size: 1.5vw;
    top: 2px;
    right: 3px;

  }
  .card-song img{
    width: 7vw;
    position: absolute;
  }  

  .card-song strong{
    font-family:'Quicksand';
    font-size:13px;
    float: left;
    margin-top: 7vw;
    position:absolute;
  }
  .card-song span{
    font-family:'Quicksand-light';
    margin-top: 8vw;
    float: left;
    font-size: 14px;
    position:absolute;
  }
  .select-song-play{
    color: #FFFFFF;
    position:absolute;
    font-size: 2vw;
    margin-top:2.5vw;
    margin-left:2.75vw;
  }
</style>
