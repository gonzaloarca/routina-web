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
        <RoutineSlideGroup />
      </v-card>
      <v-card class="content-container">
        <h1 class="title-cont">Routines created by me</h1>
        <RoutineSlideGroup :editable="routineEditing" />

        <div class="centered-div">
          <div class="centered-div pa-3" style="width: 27%">
            <v-btn
              rounded
              width="100%"
              color="orange darken-3"
              light
              class="button font-weight-bold pa-3"
            >
              <v-icon class="icon-fmt" color="black" left>
                mdi-plus-circle
              </v-icon>
              Create new routine
            </v-btn>
          </div>
          <div class="centered-div pa-3" style="width: 27%">
            <v-btn
              rounded
              width="100%"
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
            </v-btn>
          </div>
        </div>
      </v-card>
      <v-card class="content-container">
        <h1 class="title-cont">Exercises created by me</h1>
        <ExerciseSlideGroup :editable="exerciseEditing" />

        <div class="centered-div">
          <div class="centered-div pa-3" style="width: 27%">
            <v-btn
              rounded
              width="100%"
              color="orange darken-3"
              light
              class="button font-weight-bold pa-3"
            >
              <v-icon class="icon-fmt" color="black" left>
                mdi-plus-circle
              </v-icon>
              Create new exercise
            </v-btn>
          </div>
          <div class="centered-div pa-3" style="width: 27%">
            <v-btn
              rounded
              width="100%"
              color="grey darken-2"
              dark
              class="button font-weight-bold"
              @click="exerciseEditing = !exerciseEditing"
            >
              <v-icon v-if="exerciseEditing" color="white" left>
                mdi-exit-to-app
              </v-icon>
              <v-icon v-else color="white" left> mdi-pencil </v-icon>
              <span v-if="exerciseEditing"> FiniexerciseEh editing </span>
              <span v-else> Edit exercise </span>
            </v-btn>
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

export default {
  name: "Routines",
  components: { RoutinesBanner, RoutineSlideGroup, ExerciseSlideGroup },
  data() {
    return {
      routineEditing: false,
      exerciseEditing: false,
    };
  },
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
