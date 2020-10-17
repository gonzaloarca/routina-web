<template>
  <div class="routine">
    <div class="headers">
      <v-img src="../assets/routine1.jpg" class="routine-image" />
      <div class="routine-info">
        <v-btn text class="image-button"
          >Change routine image <v-icon>mdi-image</v-icon></v-btn
        >
        <div style="info-container">
          <h2>Now editing</h2>
          <h1>Routine 1</h1>
          <h2>Originally made by <span class="primary--text">UserX</span></h2>
        </div>
      </div>
      <div class="routine-buttons">
        <v-row>
          <v-col>
            <v-btn
              x-big
              rounded
              class="ma-0 primary black--text font-weight-black"
              ><span class="ma-10">START</span></v-btn
            >
            <v-btn class="primary--text" v-on:click="pressed = !pressed" icon>
              <v-icon v-if="pressed" class="like-icon" dark> mdi-heart </v-icon>
              <v-icon v-if="!pressed" class="like-icon" dark>
                mdi-heart-outline
              </v-icon>
            </v-btn>
          </v-col>
          <v-spacer />
          <v-col>
            <v-btn
              x-big
              rounded
              class="ma-0 white black--text font-weight-black"
              >Edit Rotuine<v-icon>mdi-pencil</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </div>
    </div>
    <v-row class="info-container ma-8">
      <v-col class="exercise-container">
        <div class="exercise-list">
          <h1 class="grey darken-1" style="text-align: center">
            Exercise List
          </h1>

          <div class="mx-12 list-container">
            <h2>Round 1</h2>
            <ExerciseList
              itemHeight="55"
              height="300"
              editable
              v-on:swap-up="swapUp"
              v-on:swap-down="swapDown"
              :exercises="exercises"
            />
          </div>

          <div class="mx-12 list-container">
            <h2>Round 2</h2>
            <ExerciseList itemHeight="55" height="300" :exercises="exercises" />
          </div>

          <div class="mx-12 list-container">
            <h2>Round 3</h2>
            <ExerciseList itemHeight="55" height="300" :exercises="exercises" />
          </div>
        </div>
      </v-col>
      <v-col class="more-info">
        <div class="additional-information">
          <h1 style="text-align: center">Additional Information</h1>
          <img src="../assets/additional-info.png" />
        </div>
        <div class="equipment-needed">
          <h1 style="text-align: center">Equipment Needed</h1>
          <EquipmentNeeded
            class="mx-12"
            style="font-size: 35px !important"
            itemHeight="60"
            height="300"
            :equipments="equipments"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import ExerciseList from "../components/ExerciseList.vue";
import EquipmentNeeded from "../components/EquipmentNeeded.vue";

export default {
  name: "Routine",
  components: { ExerciseList, EquipmentNeeded },
  data() {
    return {
      exercises: [
        "ejercicio1",
        "ejercicio2",
        "ejercicio3",
        "ejercicio4",
        "ejercicio5",
        "ejercicio6",
        "ejercicio7",
        "ejercicio8",
        "ejercicio9",
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
  methods: {
    swapUp(item) {
      if (item > 0) {
        this.swap(item, item - 1);
      }
    },
    swapDown(item) {
      if (item < this.exercises.length-1) {
        this.swap(item, item + 1);
      }
    },
    swap(id1, id2) {
      let aux = this.exercises[id1];
      this.exercises[id1] = this.exercises[id2];
      this.exercises[id2] = aux;
    },
  },
};
</script>

<style scoped  lang="scss">
.routine {
  background-color: black;
}

.headers {
  position: relative;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.routine-image {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.image-button {
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
  padding: 0;
}

.routine-info {
  margin: auto;
  justify-self: center;
  position: absolute;
  width: 50%;
  height: 50%;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: center;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  .routine-specifications {
    font-size: 25px;
    font-weight: 600;
    .type-label {
      font-size: 16px !important;
    }
  }
}

.routine-buttons {
  position: absolute;
  width: 100%;
  bottom: 0;
  backdrop-filter: blur(5px);
  background-image: linear-gradient(
    rgba(0, 0, 0, 1) 5%,
    rgba(0, 0, 0, 0.7) 40%,
    rgba(0, 0, 0, 0)
  );
  .row {
    width: 60%;
    margin: auto;
    text-align: center;
    .v-btn {
      margin-top: auto !important;
      margin-bottom: auto !important;
      margin-left: 10px;
      font-size: 20px !important;
      .like-icon {
        font-size: 40px;
      }
    }
  }
}

.info-container {
  width: 60%;
  margin: auto !important;
}

.exercise-container {
  margin: 0;
  padding: 0;
  width: 60%;
}

.more-info {
  margin: 0;
  padding: 0;
}

.exercise-list {
  width: 100%;
  background-color: rgb(66, 66, 66);
}

.additional-information {
  background-color: rgb(33, 33, 33);
  img {
    width: 100% !important;
  }
}

.equipment-needed {
  height: 400px;
  width: 100%;
  background-color: rgb(33, 33, 33);
}
</style>
