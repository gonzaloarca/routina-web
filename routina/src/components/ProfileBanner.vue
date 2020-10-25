<template>
  <div class="profile-banner" background-color="primary" >
    <div class="slider-wrapper">
     <div class="content-container">
       <div class="row-fmt">
         <div>
           <v-card class="big-card" tile>
             <div class="avat-format pa-4">
                <v-avatar size="120" color="white" class="my-4">
                    <img :src="user.avatarUrl"/>
                </v-avatar>
             </div>
             <div style="width:284px; text-align:left; margin-left:20px;">
               <div style="display:flex;"><h1 class="txt-caps">{{user.fullName}}</h1></div>
               <h2 class="orange-text">{{user.username}}</h2>
             </div>
            </v-card >
           <div class="row-fmt">
             <v-card class="small-card" tile>
               <h2 class="small-title">Last Active</h2>
               <h3>{{formatTime(user.dateLastActive)}}</h3>
            </v-card >
            <v-card class="small-card" tile>
             <h2 class="small-title">Member Since</h2>
             <h3>{{formatTimeStyle(user.dateCreated)}}</h3>
            </v-card >
         
           </div>
         </div>
         <v-card v-if="current" tile class="medium-card">
           <h3 class="medium-title">Latest workout</h3>
           <div class="pt-4"><RoutineCard :routineData="user.latestWork" :withOverlay="true"></RoutineCard></div>
         </v-card>
         <v-card v-if="current" tile class="medium-card">
           <h3 class="medium-title">Most used routine</h3>
           <div class="pt-4"><RoutineCard :routineData="user.mostUsed" :withOverlay="true"></RoutineCard></div>
         </v-card>
       </div>
        
        <div class="row-fmt mt-3">
        <v-btn
              v-if="current"
              rounded
              color="black"
              class="button font-weight-bold"
              to="/settings"
            ><h3 class="primary--text">Edit profile</h3>
        </v-btn>
      </div> 
     </div>
    </div>
      
  </div>
</template>

<script>

import RoutineCard from "./RoutineCard";

export default {
  name: "ProfileBanner",
  props:{
    user:{
      type:Object,
      required: true,
    },
    current:{
      type:Boolean,
      required:true,
      default:false,
    },
    latestWorkout:{type:Object,required:true},
    mostUsedRoutine:{type:Object,required:true},
    
  },
  data(){
    return{
    months:["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ],
    };
  },
  components:{RoutineCard},
  methods:{
  formatTime(time){
      let date=new Date(time);
      let [month, day, year]=date.toLocaleDateString().split("/");
      let [hour, minute, second]=date.toLocaleTimeString().split(/:| /);
      date=month+second+year;
    
      return day+" days "+hour+" hours "+minute+" minutes ago";
  },
  formatTimeStyle(time){
      let date=new Date(time);
      let [month, day, year]=date.toLocaleDateString().split("/");
      return this.months[month-1]+" "+day+" "+year;
  },
  },

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

.orange-text{
  color: $primary;
}
.row-format{
  display:flex;
  flex-direction:row;
  width:100%;
}

.txt-caps{
  text-transform: capitalize;
}


.medium-card{
  width:300px;
  height:300px;
  margin-left:20px;
  margin-right:20px;
  margin-top:10px;
  margin-bottom:10px;
  text-align: center;
  padding-left:70px;
  padding-right:70px;
  .medium-title{
    text-transform:uppercase;
    color: grey;
    font-size: 18px;
    padding:10px 10px 10px 10px;
  }

}

.big-card{
  display:flex;
  align-items:center;
  justify-content:center;
  width:424px;
  text-align:left;
  height:180px;
  margin-left:20px;
  margin-right:20px;
  margin-top:10px;
  margin-bottom:10px;
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
  width:200px;
  height:100px;
  margin-left:12px;
  margin-right:12px;
  margin-top:10px;
  margin-bottom:10px;
  text-align: center;
  padding-left:5px;
  padding-right:5px;
  .small-title{
    text-transform:uppercase;
    color: grey;
    font-size: 14px;
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

.avat-fmt{
  position:absolute;
  width: 140px;
}


</style>
