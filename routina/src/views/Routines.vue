<template>
  <div class="Routines">
    <RoutinesBanner
      banner-image-url="myroutbanner.jpg"
      banner-title="My Routines"
    />
    <div class="routines-content">
      <v-card class="content-container">
        <h1 class="title-cont">
          My favorite routines
          <v-icon size="90%">mdi-heart</v-icon>
        </h1>
        <RoutineSlideGroup :routines="favoriteRoutines"/>
      </v-card>
      <v-card class="content-container">
        <h1 class="title-cont">Routines created by me</h1>
        <RoutineSlideGroup  :routines="myRoutines" :editable="routineEditing" />

        <div class="centered-div">
          <div class="centered-div pa-3">
            <v-btn
              rounded
              color="orange darken-3"
              light
              router
              to="routine/-1/edit-routine"
              class="button font-weight-bold pa-3"
            >
              <v-icon class="icon-fmt" color="black" left>
                mdi-plus-circle
              </v-icon>
              Create new routine
            </v-btn>
          </div>
          <div class="centered-div pa-3">
            <!-- <v-btn
              rounded
              color="grey darken-2"
              dark
              class="button font-weight-bold"
              @click="routineEditing = !routineEditing"
            >
              <v-icon v-if="routineEditing" color="white" left>
                mdi-exit-to-app
              </v-icon>
              <v-icon v-else color="white" left> mdi-pencil </v-icon>
              <span v-if="routineEditing"> Finish editing </span>
              <span v-else> Edit routine </span>
            </v-btn> -->
          </div>
        </div>
      </v-card>
      <v-card class="content-container">
        <h1 class="title-cont">Exercises created by me</h1>
        <ExerciseSlideGroup :exercises="myExercises" :editable="exerciseEditing" />

        <div class="centered-div">
          <div class="centered-div pa-3">
            <v-btn
              rounded
              color="orange darken-3"
              light
              class="button font-weight-bold pa-3"
              router
              to="create-exercise"
            >
              <v-icon class="icon-fmt" color="black" left>
                mdi-plus-circle
              </v-icon>
              Create new exercise
            </v-btn>
          </div>
          <div class="centered-div pa-3">
            <!-- <v-btn
              rounded
              color="grey darken-2"
              dark
              class="button font-weight-bold"
              @click="exerciseEditing = !exerciseEditing"
            >
              <v-icon v-if="exerciseEditing" color="white" left>
                mdi-exit-to-app
              </v-icon>
              <v-icon v-else color="white" left> mdi-pencil </v-icon>
              <span v-if="exerciseEditing"> Finish editing </span>
              <span v-else> Edit exercise </span>
            </v-btn> -->
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RoutinesBanner from "../components/RoutinesBanner";
import RoutineSlideGroup from "../components/RoutineSlideGroup";
import ExerciseSlideGroup from "../components/ExerciseSlideGroup";
import {UserApi} from "../services/user.js";
import {RoutinesApi} from "../services/routines";
export default {
  name: "Routines",
  components: { RoutinesBanner, RoutineSlideGroup, ExerciseSlideGroup },
  mounted(){
    this.getFavoriteRoutines();
    this.getMyRoutines();
    this.getUserExercises();
  },
  data() {
    return {
      routineEditing: false,
      exerciseEditing: false,
      favoriteRoutines:[],
      myRoutines:[],
      myExercises:[],
    };
  },
  methods:{
    getFavoriteRoutines: async function(){
      const res = await UserApi.getCurrentUserFavouriteRoutines();
      console.log("GETTING FAVORITE ROUTINES");
      this.favoriteRoutines = [];
      for(const routine of res.results){
        const fullResponse = await RoutinesApi.getFullRoutine(routine.id);
        const imageRes = await RoutinesApi.getExerciseImages(fullResponse.id, fullResponse.cycles[0].id, fullResponse.cycles[0].exercises[0].id);
        fullResponse.image = imageRes.results[0].url;
        this.favoriteRoutines.push(fullResponse);
      }
    },
    getMyRoutines: async function(){
      const res = await UserApi.getCurrentUserRoutines();
      this.myRoutines = [];
      for(const routine of res.results){
        try{
           const fullResponse = await RoutinesApi.getFullRoutine(routine.id);
        const imageRes = await RoutinesApi.getExerciseImages(fullResponse.id, fullResponse.cycles[0].id, fullResponse.cycles[0].exercises[0].id);
        fullResponse.image = imageRes.results[0].url;
        this.myRoutines.push(fullResponse);
        }catch(error){
          console.log(error);
        }
       
      }
    },
    getUserExercises:async function(){
      const res = await UserApi.getCurrentUserRoutines();
      for(const routine of res.results){
        console.log("GETTING USER EXERCISES");
        console.log(routine);
        if(routine.name ==="internal"){
          this.myExercises = [];
          const fullResponse = await RoutinesApi.getFullRoutine(routine.id);
          console.log(fullResponse);
          this.myExercises = fullResponse.cycles[0].exercises;
        }
      }
      console.log(this.myExercises);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../sass/variables";

.Routines {
  background-color: black;
}

.routines-content {
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

.title-cont {
  max-width: fit-content;
}

.centered-div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 10px 10px;
}
</style>
