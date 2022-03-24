<template>
  <div class="playlist">
    <!-- <h1>{{ msg }}</h1>
     -->
     <div class="cabecera">
       <div class="busqueda">
         <div class="busca">
           <input type="text" placeholder=" Buscar" name="search" id="buscar">
         <a href="" class="buttom">
        
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
     <div class="cuerpo">


       <div class="banner">

       </div>

       <div class="resultados">
         <div class="title">
           <strong>Resultados</strong>
         </div>
         <div class="canciones">
           <div class="carrusel">
              <div class="card-song">
                <div class="image-card">
                  <img src="https://m.media-amazon.com/images/I/61jNfu1D+HL._SY355_.jpg" alt="">
                  <font-awesome-icon icon="ellipsis-vertical" class="select-option-song" />
                  <font-awesome-icon icon="play" class="select-song-play" />
                </div>
                  
                <div>
                  <strong>21</strong>
                </div>
                <div>
                  <span>Adele</span>
                </div>                 
              </div>
              <div class="card-song">
                
              </div>
              <div class="card-song">
                
              </div>
              <div class="card-song">
                <div class="image-card">
                  <img src="https://m.media-amazon.com/images/I/61jNfu1D+HL._SY355_.jpg" alt="">
                  <font-awesome-icon icon="ellipsis-vertical" class="select-option-song" />
                  <font-awesome-icon icon="play" class="select-song-play" />
                </div>
              </div>
              <div class="card-song">
                
              </div>
              <div class="card-song">
                
              </div>
           </div>
           
         </div>
       </div>

     </div>
  </div>
</template>

<script>
export default {
  name: 'deezerPlayList',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .playlist{
    width: 80vw;
    height: 90vh;
    /*
    Contenido de blanco
    */
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
    background: rgb(15,200,15);
  }
  .resultados{
    width: 80vw;
    height: 50vh;
  }
  .title{
    width: 76vw;
    height: 2.5vh;
    background: green;
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
    background: blue;
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
    font-size:20px;
    float: left;
    margin-top: 7vw;
    position:absolute;
  }
  .card-song span{
    font-family:'Quicksand-light';
    margin-top: 8vw;
    float: left;
    font-size: 18px;
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
