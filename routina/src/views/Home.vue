<template>
  <div class="Home">
    <v-carousel
      cycle
      height="400"
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

    <!-- banner viejo -->
    <!-- <section class="exhibitor">
      <img class="slide" src="../assets/yoga1.jpg" />
    </section>-->

    <!-- Cuerpo principal con rutinas y contenido -->
    <div class="home-content">
      <v-card class="routine-slide-group-container">
        <h1>Recommended routines</h1>
        <h2>Just for you</h2>
        <RoutineSlideGroup />
      </v-card>
      <v-card class="routine-slide-group-container">
        <h1>Recommended routines</h1>
        <h2>Just for you</h2>
        <RoutineSlideGroup />
      </v-card>
      <!-- <div class="routine-slide-group-container">
        <h1>Recommended routines</h1>
        <h2>Just for you</h2>
        <RoutineSlideGroup />
      </div> -->
    </div>
  </div>
</template> 

<script>
import RoutineSlideGroup from "../components/RoutineSlideGroup";
// @ is an alias to /src

export default {
  name: "Home",
  components: { RoutineSlideGroup },
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
    };
  },
};
</script>

<style scoped lang="scss">
@import "../sass/variables";

.home-content {
  max-width: $content-container-width;
  margin: auto;
  padding: 30px 0 30px 0; 
  background-color: black;
}

.routine-slide-group-container {
  max-width: $content-container-width - 200px;
  margin: 30px auto 30px auto;
  padding: 30px 30px 30px 30px;
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
