<template>
  <div class="Profile">
    <ProfileBanner :user="user" />
    <div class="profile-content">
      <v-card
        v-for="sg in slidegroups"
        :key="sg.name"
        class="content-container"
      >
        <h1>{{ sg.name }}</h1>
        <RoutineSlideGroup />
      </v-card>
    </div>
  </div>
</template>
<script>
import ProfileBanner from "../components/ProfileBanner";
import RoutineSlideGroup from "../components/RoutineSlideGroup";
import {UserApi} from "../services/user.js";
export default {
    created(){
      this.current();
      this.analyzeExecutions();
    },
    name:"MyProfile",
    components:{ProfileBanner, RoutineSlideGroup},
    data(){
      return{
        userDemo:{
          fullName:"Beto",
          username:"MBEEEEH",
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
        user:{},
        numberOfExecutions:0,
        lastRoutine:{},
        mostUsedRoutine:{},
      }
    },
    methods:{
      current:async function(){
        try {
          this.user= await UserApi.getCurrentUser();
          if(this.user==null){
            console.log("USER IS NULL");
          }
          console.log("CURRENT USER = " + `${JSON.stringify(this.user)}`);
          console.log(this.user);
          return true;
        } catch (error) {
          console.log(error);
          this.user=null;
          this.isLoggedIn=false;
          return false;
        }
      },
      analyzeExecutions:async function(){
        try {
          const res = await UserApi.getCurrentUserExecutions();
          const results = res.results;
          console.log(res);
          console.log(results);
          this.numberOfExecutions = res.totalCount;
          if(this.numberOfExecutions==0){
            this.mostUsedRoutine=null;
            this.lastRoutine = null;
          }else{
            this.lastRoutine= results[0];
            //recorremos todas las executions para ver si hay repetidas
            let max = [];
            let actual= 0;

            results.array.forEach((result,index) => {
              actual = result.id;
              max[index] = 0;

              results.array.forEach(result2 => {
                if(actual==result2.id){max[index]++;}
              });
              
            });
            let maxMax = 0;
            let index = 0;
            max.array.forEach((val,i) => {
              if(val>maxMax){
                maxMax=val;
                index = i;
              }
            });
            this.mostUsedRoutine = results[index];
          }
          

          
          
        } catch (error) {
          console.log(error);
        }
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

.Profile {
  background-color: black;
}
</style>
