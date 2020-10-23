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
    </div>
    <v-row class="info-container ma-8">
      <v-col class="exercise-container">
        <div class="mx-2 title-container">
          <h1>
            {{ routineData.name }}
          </h1>
          <v-btn x-large style="z-index: 10" icon
            ><v-icon>mdi-pencil</v-icon></v-btn
          >
        </div>

        <div class="types-container"></div>

        <div class="exercise-list">
          <v-tabs background-color="black" v-model="tab">
            <v-tab v-for="round in routineData.rounds" :key="round.id">
              Round {{ routineData.rounds.indexOf(round) + 1 }}
            </v-tab>
          </v-tabs>
          <v-tabs-items class="black" v-model="tab">
            <v-tab-item
              v-for="round in routineData.rounds"
              :key="round.id"
              class="mx-2"
            >
              <div class="round-buttons-container">
                <v-btn class="primary black--text ma-2" rounded small
                  ><v-icon>mdi-plus-circle</v-icon>ADD ROUND</v-btn
                >
                <v-btn class="red darken-2 black--text ma-2" rounded small
                  ><v-icon>mdi-delete</v-icon>REMOVE ROUND</v-btn
                >
              </div>
              <div class="primary--text round-title-container">
                <h1 class="text-capitalize">{{ round.name }}</h1>
                <v-btn x-large style="z-index: 10" icon
                  ><v-icon>mdi-pencil</v-icon></v-btn
                >
              </div>
              <div style="height: 300px">
                <ExerciseList
                  itemHeight="55"
                  height="300"
                  editable
                  v-on:swap-up="(index) => swapUp(index, round.exercises)"
                  v-on:swap-down="(index) => swapDown(index, round.exercises)"
                  :exercises="round.exercises"
                />
              </div>
              <div class="py-4" style="display: flex; justify-content: center">
                <v-btn class="primary black--text ma-2" rounded small
                  ><v-icon>mdi-plus-circle</v-icon>ADD EXERCISE</v-btn
                >
              </div>
            </v-tab-item>
          </v-tabs-items>
        </div>
        <div class="mx-2" style="display:flex; justify-content:center">
          <v-btn class=" title primary black--text ma-2" rounded small
            >SAVE CHANGES</v-btn
          >
          <v-btn outlined style="border-color:rgb(255,128,0) !important;border-width:2px" class=" title black primary--text ma-2" rounded small
            >DISCARD CHANGES</v-btn
          >
        </div>
      </v-col>
      <v-col class="more-info">
        <div class="description-container">
          <div class="time-container">
            <v-icon>mdi-timer-outline</v-icon>
            <h3>Estimated Duration Time: 45 minutes</h3>
          </div>
          <div class="description">
            <div class="description-title">
              <h3>Description</h3>
              <v-btn x-large icon><v-icon>mdi-pencil</v-icon></v-btn>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              totam inventore animi ratione, odit quia praesentium temporibus
              culpa hic exercitationem voluptates! Illo ad minus at, minima in
              et ullam quam praesentium expedita, delectus dolorum vitae. Illum
              minima fuga repudiandae tempore.
            </p>
          </div>
        </div>
        <!-- <div class="additional-information">
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
            editable
            v-on:swap-up="(index) => swapUp(index, routineData.equipments)"
            v-on:swap-down="(index) => swapDown(index, routineData.equipments)"
            :equipments="routineData.equipments"
          />
        </div> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import ExerciseList from "../components/ExerciseList.vue";
//import EquipmentNeeded from "../components/EquipmentNeeded.vue";

export default {
  name: "Routine",
  components: { ExerciseList },
  data() {
    return {
      tab: null,
      routineData: {
        name: "Routine 1",
        rounds: [
          {
            name: "round 1",
            exercises: [
              { name: "ejercicio1" },
              { name: "ejercicio2" },
              { name: "ejercicio3" },
              { name: "ejercicio4" },
              { name: "ejercicio5" },
              { name: "ejercicio6" },
              { name: "ejercicio7" },
              { name: "ejercicio8" },
            ],
          },
          {
            name: "round 2",
            exercises: [
              { name: "ejercicio1" },
              { name: "ejercicio2" },
              { name: "ejercicio3" },
              { name: "ejercicio4" },
              { name: "ejercicio5" },
              { name: "ejercicio6" },
              { name: "ejercicio7" },
              { name: "ejercicio8" },
            ],
          },
          {
            name: "round 3",
            exercises: [
              { name: "ejercicio1" },
              { name: "ejercicio2" },
              { name: "ejercicio3" },
              { name: "ejercicio4" },
              { name: "ejercicio5" },
              { name: "ejercicio6" },
              { name: "ejercicio7" },
              { name: "ejercicio8" },
            ],
          },
        ],
        equipments: [
          "equipo1",
          "equipo2",
          "equipo3",
          "equipo4",
          "equipo5",
          "equipo6",
          "equipo7",
          "equipo8",
          "equipo9",
        ],
      },
      pressed: false,
    };
  },
  methods: {
    swapUp(item, elements) {
      if (item > 0) {
        this.swap(item, item - 1, elements);
      }
    },
    swapDown(item, elements) {
      if (item < elements.length - 1) {
        this.swap(item, item + 1, elements);
      }
    },
    swap(id1, id2, elements) {
      let aux = elements[id1].name;
      elements[id1].name = elements[id2].name;
      elements[id2].name = aux;
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

.title-container {
  display: flex;
  align-items: center;
}

.exercise-container {
  margin: 0;
  padding: 0;
  width: 60%;
  background-color: rgb(66, 66, 66);
}

.more-info {
  margin: 0;
  padding: 0;
  height: fit-content;
}

.exercise-list {
  width: 95%;
  margin: auto;
  background-color: black !important;
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

.description-container {
  display: grid;
  background-color: rgb(33, 33, 33);
  .time-container {
    display: flex;
    background-color: rgb(116, 116, 116);
    .v-icon {
      color: black;
      font-size: 60px;
      padding: 10px;
      background-color: white;
    }
    h3 {
      margin: auto;
    }
  }

  .description {
    height: fit-content;
    .description-title {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    p {
      background-color: black;
      margin-left: 20px;
      margin-right: 20px;
    }
  }
}

.round-buttons-container {
  display: flex;
  justify-content: center;
}

.round-title-container {
  display: flex;
  justify-content: center;
}
</style>
