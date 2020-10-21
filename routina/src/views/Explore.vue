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
            
          >
            <ExploreTabHead :name="tab.name" :icon="tab.icon" ></ExploreTabHead>
          </v-tab>
          <v-tab-item v-for="tab in tabs" :key="tab.name">
            <div style="overflow:hidden; display:flex; align-items:center; justify-content:center;">
               <ExploreGrid :name="tab.name" :categories="tab.categories" width="100%"></ExploreGrid>
            </div>
          </v-tab-item>
      </v-tabs>
      </v-card>
      
    </div>
  </div>
</template>

<script>
import ExploreBanner from "../components/ExploreBannner";
import ExploreTabHead from "../components/ExploreTabHead";
import ExploreGrid from "../components/ExploreGrid";



export default {
  name: "Explore",
  components: { ExploreBanner, ExploreTabHead, ExploreGrid },
  data(){
    return{
   

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
    align-content: center;
    margin: 0 auto 30px;
    // padding: 30px 30px 30px 30px;
  }

</style>
