<template>
  <v-overlay class="root" :value="overlay">
    <div class="card">
      <v-btn icon text absolute v-on:click="closeOverlay"
        ><v-icon>mdi-close</v-icon></v-btn
      >
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
          <span class="type-label">DURATION</span>
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
          <span class="type-label">DIFFICULTY</span>
          <br />
          <DifficultyLevel style="display: inline" :difficulty="2" />
        </v-col>
      </v-row>
      <v-row class="card-buttons">
        <v-btn
          x-small
          style="
            margin-top: auto !important;
            margin-bottom: auto !important;
            font-size: 15px !important;
          "
          rounded
          class="goto-button ma-0 primary black--text font-weight-black"
          >GO TO ROUTINE</v-btn
        >
        <v-btn
          v-on:click="pressed = !pressed"
          icon
          class="like-button primary--text"
        >
          <v-icon v-if="pressed" class="like-icon" dark> mdi-heart </v-icon>
          <v-icon v-if="!pressed" class="like-icon" dark>
            mdi-heart-outline
          </v-icon>
        </v-btn>
      </v-row>
      <v-row class="scrollers">
        <v-col class="scroller-container">
          <h4>Excercise List</h4>
          <v-virtual-scroll
            :items="excercises"
            height="300"
            item-height="55"
            class="scroller"
          >
            <template v-slot="{ item }">
              <v-list-item class="item">
                <v-row class="excercise-row">
                  <v-col class="ma-0 pa-0"
                    ><img :src="routineData.image"
                  /></v-col>
                  <v-col> duration </v-col>
                  <v-col> {{ item }} </v-col>
                </v-row>
              </v-list-item>
            </template>
          </v-virtual-scroll>
        </v-col>

        <v-col class="scroller-container">
          <h4>Equipment needed</h4>
          <v-virtual-scroll
            :items="equipments"
            height="300"
            item-height="55"
            class="scroller"
          >
            <template v-slot="{ item }">
              <v-list-item class="item">
                <v-row class="equipment-row">
                  <img :src="routineData.image" />
                  <v-col> {{ item }} </v-col>
                </v-row>
              </v-list-item>
            </template>
          </v-virtual-scroll>
        </v-col>
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
      excercises: [
        "ejercicio",
        "ejercicio",
        "ejercicio",
        "ejercicio",
        "ejercicio",
        "ejercicio",
        "ejercicio",
        "ejercicio",
        "ejercicio",
      ],
      equipments: [
        "equipo",
        "equipo",
        "equipo",
        "equipo",
        "equipo",
        "equipo",
        "equipo",
        "equipo",
        "equipo",
      ],
      pressed: false,
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
.card-buttons {
  position: relative;
  justify-content: center;
}



::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
.item {
  padding: 0;
  background-color: rgba(255, 255, 255, 0.07);
  margin: 5px;
}

.root {
  z-index: 100 !important;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}

.scrollers {
  width: 100%;
  margin: auto !important;
  justify-content: center;
  padding: 0 !important;
}
.scroller {
  background-color: black !important;
  border-bottom:5px solid black;
}

.scroller-container {
  width: 45%;
  padding: 0;
  margin: 10px;
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
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 20px;
}
.excercise-row {
  position: relative;
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 12px;
  img {
    position: absolute;
    width: 20% !important;
    height: 100%;
    object-fit: cover !important;
    object-position: right !important;
  }
}

.equipment-row {
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  overflow: hidden;
  img {
    margin: 0;
    z-index: 0;
    position: absolute;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    object-position: right !important;
    // filter: blur(2px);
  }
  .col {
    margin: auto;
    padding: 0;
    z-index: 2;
  }
}

.goto-button:hover{
  background-color: white !important;
}
</style>
