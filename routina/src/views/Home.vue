<template>
  <div class="Home">
<<<<<<< HEAD
    <v-carousel
      cycle
      height="350"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3 font-weight-bold">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    
=======
    <RoutinesBanner banner-image-url="banner-2.jpg" banner-title="Home" />
>>>>>>> ecec08d90ee6ec2e1b835b6e6aa3f8a7a4c7a9e9

    <!-- banner viejo -->
    <!-- <section class="exhibitor">
      <img class="slide" src="../assets/yoga1.jpg" />
    </section>-->

    <!-- Cuerpo principal con rutinas y contenido -->
    <div>
      <v-btn @click="getFullRoutine(2)">Get Full ROUTINE</v-btn>
    </div>
    <div class="home-content">
      <v-card class="content-container">
        <h1>Recommended routines</h1>
        <h2>Just for you</h2>
        <RoutineSlideGroup :routines="routines"/>
      </v-card>

      <v-card class="content-container-special">
        <SpecialRoutineBanner
          title="Routine of the day"
          description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias, repellat odio aliquid perferendis amet."
          image="routine-of-the-day.jpg"
          :routineData="specialRoutine1"
        />
      </v-card>
      <v-card class="content-container">
        <h1>Recommended routines</h1>
        <h2>Just for you</h2>
        <RoutineSlideGroup />
      </v-card>
      <!-- <div class="content-container">
        <h1>Recommended routines</h1>
        <h2>Just for you</h2>
        <RoutineSlideGroup />
      </div> -->
    </div>
  </div>
</template> 

<script>
import RoutineSlideGroup from "../components/RoutineSlideGroup";
import SpecialRoutineBanner from "../components/SpecialRoutineBanner";
<<<<<<< HEAD
import {RoutinesApi} from "../services/routines.js"
=======
import RoutinesBanner from "../components/RoutinesBanner";
>>>>>>> ecec08d90ee6ec2e1b835b6e6aa3f8a7a4c7a9e9
// @ is an alias to /src

export default {
  name: "Home",
  components: { RoutineSlideGroup, SpecialRoutineBanner, RoutinesBanner },
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      specialRoutine1: {
        routineName: "Routine 1",
        routineId: 1,
        author: "Julian Sicardi",
        type: "Cardio",
        difficulty: 2,
        muscleGroup: "Legs",
        time: 45,
        image: require("../assets/routine1.jpg"),
      },
      routines:this.getRouts,
    };
  },
  methods:{
    async getRouts(){
      const res = await RoutinesApi.getRoutines();
      return await res.results; //hay que convertirlo al tipo de datos de slide-group
    },
    getFullRoutine:async function(id){
      try {
        const res = await RoutinesApi.getFullRoutine(id);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../sass/variables";

.Home {
  background-color: black;
}

.home-content {
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

.content-container-special {
  max-width: $content-container-width - 150px;
  align-content: center;
  margin: 0 auto 30px;
}

/* 
Del Carousel Viejo
.exhibitor {
  height: 400px;
  width: 100vw;
  overflow: hidden;
}

.slide {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 400px;
  object-fit: none;
} */
</style>
