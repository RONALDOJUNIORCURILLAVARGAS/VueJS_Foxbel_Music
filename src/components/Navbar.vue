<template>
<div>
    <div class="navbar">
   <!-- ========== Start Logo en barra ========== -->
   <div class="image mx-5" style="cursor:pointer;" @click="$emit('selectionOption','Home')">
        <img class="icon_logo" alt="logo" src="../assets/foxbel-music.png">
    </div>
   <!-- ========== End Logo en barra ========== -->
    

    <div class="options">
        <!-- ========== Start Barra de opciones ========== -->
         <ul class="ul-title-options">
            <li class="option-list">Mi librería  
            </li>
            <ul class="list-sel">
                <li class="option-list-sel" ><span>Recientes</span> </li>
                <li class="option-list-sel"><span>Artistas</span> </li>
                <li class="option-list-sel" @click="$emit('selectionOption','album')"><span>Álbums</span> </li>
                <li class="option-list-sel"><span>Canciones</span></li>
                <li class="option-list-sel"><span>Estaciones</span></li>
            </ul>
            <li class="option-list">Playlist</li>
            <ul class="list-sel">
                <li class="option-list-sel"><span> Meta!</span></li>
                <li class="option-list-sel"><span>Para bailar</span></li>
                <li class="option-list-sel"><span>Rock 90s</span></li>
                <li class="option-list-sel"><span>Baladas</span></li>
            </ul>
        </ul>
        <!-- ========== End Barra de opciones ========== -->
       
    </div>
    
  </div>
</div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    msg: String
  }
}
</script>

<style scoped>
    .navbar{
        width: 20vw;
        height: 90vh;
        background:#662323;
    }
    .image{
        justify-content: center;
        text-align:center;
        padding: 0rem;
        padding-top: 2rem;
        padding-bottom: 1.5rem;
    }
    .icon_logo{
        max-height: 3rem;
        min-height: 1rem;
    }

/* Mi Librería */
    .option-list{
        width: 100%;
        height: 28px;
        left: 40px;
        top: 139px;
        list-style:none;
        font-family: 'Quicksand';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 28px;
        color: #FFFFFF;
        margin-top: 1rem;
        cursor: pointer;
        
    }
    .option-list:hover{
       color: #E86060;
       font-family: 'Quicksand-bold';
    }
    .list-sel{
        padding: 0px;
    }
    .option-list-sel{
    list-style:none;
    width: 100%;
    height: 20px;
    left: 41px;
    top: 283px;
    font-family: 'Quicksand-light';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF; 
    margin-top: 0.5rem;
    cursor: pointer;
    }
    .option-list-sel:hover{
       color: #E86060;
       font-family: 'Quicksand-bold';
    }

</style>
