<template>
  <div>
    <v-card class="routine-card" tile>
      <div class="routine-info-min">
        <p class="text-uppercase text-caption font-weight-medium mb-0">
          {{ routineData.type }}
        </p>
        <p class="font-weight-medium my-0">
          <v-icon dense>mdi-timer-outline</v-icon>{{ formatTime }}
        </p>
        <p class="text-uppercase text-caption font-weight-medium mb-0">
          {{ routineData.muscleGroup }}
        </p>
        <DifficultyLevel class="white--text text-h6" :difficulty="2" />
      </div>
      <img :src="routineData.image" class="card-image" />
      <div class="card-title text-uppercase font-weight-bold white--text">
        {{ routineData.routineName }}
      </div>
    </v-card>
  </div>
</template>

<script>
import DifficultyLevel from "./DifficultyLevel.vue";

export default {
  name: "RoutineCard",
  components: { DifficultyLevel },
  props: { routineData: Object },
  computed: {
    formatTime() {
      let hours = Math.floor(this.routineData.time / 60);
      let minutes = this.routineData.time % 60;
      return `${hours !== 0 ? hours + "h" : ""} ${
        minutes !== 0 ? minutes + "'" : ""
      }`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";
$card-height: 150px;
$card-width: 150px;
$card-title-height: 34px;
$routine-info-min-width: 75px;

.routine-card {
  position: relative;
  height: $card-height;
  width: $card-width;
}
.routine-info-min {
  position: absolute;
  right: 0px;
  z-index: 1;
  height: $card-height - $card-title-height;
  width: $routine-info-min-width;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  padding: 5px;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-image {
  position: absolute;
  height: $card-height - $card-title-height;
  width: $card-width;
  object-fit: cover;
  object-position: right;
}
.card-title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: $card-title-height;
  padding: 5px 0 5px 0;
  background-color: #333333;
  text-align: center;
}
</style>