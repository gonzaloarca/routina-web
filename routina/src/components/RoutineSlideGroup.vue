<template>
  <div class="routine-slide-group">
    <v-sheet class="mx-auto" color="black" max-width="1300">
      <v-slide-group class="pa-4" show-arrows>
        <v-slide-item v-for="routine in routines" :key="routine.routineId">
          <RoutineCard
            v-on:click="
              overlay = true;
              data = routine;
            "
            :editable="editable"
            :routine-data="routine"
            class="ma-4"
          />
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <RoutineOverlay
      :routine-data="data"
      v-on:close-overlay="updateOverlay"
      :overlay="overlay"
      :editable="editable"
    />
  </div>
</template>

<script>
import RoutineCard from "./RoutineCard";
import RoutineOverlay from "./RoutineOverlay.vue";

export default {
  name: "RoutineSlideGroup",
  props: { editable: Boolean },
  components: { RoutineCard, RoutineOverlay },
  data() {
    return {
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