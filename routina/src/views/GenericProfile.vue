<template>
<div class="GenericProfile">
  <ProfileBanner :user="usr" :current="false"/>
  <div class="profile-content">
      <v-card v-for="sg in slidegroups" :key="sg.name" class="content-container">
        <h1>{{sg.name}}{{usr.username}}<div style="width:10px;"></div>{{usr.name}}</h1>
        <RoutineSlideGroup :routines="sg.routines" />
      </v-card>
  </div>
</div>  
</template>
<script>
import ProfileBanner from "../components/ProfileBanner";
import RoutineSlideGroup from "../components/RoutineSlideGroup";
import {UserApi} from "../services/user.js";
import {RoutinesApi} from "../services/routines.js";
export default {
    name:"GenericProfile",
    components:{ProfileBanner, RoutineSlideGroup},
    data(){
      return{
        id:this.$route.params.id,
        usr:{},  
        // userDemo:{
        //   firstName:"el",
        //   lastName:"Beto",
        //   userName:"MBEEEEH",
        //   lastAct:"5 hours ago",
        //   memSince:"1 Mar 2020",
        //   latestWork:{
        //     routineName: "Routine 1",
        //     routineId: 1,
        //     author: "Julian Sicardi",
        //     type: "Cardio",
        //     difficulty: 2,
        //     muscleGroup: "Legs",
        //     time: 45,
        //     image: require("../assets/routine1.jpg"),
        //   },
        //   mostUsed:{
        //     routineName: "Routine 1",
        //     routineId: 1,
        //     author: "Julian Sicardi",
        //     type: "Cardio",
        //     difficulty: 2,
        //     muscleGroup: "Legs",
        //     time: 45,
        //     image: require("../assets/routine1.jpg"),
        //   }
        // },
        slidegroups:[
          {name:"Routines created by ", routines:[],}, ],
      }
    },
    async created(){
        this.usr = await UserApi.getUser(this.id);
        this.slidegroups[0].routines= await RoutinesApi.getSlideRoutines();
    },
   

};
</script>
<style scoped lang="scss">
  @import "../sass/variables";


  .profile-content {
  max-width: $content-container-width;
  margin: auto;
  padding: 30px 30px 30px 30px;
}

.content-container {
  max-width: $content-container-width - 150px;
  align-content: center;
  margin: 0 auto 30px;
  padding: 30px 30px 30px 30px;
}

.GenericProfile{
  background-color:black;
}
</style>
