<template>
  <div class="Home">
    <RoutinesBanner banner-image-url="banner-2.jpg" banner-title="Home" />

    <!-- banner viejo -->
    <!-- <section class="exhibitor">
      <img class="slide" src="../assets/yoga1.jpg" />
    </section>-->

    <!-- Cuerpo principal con rutinas y contenido -->
    <!-- <div>
      <v-btn @click="getFullRoutine(2)">Get Full ROUTINE</v-btn>
    </div> -->
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
        <RoutineSlideGroup :routines="routines"/>
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
import {RoutinesApi} from "../services/routines.js"
import RoutinesBanner from "../components/RoutinesBanner";
// @ is an alias to /src

export default {
  name: "Home",
  components: { RoutineSlideGroup, SpecialRoutineBanner, RoutinesBanner },
  async created(){
    await this.getRouts();
    this.specialRoutine1 = this.routines[Math.floor(Math.random()*this.routines.length)];
    
  },
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
        creator:{username:"agustin Jerusalinsky"},
        name: "Routine 1",
        id: 1,
        author: "Julian Sicardi",
        type: "Cardio",
        difficulty: 2,
        muscleGroup: "Legs",
        time: 45,
        username:"specialX",
        image: require("../assets/routine1.jpg"),
      },
      routines:[],
    };
  },
  methods:{
    async getRouts(){
      const res = await RoutinesApi.getSlideRoutines();
      console.log("GET ROUTS");
      console.log(res);
      this.routines = res; //hay que convertirlo al tipo de datos de slide-group
      console.log(this.routines);
// averageRating: 0
// category: {id: 6, name: "PILATES", detail: ""}
// creator: {id: 3, username: "agustormakh", gender: "male", avatarUrl: "https://flic.kr/p/3ntH2u", dateCreated: 1603148436050, …}
// dateCreated: 1603518889041
// detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit | Legs | 15-30"
// difficulty: "beginner"
// id: 2
// isPublic: true
// name: "medium Arms"
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
