<template>
  <div class="Home">
    <RoutinesBanner banner-image-url="banner-2.jpg" banner-title="Home" />

    <!-- banner viejo -->
    <!-- <section class="exhibitor">
      <img class="slide" src="../assets/yoga1.jpg" />
    </section>-->

    <!-- Cuerpo principal con rutinas y contenido -->
    <div class="home-content">
      <v-card class="content-container">
        <h1>Recommended routines</h1>
        <h2>Just for you</h2>
        <RoutineSlideGroup />
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
import RoutinesBanner from "../components/RoutinesBanner";
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
    };
  },
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
