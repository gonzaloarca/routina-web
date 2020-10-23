<template>
  <div class="profile-banner" background-color="primary" >
    <div class="slider-wrapper">
     <div class="content-container">
       <div class="row-fmt">
         <div>
           <v-card class="big-card" tile>
             hola
           </v-card >
           <div class="row-fmt">
             <v-card class="small-card" tile>
             hola
            </v-card >
            <v-card class="small-card" tile>
             hola
            </v-card >
            <v-card class="small-card" tile>
             hola
            </v-card >
           </div>
         </div>
         <v-card tile class="medium-card">
           <h3 class="medium-title">Latest workout</h3>
         </v-card>
         <v-card tile class="medium-card">
           <h2 class="medium-title">Most used routine</h2>
         </v-card>
       </div>
        
        <div class="row-fmt">
        <v-btn
              rounded
              color="black"
              class="button font-weight-bold"
            ><h3 class="primary--text">Edit profile</h3>
        </v-btn>
      </div> 
     </div>
    </div>
      
  </div>
</template>

<script>


export default {
  name: "ProfileBanner",
};
</script>

<style scoped lang="scss">
@import "../sass/variables";


$y-displacement: 0px;
$height: $banner-height+200px;

.profile-banner{
    height: $height;
    background-color: $primary;
}

.col-fmt{
  padding:10px 10px 10px 10px;
}

.row-format{
  display:flex;
  flex-direction:row;
  width:100%;
}


.medium-card{
  width:300px;
  height:300px;
  margin-left:20px;
  margin-right:20px;
  margin-top:10px;
  margin-bottom:30px;
  text-align: center;
  padding-left:70px;
  padding-right:70px;
  .medium-title{
    text-transform:uppercase;
    color: grey;
    font-size: 16px;
    padding:10px 10px 10px 10px;
  }

}

.big-card{
  width:500px;
  height:200px;
  margin-left:20px;
  margin-right:20px;
  margin-top:10px;
  margin-bottom:30px;
  text-align: center;
  padding-left:30px;
  padding-right:30px;
  .big-title{
    text-transform:uppercase;
    color: grey;
    font-size: 36px;
    padding:10px 10px 10px 10px;
  }

}

.small-card{
  width:150px;
  height:70px;
  margin-left:12px;
  margin-right:12px;
  margin-top:10px;
  margin-bottom:30px;
  text-align: center;
  padding-left:15px;
  padding-right:15px;
  .big-title{
    text-transform:uppercase;
    color: grey;
    font-size: 36px;
    padding:10px 10px 10px 10px;
  }

}

.row-fmt{
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
}
.content-container{
  position:absolute;
  top:$nav-bar-height;
  height:$height - $nav-bar-height;
  display:flex; 
  align-items:center; 
  justify-content:center;
  flex-direction:column;
  width:100%;
}

.slider-wrapper{
    position:relative;
    width:100%;
    height:$height;

    .profile-header {
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
