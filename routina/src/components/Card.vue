<template>
  <v-overlay class="root" :value="overlay">
    <div class="card">
      <v-img :src="routineData.image" class="card-image" />
      <div class="card-title white--text">
        <p class="my-0 text-uppercase">{{ routineData.routineName }}</p>
        <p class="user-label my-0">
          by
          <span class="primary--text">{{ routineData.author }}</span>
        </p>
      </div>
      <v-row class="routine-info">
        <v-col class="text-uppercase">
          <span class="type-label">ROUTINE TYPE</span>
          <br />
          {{ routineData.type }}
        </v-col>
        <v-col class="text-uppercase">
          <span class="type-label ">DURATION</span>
          <br />
          <v-icon dense>mdi-timer-outline</v-icon>
          {{ formatTime }}
        </v-col>
        <v-col class="text-uppercase">
          <span class="type-label">MUSCLE GROUP</span>
          <br />
          {{ routineData.muscleGroup }}
        </v-col>

        <v-col>
          <span  class="type-label">DIFFICULTY</span>
          <br />
          <DifficultyLevel style="display:inline" :difficulty="2" />
        </v-col>
      </v-row>
      <v-row class="card-buttons">
        <v-btn>GO TO ROUTINE</v-btn>
        <v-btn > <v-icon dark>
        mdi-heart
      </v-icon> </v-btn>
      </v-row>
      <v-row>
        <div class="scroller-container">
          <h4>Excercise List</h4>
          <v-virtual-scroll :items="items" height="300" item-height="64" class="scroller">
            <template v-slot="{ item }">
              <v-list-item class="item">{{ item }}</v-list-item>
            </template>
          </v-virtual-scroll>
        </div>
        <div class="scroller-container">
          <h4>Equipment needed</h4>
          <v-virtual-scroll :items="items" height="300" item-height="64" class="scroller">
            <template v-slot="{ item }">
              <v-list-item class="item">{{ item }}</v-list-item>
            </template>
          </v-virtual-scroll>
        </div>
      </v-row>
    </div>
  </v-overlay>
</template>

<script>
import DifficultyLevel from "./DifficultyLevel.vue";
export default {
  name: "overlayCard",
  props: { overlay: Boolean, routineData: Object },
  data() {
    return {
      items: [
        "ejercicio",
        "ejercicio",
        "ejercicio",
        "ejercicio",
        "ejercicio",
        "ejercicio",
        "ejercicio",
        "ejercicio",
        "ejercicio"
      ]
    };
  },
  components: { DifficultyLevel },
  computed: {
    formatTime() {
      let hours = Math.floor(this.routineData.time / 60);
      let minutes = this.routineData.time % 60;
      return `${hours !== 0 ? hours + "h" : ""} ${
        minutes !== 0 ? minutes + "'" : ""
      }`;
    },
  }
};
</script>

<style scoped>

.card-buttons{
  position: relative;
  justify-content: center;
}

::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
.item {
  background-color: rgba(255, 255, 255, 0.07);
  margin: 3px;
}

.root {
  z-index: 100 !important;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}

.scroller {
  background-color: black !important;
}

.scroller-container {
  width: 30%;
  margin: 10%;
  white-space: nowrap;
}

.card {
  position: relative;
  z-index: 2;
  width: 33vw;
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

.card-image {
  z-index: -1;
  position: absolute;
  width: 100% !important;
  height: 30%;
  object-fit: cover !important;
  object-position: right !important;
  filter: blur(2px) !important;
}

.type-label {
  font-size: 12px;
}

.routine-info {
  margin:0;
  padding: 0;
  text-align: center;
  font-size: 20px;
}
</style>
