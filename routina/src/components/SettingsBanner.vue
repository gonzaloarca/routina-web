<template>
  <div class="settings-banner" >
    <div class="slider-wrapper">
      <div class="settings-header" >
        <h1 class="black--text">Settings</h1>
      </div>
   
    </div>
      
  </div>
</template>

<script>


export default {
  name: "SettingsBanner",
};
</script>

<style scoped lang="scss">
@import "../sass/variables";


$y-displacement: 0px;

.settings-banner{
    height: $banner-height;
    background-color:rgb(11, 90, 155);
    
}

.slider-wrapper{
    position:relative;
    width:100%;
    height:$banner-height;

    .settings-header {
    height: 70px;
    width: 350px;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px) contrast(0.5) brightness(1.5) ;
    h1 {
      font-size: 30pt;
    }
  }
}



</style>
