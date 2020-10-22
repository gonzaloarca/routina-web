<template>
  <div class="Explore">
    <ExploreBanner />
    <div class="explore-content">
      <v-card class="content-container">
        <h1 class="title-container">Explore routines by:</h1>
        <v-tabs v-model="explore_tabs" background-color="black" fixed-tabs class="pb-0">
          <v-tab
            v-for="tab in tabs"
            :key="tab.name"
            v-on:click="showingRoutines=false"
          >
            <ExploreTabHead :name="tab.name" :icon="tab.icon" ></ExploreTabHead>
          </v-tab>
      </v-tabs>
      <v-row>
        <v-card color="orange darken-2" height="30px" width="100%" tile class="content-container">
         <h2 class="text-color " v-if="showingRoutines">{{this.tabName}}</h2>
        </v-card>
      </v-row>
      <v-tabs-items v-if="!showingRoutines" v-model="explore_tabs">
        <v-tab-item v-for="tab in tabs" :key="tab.name">
            <div style="overflow:hidden; display:flex; align-items:center; justify-content:center;">
               <ExploreGrid v-on:click="categoryClick" componentType="CategoryCard" :name="tab.name" :categories="tab.categories" width="100%"></ExploreGrid>
            </div>
          </v-tab-item>
      </v-tabs-items>

       <ExploreGrid v-if="showingRoutines" :withOverlay="true" componentType="RoutineCard" name="Routine" :categories="routines" width="100%"></ExploreGrid>
      </v-card>
      
    </div>
  </div>
</template>

<script>
import ExploreBanner from "../components/ExploreBanner";
import ExploreTabHead from "../components/ExploreTabHead";
import ExploreGrid from "../components/ExploreGrid";



export default {
  name: "Explore",
  components: { ExploreBanner, ExploreTabHead, ExploreGrid },
  methods:{
    categoryClick(event){
      this.tabName=event.emitter;
      this.showingRoutines=true;
    }
  },
  data(){
    return{
      showingRoutines:false,
      explore_tabs:null,
      tabName:"null",
      routines: [
        //time esta en minutos
        {
          routineName: "Routine 1",
          routineId: 1,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 2,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 3,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 4,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 5,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 6,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 7,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 8,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 9,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 10,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 11,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 12,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
      ],

      tabs:[
        {name:"featured", 
        icon:"mdi-star", 
        categories:[
          {name:"favorites", image:"yoga.jpg" },
          {name:"popular", image:"cardio.jpeg" },
          {name:"recently used", image:"chest.jpeg" },
          {name:"new", image:"basiceq.jpg" },], 
        },

        {name:"duration", 
        icon:"mdi-timer", 
        categories:[
          {name:"under 15'", image:"abs.jpg" },
          {name:"15'-30'", image:"crossfit.jpg" },
          {name:"30'-45'", image:"hiit.jpg" },
          {name:"45'-60'", image:"arms.jpg" },
          {name:"above 60'", image:"fullbody.jpg" },], 
        },

        {name:"type", 
        icon:"fa-heartbeat", 
        categories:[
          {name:"Cardio", image:"cardio.jpeg" },
          {name:"Strength", image:"strength.jpg" },
          {name:"HIIT", image:"hiit.jpg" },
          {name:"Yoga", image:"yoga.jpg" },
          {name:"Pilates", image:"pilates.jpg" },],
        },

        {name:"difficulty level", 
        icon:"mdi-fire", 
        categories:[
          {name:"Easy", image:"lowerbody.jpg" },
          {name:"Accesible", image:"pilates.jpg" },
          {name:"Moderate", image:"strength.jpg" },
          {name:"Hard", image:"back.jpg" },],
        },

        {name:"equipment", 
        icon:"fa-dumbbell", 
        categories:[
          {name:"No equipment", image:"bodyweight.jpg" },
          {name:"Basic equipment", image:"basiceq.jpg" },
          {name:"Crossfit equipment", image:"crossfit.jpg" },
          {name:"Gym equipment", image:"gym.jpg" },],
        },

        {name:"muscle group", 
        icon:"fa-running",
        categories:[
          {name:"arms", image:"arms.jpg" },
          {name:"core", image:"core.jpg"}, 
          {name:"legs", image:"lowerbody.jpg"}, 
          {name:"full body", image:"fullbody.jpg", }, 
          {name:"abs", image:"abs.jpg" }, 
          {name:"back", image:"back.jpg" }, 
          {name:"chest", image:"chest.jpeg" },
      ], 
      },
      ],

      
      
    }
  }
};
</script>

<style scoped lang="scss">
  @import "../sass/variables";
  .Explore {
    background-color: black;
  }
  .explore-content {
    max-width: $content-container-width;
    margin: auto;
    padding: 30px 30px 30px 30px;
  }

  .title-container{
    padding: 30px 30px 30px 30px;
  }

  .tab{
    width:20%;
  }
  .content-container {
    max-width: $content-container-width - 150px;
    align-items: center;
    justify-content: center;
    margin: 0 auto 30px;
    // padding: 30px 30px 30px 30px;
  }

  .text-color{
    color: rgb(19, 19, 19) ;
    text-transform: uppercase;
    font-size: 18px;
    padding: 2px 2px 2px 2px;
    text-align: center;
    font-weight: 600;
  }

</style>
