<template>
  <v-overlay class="exercise-overlay" :value="overlay">
    <div class="card">
      <v-btn icon text absolute v-on:click="closeOverlay" class="close-button"
        ><v-icon>mdi-close</v-icon></v-btn
      >
      <div class="headers">
        <div class="backdrop-card-image"></div>
        <v-img class="card-image" :src="exerciseData.image" />
        <div class="card-title white--text">
          <h1 class="exercise-name text-uppercase">
            {{ exerciseData.exerciseName }}
          </h1>
          <p class="mb-5">
            by
            <span class="primary--text">{{ exerciseData.author }}</span>
          </p>
        </div>
        <v-row class="description-container">
          <div class="description">
            <p class="data-label">DESCRIPTION</p>
            <p class="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sint
              dolores deleniti fuga quo exercitationem laudantium commodi
              repellendus mollitia quae.
            </p>
          </div>
        </v-row>
      </div>
      <v-row class="card-buttons-container"
        ><div class="card-buttons">
          <v-btn
            style="
              margin-top: auto !important;
              margin-bottom: auto !important;
              font-size: 15px !important;
            "
            rounded
            router
            to="exercise"
            class="ma-0 white black--text font-weight-bold"
            ><v-icon>mdi-pencil</v-icon> Edit exercise</v-btn
          >
        </div>
      </v-row>
      <div class="video-container">
        <p class="data-label">INSTRUCTIVE VIDEO</p>
        <div class="video-player">
          <v-icon x-large>mdi-play</v-icon>
        </div>
      </div>
    </div>
  </v-overlay>
</template>

<script>
export default {
  name: "ExerciseeOverlay",
  props: { overlay: Boolean, exerciseData: Object },
  data() {
    return {
      pressed: false,
    };
  },
  methods: {
    closeOverlay() {
      this.$emit("close-overlay", false);
      return;
    },
  },
};
</script>

<style scoped lang="scss">
@import "~vuetify/src/styles/styles.sass";

.close-button {
  position: absolute;
  right: 0px;
  z-index: 10;
}

.card-buttons-container {
  position: relative;
  justify-content: center;
  .card-buttons {
    position: relative;
    margin-top: -18px;
  }
}

.exercise-overlay {
  z-index: 100 !important;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}

.card {
  position: relative;
  width: 800px;
  z-index: 2;
  margin: auto;
  background: rgb(33, 33, 33);
}

.card-title {
  width: 100%;
  padding: 5px 0 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition-duration: 200ms;
  transition-property: height !important;
  font-weight: 600;
}

.headers {
  position: relative;
  height: fit-content;
}

.card-image {
  z-index: -2;
  position: absolute;
  width: 100% !important;
  height: 100%;
  object-fit: cover !important;
  object-position: right !important;
}
.backdrop-card-image {
  z-index: -1;
  position: absolute;
  width: 100% !important;
  height: 100%;
  backdrop-filter: blur(3px) brightness(0.7);
}

.exercise-name {
  margin-bottom: -7px;
}

.description-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  backdrop-filter: brightness(0.7);
  .description {
    $x-padding: 70px;
    $y-margin: 10px;
    padding-left: $x-padding;
    padding-right: $x-padding;
    margin-top: $y-margin;
    margin-bottom: $y-margin;

    font-weight: 600;
    font-size: 15px;
  }
}

.video-container {
  position: relative;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .video-player {
    $player-width: 500px;
    height: $player-width * (9/16);
    width: $player-width;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.data-label {
  opacity: 0.5;
  font-size: 15px;
  font-weight: 600;
}
</style>
