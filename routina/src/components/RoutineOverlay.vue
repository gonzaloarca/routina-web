<template>
  <v-overlay class="root" :value="overlay">
    <div class="card">
      <v-btn icon text absolute v-on:click="closeOverlay" class="close-button"
        ><v-icon>mdi-close</v-icon></v-btn
      >
      <div class="headers">
        <div class="backdrop-card-image"></div>
        <v-img class="card-image" :src="routineData.image" />
        <div class="card-title white--text">
          <h1 class="my-0 text-uppercase">{{ routineData.routineName }}</h1>
          <p class="user-label">
            by
            <v-btn text flat class="btn-fmt primary--text" router :to="'/generic-profile/'+routineData.routineId"><span class="primary--text">{{ routineData.author }}</span></v-btn>
          </p>
        </div>
        <div style="display: flex; justify-content: center">
          <v-btn
            class="white black--text"
            rounded
            x-small
            style="font-size: 13px"
            router
            :to="'/routine/' + routineData.id +'/edit-routine'"
            ><v-icon>mdi-pencil</v-icon>EDIT ROUTINE</v-btn
          >
        </div>
        <v-row class="routine-info">
          <v-col class="text-uppercase">
            <span class="type-label">ROUTINE TYPE</span>
            <br />
            <span class="data-display">{{ routineData.type }}</span>
          </v-col>
          <v-col class="text-uppercase">
            <span class="type-label">DURATION</span>
            <br />
            <v-icon dense>mdi-timer-outline</v-icon>
            <span class="data-display">{{ formatTime }}</span>
          </v-col>
          <v-col class="text-uppercase">
            <span class="type-label">MUSCLE GROUP</span>
            <br />
            <span class="data-display">{{ routineData.muscleGroup }}</span>
          </v-col>
          <v-col>
            <span class="type-label">DIFFICULTY</span>
            <br />
            <DifficultyLevel style="display: inline" :difficulty="2" />
          </v-col>
          <v-col class="text-uppercase">
            <span class="type-label">Ratings</span>
            <v-rating
              :length="5"
              :size="18"
              dense
              background-color="white"
              color="white"
              :readonly="true"
              :value="3"
            ></v-rating>
          </v-col>
        </v-row>
        <v-row class="description-container">
          <div class="description">
            <h3>DESCRIPTION</h3>
            <p class="description-content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              ullam est quibusdam dolorem corrupti rem vero minima veniam
              delectus tempora et autem accusamus nobis quod placeat excepturi
              eveniet nisi accusantium aliquid error reiciendis molestias, vel
              sunt. Quas laborum nisi vero.
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
            :to="'routine/'+routineData.routineId"
            class="goto-button ma-0 primary black--text font-weight-bold"
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
        </div>
      </v-row>
      <v-row style="display:flex; align-items:center; justify-content:center;">
      <v-col class="exercise-container">
        <div class="exercise-list" style="margin-top:10px;">
          <div style="width:100%; background-color:grey darken-5; ">
            <v-tabs class="tab-fmt" v-model="tab" :fixed-tabs="true">
            <v-tab
              v-for="round in rounds"
              v-model="round.name"
              :key="round.name"
              class="tab-fmt"
              
            >
              {{ round.name }}
            </v-tab>
          </v-tabs>
          <div class="ma-5" style="background-color:rgb(30, 30, 30);">
            <v-tabs-items class="black" v-model="tab">
            <v-tab-item
              v-for="round in rounds"
              :key="round.name"
              class="mx-2"
            >
              <div style="height: 250px">
                <ExerciseList
                  itemHeight="55"
                  height="300"
                  
                  v-on:swap-up="(index) => swapUp(index, round.exercises)"
                  v-on:swap-down="(index) => swapDown(index, round.exercises)"
                  :exercises="round.exercises"
                />
              </div>
            
            </v-tab-item>
          </v-tabs-items>  
          </div>
          </div>  
          
        </div>
      </v-col>
      </v-row>
      <!-- <v-row class="scrollers">
        <v-col class="scroller-container">
          <h4>Exercise List</h4>
          <div class="scroller">
            <v-list-item class="item" v-for="item in excercises" :key="item.id">
              <v-row class="excercise-row">
                <v-col class="ma-0 pa-0"
                  ><img :src="routineData.image"
                /></v-col>
                <v-col> duration </v-col>
                <v-col> {{ item }} </v-col>
              </v-row>
            </v-list-item>
          </div>
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
        </v-col> -->
      <!-- </v-row> --> 
    </div>
  </v-overlay>
