<template>
  <div class="cuerpo">
   <!--  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
  
</template>

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
   /* display: flex; */
}
</style>
