<template>
<div class="Profile">
  <ProfileBanner :user="userDemo"/>
  <div class="profile-content">
      <v-card v-for="sg in slidegroups" :key="sg.name" class="content-container">
        <h1>{{sg.name}}</h1>
        <RoutineSlideGroup />
      </v-card>
  </div>
</div>  
</template>
<script>
import ProfileBanner from "../components/ProfileBanner";
import RoutineSlideGroup from "../components/RoutineSlideGroup"
export default {
    name:"MyProfile",
    components:{ProfileBanner, RoutineSlideGroup},
    data(){
      return{
        userDemo:{
          firstName:"el",
          lastName:"Beto",
          userName:"MBEEEEH",
          lastAct:"5 hours ago",
          memSince:"1 Mar 2020",
          latestWork:{
            routineName: "Routine 1",
            routineId: 1,
            author: "Julian Sicardi",
            type: "Cardio",
            difficulty: 2,
            muscleGroup: "Legs",
            time: 45,
            image: require("../assets/routine1.jpg"),
          },
          mostUsed:{
            routineName: "Routine 1",
            routineId: 1,
            author: "Julian Sicardi",
            type: "Cardio",
            difficulty: 2,
            muscleGroup: "Legs",
            time: 45,
            image: require("../assets/routine1.jpg"),
          },
        },
        slidegroups:[
          {name:"Recently Used"}, 
          {name:"Favorite Routines"}, 
          {name:"Recently Used"}, 
          {name:"Routines created by me"}, 
          {name:"Exercises created by me"}],
      }
    }
}
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

.Profile{
  background-color:black;
}
</style>
