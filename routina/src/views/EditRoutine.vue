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
        <h1>
          {{ routineData.name }}
        </h1>
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
              <div style="height: 300px">
                <ExerciseList
                  itemHeight="55"
                  height="300"
                  editable
                  v-on:swap-up="(index) => swapUp(index, round)"
                  v-on:swap-down="(index) => swapDown(index, round)"
                  :exercises="round"
                />
              </div>
              <div class="py-4">
                <v-btn tile x-large block class="primary black--text"
                  >+ Add Exercise</v-btn
                >
              </div>
            </v-tab-item>
          </v-tabs-items>
        </div>
        <div class="mx-2">
          <v-btn tile x-large block class="my-4 black white--text"
            >+ Add Round</v-btn
          >
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
            editable
            v-on:swap-up="(index) => swapUp(index, routineData.equipments)"
            v-on:swap-down="(index) => swapDown(index, routineData.equipments)"
            :equipments="routineData.equipments"
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
      tab: null,
      routineData: {
        name: "Routine 1",
        rounds: [
          [
            { name: "ejercicio1" },
            { name: "ejercicio2" },
            { name: "ejercicio3" },
            { name: "ejercicio4" },
            { name: "ejercicio5" },
            { name: "ejercicio6" },
            { name: "ejercicio7" },
            { name: "ejercicio8" },
          ],
          [
            { name: "ejercicio1" },
            { name: "ejercicio2" },
            { name: "ejercicio3" },
            { name: "ejercicio4" },
            { name: "ejercicio5" },
            { name: "ejercicio6" },
            { name: "ejercicio7" },
            { name: "ejercicio8" },
          ],
          [
            { name: "ejercicio1" },
            { name: "ejercicio2" },
            { name: "ejercicio3" },
            { name: "ejercicio4" },
            { name: "ejercicio5" },
            { name: "ejercicio6" },
            { name: "ejercicio7" },
            { name: "ejercicio8" },
          ],
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

.exercise-container {
  margin: 0;
  padding: 0;
  width: 60%;
  background-color: rgb(66, 66, 66);
}

.more-info {
  margin: 0;
  padding: 0;
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
</style>
