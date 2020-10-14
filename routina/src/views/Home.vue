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
  </div>
</template> 

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data(){
    return{
      colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
    }
  }
};
</script>

<style scoped>
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
}
</style>
