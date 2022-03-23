<template>
  <div class="playlist">
    <!-- <h1>{{ msg }}</h1>
     -->
     <div class="cabecera">
       <div class="busqueda">
         <input type="text" placeholder=" Buscar" name="search" id="buscar">
       </div>
       <div class="usuario">

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
    background: blue;
  }
  .cabecera{
    width: 80vw;
    height: 10vh;
    background: black;
  }
  .busqueda{
    width: 50vw;
    height: 10vh;
    background: red;
  }
  #buscar{
    width: 40vw;
    height: 5vh;
    margin: 2vh;
    font-family:'Quicksand';
    font-size: 18px;
    padding-left: 1rem;
    background: #FFFFFF;
    /* Gray */
    border-radius: 100px;

  }

  
</style>
