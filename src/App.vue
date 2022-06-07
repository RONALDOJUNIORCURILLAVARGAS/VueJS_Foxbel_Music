<template>
  <div class="cuerpo">
    <!-- Router -->
    <router-view/>
  </div>
  
</template>
<script>
export default {
  components: {
  
  },
  methods:{
    
  },

  created(){
    
  }
  
}
</script>
<style>
@font-face {
  font-family: Quicksand;
  src: url('./css/Quicksand_Book.otf') format('truetype');
}
@font-face {
  font-family: Quicksand-light;
  src: url('./css/Quicksand_Light.otf') format('truetype');
}
@font-face {
  font-family: Quicksand-bold;
  src: url('./css/Quicksand_Bold.otf') format('truetype');
}
body{
  margin: 0px;
  width: 100vw;
  height: 100vh;
}
.cuerpo{
  width: 100%;
  height: 90vh;
}
</style>