</template>

<script>
import DifficultyLevel from "./DifficultyLevel.vue";
import ExerciseList from "./ExerciseList.vue";
export default {
  name: "RoutineOverlay",
  props: { overlay: Boolean, routineData: Object },

  data() {
    return {
      rounds: [{
        name:"warm up",
        exercises:[
          { name: "ejercicio1" },
          { name: "ejercicio2" },
          { name: "ejercicio3" },
          { name: "ejercicio4" },
          { name: "ejercicio5" },
          { name: "ejercicio6" },
          { name: "ejercicio7" },
          { name: "ejercicio8" },
        ],},
        {name:"round 1",
        exercises: [
          { name: "ejercicio1" },
          { name: "ejercicio2" },
          { name: "ejercicio3" },
          { name: "ejercicio4" },
          { name: "ejercicio5" },
          { name: "ejercicio6" },
          { name: "ejercicio7" },
          { name: "ejercicio8" },
        ],},
        {name:"round 2",
        exercises:[
          { name: "ejercicio1" },
          { name: "ejercicio2" },
          { name: "ejercicio3" },
          { name: "ejercicio4" },
          { name: "ejercicio5" },
          { name: "ejercicio6" },
          { name: "ejercicio7" },
          { name: "ejercicio8" },
        ],},
      ],
      tab:null,
      pressed: false,
    };
  },
  components: { DifficultyLevel, ExerciseList },
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

.close-button {
  position: absolute;
  right: 0px;
  z-index: 10;
}

.btn-fmt{

  text-transform: none;
  font-size:16px;
  font-weight:600;
}

.card-buttons-container {
  position: relative;
  justify-content: center;
  .card-buttons {
    position: relative;
    margin-top: -16px;
  }
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
  border-bottom: 5px solid black;
  height: 200px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.exercise-list {
  width: 700px;
  background-color: rgb(20, 20, 20);
  min-height:fit-content;
  margin-bottom: 10px;
}
.scroller-container {
  padding: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  // margin-right: 50px;
  // margin-left: 50px;
  white-space: nowrap;
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
.tab-fmt{
  background-color:rgb(50, 50, 50);
  text-decoration-color: white;
  
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

.type-label {
  font-size: 12px;
  font-weight: 600;
  opacity: 0.5;
}

.data-display {
  margin-top: -20px;
  font-weight: 600;
}

.user-label {
  margin-top: -7px;
  margin-bottom: 2px;
}
.routine-info {
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 20px;
}

.description-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  backdrop-filter: brightness(0.8);
  .description {
    $y-margin: 10px;

    margin-top: $y-margin;
    margin-bottom: $y-margin;

    h3 {
      opacity: 0.5;
      font-weight: 600;
      font-size: 15px;
    }

    .description-content {
      overflow: hidden;
      text-overflow: ellipsis;
      width: 600px;
      white-space: nowrap;
      height: 30px;
      font-weight: 600;
      font-size: 15px;
    }
  }
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

.goto-button:hover {
  background-color: white !important;
}

.content-container {
  max-width: $content-container-width - 150px;
  align-content: center;
  margin: 0 auto 30px;
  padding: 30px 30px 30px 30px;
}

.exercise-container {
  margin: 0;
  padding: 0;
  width: 700px;
  overflow:hidden;
  display:flex;
  align-items:center;
  justify-content:center;
}
</style>
