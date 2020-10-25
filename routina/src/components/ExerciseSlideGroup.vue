<template>
  <div class="exercise-slide-group">
    <v-sheet class="mx-auto" color="black" max-width="1300">
      <v-slide-group class="pa-4" show-arrows>
        <v-slide-item v-for="exercise in exercises" :key="exercise.id">
          <ExerciseCard
            v-on:click="
              overlay = true;
              data = exercise;
            "
            :editable="editable"
            :exercise-data="exercise"
            class="ma-4"
          />
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <ExerciseOverlay
      :exercise-data="data"
      v-on:close-overlay="updateOverlay"
      :overlay="overlay"
      :editable="editable"
    />
  </div>
</template>

<script>
import ExerciseCard from "./ExerciseCard";
import ExerciseOverlay from "./ExerciseOverlay.vue";

export default {
  name: "ExerciseSlideGroup",
  props: { editable: Boolean , exercises: Array},
  components: { ExerciseCard, ExerciseOverlay },
  data() {
    return {
      // exercises: [
      //   {
      //     exerciseName: "Exercise 1",
      //     exerciseId: 1,
      //     author: "Julian Sicardi",
      //     image: require("../assets/exercise1.jpg"),
      //   },
      //   {
      //     exerciseName: "Exercise 1",
      //     exerciseId: 2,
      //     author: "Julian Sicardi",
      //     image: require("../assets/exercise1.jpg"),
      //   },
      //   {
      //     exerciseName: "Exercise 1",
      //     exerciseId: 3,
      //     author: "Julian Sicardi",
      //     image: require("../assets/exercise1.jpg"),
      //   },
      //   {
      //     exerciseName: "Exercise 1",
      //     exerciseId: 4,
      //     author: "Julian Sicardi",
      //     image: require("../assets/exercise1.jpg"),
      //   },
      //   {
      //     exerciseName: "Exercise 1",
      //     exerciseId: 5,
      //     author: "Julian Sicardi",
      //     image: require("../assets/exercise1.jpg"),
      //   },
      //   {
      //     exerciseName: "Exercise 1",
      //     exerciseId: 6,
      //     author: "Julian Sicardi",
      //     image: require("../assets/exercise1.jpg"),
      //   },
      //   {
      //     exerciseName: "Exercise 1",
      //     exerciseId: 7,
      //     author: "Julian Sicardi",
      //     image: require("../assets/exercise1.jpg"),
      //   },
      //   {
      //     exerciseName: "Exercise 1",
      //     exerciseId: 8,
      //     author: "Julian Sicardi",
      //     image: require("../assets/exercise1.jpg"),
      //   },
      //   {
      //     exerciseName: "Exercise 1",
      //     exerciseId: 9,
      //     author: "Julian Sicardi",
      //     image: require("../assets/exercise1.jpg"),
      //   },
      //   {
      //     exerciseName: "Exercise 1",
      //     exerciseId: 10,
      //     author: "Julian Sicardi",
      //     image: require("../assets/exercise1.jpg"),
      //   },
      //   {
      //     exerciseName: "Exercise 1",
      //     exerciseId: 11,
      //     author: "Julian Sicardi",
      //     image: require("../assets/exercise1.jpg"),
      //   },
      //   {
      //     exerciseName: "Exercise 1",
      //     exerciseId: 12,
      //     author: "Julian Sicardi",
      //     image: require("../assets/exercise1.jpg"),
      //   },
      // ],
      data: {},
      overlay: false,
    };
  },
  methods: {
    updateOverlay() {
      this.overlay = false;
    },
  },
};
</script>

<style>
</style>