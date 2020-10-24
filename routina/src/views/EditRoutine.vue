<template>
  <div class="routine">
    <div class="headers">
      <v-img src="../assets/routine1.jpg" class="routine-image" />
      <div class="routine-info">
        <div style="info-container">
          <h2>Now editing</h2>
          <h1
            style="
              width: 900px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            "
          >
            {{ routineData.name }}
          </h1>
          <div v-if="!routineData.name" style="height: 42px"></div>
          <h2>
            Originally made by<v-btn
              text
              class="btn-fmt primary--text"
              router
              :to="'/generic-profile/' + routineData.creator.id"
              ><span>{{ routineData.creator.username }}</span></v-btn
            >
          </h2>
        </div>
      </div>
    </div>
    <v-row class="info-container ma-8" justify="center">
      <v-col cols="6" class="exercise-container">
        <div class="mx-2 title-container">
          <div style="width: 550px; margin-top: 10px">
            <div class="ma-0 pa-0" style="background-color: rgba(0, 0, 0, 0.4)">
              <v-text-field
                style="
                  font-size: 25px;
                  font-weight: 500;
                  padding: 15px;
                  padding-bottom: 5px;
                "
                background-color="transparent"
                v-model="routineData.name"
                label="Routine Name"
                counter
                maxlength="50"
                append-icon="mdi-pencil"
              >
              </v-text-field>
            </div>
          </div>
        </div>

        <div
          class="mx-6 my-6"
          style="display: flex; justify-content: space-between"
        >
          <div>
            <h4 class="mx-2">Type</h4>
            <div class="select-container">
              <v-select
                :items="typeItems"
                label="Select Type"
                v-model="routineData.type"
                return-object
                single-line
                filled
                dense
                background-color="primary"
                class="black--text"
                light
              ></v-select>
            </div>
          </div>

          <div>
            <h4 class="mx-2">Muscle Group</h4>
            <div class="select-container">
              <v-select
                :items="muscleGroupItems"
                v-model="routineData.muscleGroup"
                label="Select Group"
                return-object
                single-line
                class="black--text"
                background-color="primary"
                filled
                dense
                light
              ></v-select>
            </div>
          </div>
          <div>
            <h4 class="mx-2">Difficulty Level</h4>
            <div class="select-container">
              <v-select
                :items="[1, 2, 3, 4]"
                label="Select Level"
                return-object
                v-model="routineData.difficultyLevel"
                single-line
                class="black--text"
                color="black"
                background-color="primary"
                light
                filled
                dense
              ></v-select>
            </div>
          </div>
        </div>

        <div class="exercise-list">
          <div
            class="center-v center-h"
            style="background-color: black; height: 300px"
            v-if="routineData.rounds.length == 0"
          >
            <div>
              <div class="center-h center-v"><h3>Add a new round!</h3></div>
              <div class="center-h center-v">
                <v-btn v-on:click="addRound" icon rounded
                  ><v-icon class="primary--text">mdi-plus-circle</v-icon></v-btn
                >
              </div>
            </div>
          </div>
          <v-tabs v-else background-color="black" v-model="tab">
            <v-tab
              v-for="round in routineData.rounds"
              v-model="round.name"
              :key="round.id"
            >
              {{ round.name }}
            </v-tab>
          </v-tabs>
          <v-tabs-items class="black" v-model="tab">
            <v-tab-item
              v-for="(round, index) in routineData.rounds"
              :key="round.id"
              class="mx-2"
            >
              <div class="round-buttons-container">
                <v-btn
                  class="primary black--text ma-2 font-weight-bold"
                  v-on:click="addRound"
                  rounded
                  ><v-icon left>mdi-plus-circle</v-icon>ADD ROUND</v-btn
                >
                <v-btn
                  v-on:click="removeRound(index)"
                  class="red darken-2 black--text font-weight-bold ma-2"
                  rounded
                  ><v-icon left>mdi-delete</v-icon>REMOVE ROUND</v-btn
                >
              </div>
              <div class="primary--text round-title-container">
                <div>
                  <v-text-field
                    v-model="round.name"
                    placeholder="round name"
                    style="width: 200px; font-size: 25px"
                    background-color="grey darken-4"
                    append-icon="mdi-pencil"
                    counter
                    maxlength="100"
                    class="my-2"
                  >
                  </v-text-field>
                </div>
              </div>
              <div style="height: 300px">
                <ExerciseList
                  itemHeight="55"
                  height="300"
                  editable
                  v-on:remove="(itemIndex) => removeExercise(index, itemIndex)"
                  v-on:edit="(itemIndex) => editExercise(index, itemIndex)"
                  v-on:swap-up="
                    (itemIndex) => swapUp(itemIndex, round.exercises)
                  "
                  v-on:swap-down="
                    (itemIndex) => swapDown(itemIndex, round.exercises)
                  "
                  :exercises="round.exercises"
                />

                <v-overlay :value="edittingExercise">
                  <v-card style="z-index=3">
                    <div>
                      <v-btn icon v-on:click="edittingExercise = false"
                        ><v-icon>mdi-close</v-icon></v-btn
                      >
                    </div>
                    <div style="margin-left: 20px; margin-bottom: 40px">
                      <div class="center-h"><h3>Change duration</h3></div>
                      <div class="center-h"><h4>(in minutes)</h4></div>
                    </div>
                    <div style="width: 500px">
                      <v-slider
                        v-model="sliderDuration"
                        thumb-label="always"
                        :min="0"
                        :max="60"
                      ></v-slider>
                    </div>
                    <div class="center-h">
                      <v-btn
                        class="title primary white--text ma-2"
                        rounded
                        small
                        v-on:click="saveExercise"
                        >SAVE</v-btn
                      >
                    </div>
                  </v-card>
                </v-overlay>
              </div>
              <div class="py-4" style="display: flex; justify-content: center">
                <v-btn
                  v-on:click="openExercise(index)"
                  class="primary black--text ma-2 font-weight-bold"
                  rounded
                  ><v-icon left>mdi-plus-circle</v-icon>ADD EXERCISE</v-btn
                >

                <v-overlay style="z-index: 5" :value="addingExercise">
                  <v-card>
                    <div style="display: flex">
                      <v-btn
                        v-on:click="addingExercise = false"
                        icon
                        style="margin-left: auto"
                        ><v-icon>mdi-close</v-icon></v-btn
                      >
                    </div>
                    <v-card-title>
                      <v-text-field
                        style="padding-top: 0"
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                      ></v-text-field>
                    </v-card-title>
                    <v-data-table
                      v-model="selected"
                      :headers="headers"
                      :footer-props="{ disableItemsPerPage: true }"
                      :items="exercises"
                      item-key="name"
                      :search="search"
                      :showSelect="true"
                      :items-per-page="5"
                    >
                      <template v-slot:[`item.image`]="{ item }">
                        <div class="data-table-image-container">
                          <img :src="item.image" />
                        </div>
                      </template>
                    </v-data-table>
                    <div class="center-h">
                      <v-btn
                        class="primary black--text ma-2 font-weight-bold"
                        v-on:click="addExercise"
                        rounded
                        >ADD</v-btn
                      >
                    </div>
                  </v-card>
                </v-overlay>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </div>
        <div
          class="mx-2"
          style="display: flex; justify-content: center; margin: 20px"
        >
          <v-btn
            v-on:click="createRoutine"
            class="title primary black--text ma-2 font-weight-bold"
            rounded
            >SAVE CHANGES</v-btn
          >
          <v-btn
            outlined
            style="border-color: rgb(255, 128, 0) !important; border-width: 2px"
            class="title black primary--text ma-2 font-weight-bold"
            rounded
            v-on:click="$router.go(-1)"
            >DISCARD CHANGES</v-btn
          >
        </div>
      </v-col>
      <v-col cols="5" class="more-info">
        <div class="description-container">
          <div class="time-container">
            <v-icon>mdi-timer-outline</v-icon>
            <h3>
              Estimated Duration Time: {{ this.routineData.duration }} minutes
            </h3>
          </div>
          <div class="description">
            <div class="description-title my-3">
              <h3>Description</h3>
            </div>

            <v-textarea
              style="
                font-size: 17px;
                margin-bottom: 20px;
                margin-left: 20px;
                margin-right: 20px;
              "
              placeholder="Add a description"
              background-color="black"
              v-model="routineData.description"
              solo
              counter
              maxlength="100"
              no-resize
              :rules="[(v) => v.length <= 150 || 'Max 150 characters']"
              flat
            >
            </v-textarea>
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
    <v-footer color="black" height="100"></v-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import ExerciseList from "../components/ExerciseList.vue";
import {
  RoutinesApi,
  Routine,
  Cycle,
  Exercise,
  ImageModel,
} from "../services/routines";
//import EquipmentNeeded from "../components/EquipmentNeeded.vue";
//import {Images} from "../services/images.js";
//import EquipmentNeeded from "../components/EquipmentNeeded.vue";

export default {
  name: "Routine",
  components: { ExerciseList },
  data() {
    return {
      tab: null,
      search: null,
      selected: [],
      roundIndex: 0,
      editingRoundName: false,
      addingExercise: false,
      edittingExercise: false,
      exerciseForEdit: null,
      idGiver: 0,
      sliderDuration: 1,
      typeItems: ["Cardio", "Strength", "HIIT", "Yoga", "Pilates"],
      muscleGroupItems: ["Full Body", "Legs", "Arms"],

      headers: [
        { text: "Name", value: "name" },
        { text: "Picture", value: "image" },
      ],
      exercises: [],
      routineData: {
        name: null,
        type: null,
        difficultyLevel: null, // es [ rookie, beginner, intermediate, advanced, expert ]
        muscleGroup: null,
        description: "",
        duration: 0,
        creator: {
          id: 0,
          username: "",
        },
        repeats: 0,
        rounds: [{ name: "round 1", exercises: [] }],
      },
      pressed: false,
      selectedFile: null,
    };
  },
  async mounted() {
    this.exercises = await this.getExercises();
    await this.getExercisesImages();
    let id = this.$route.params.id;
    if (id == -1) {
      return;
    }
    let routine = await RoutinesApi.getFullRoutine(id);
    this.routineData.creator = routine.creator;
    this.routineData.name = routine.name;
    this.routineData.type = routine.type;
    this.routineData.muscleGroup = routine.muscleGroup;
    this.routineData.difficultyLevel = routine.difficultyLevel;
    this.routineData.rounds = [];
    this.routineData.description = routine.detail;
    this.routineData.duration = 0;
    for (let round = 0; round < routine.cycles.length; round++) {
      let cycle = routine.cycles[round];
      let tmpRound = { name: cycle.name, exercises: [] };
      for (let exercise = 0; exercise < cycle.exercises.length; exercise++) {
        this.routineData.duration += cycle.exercises[exercise].duration;
        let ex = Object.assign({}, cycle.exercises[exercise]);
        ex.idGiver = this.idGiver;
        tmpRound.exercises.push(ex);
        this.idGiver += 2;
      }
      this.routineData.rounds.push(tmpRound);
    }
  },

  methods: {
    getExercisesImages: async function () {
      try {
        for (const exercise of this.exercises) {
          const res = await RoutinesApi.getExerciseImages(1, 1, exercise.id);
          exercise.image = await res.results[0].url;
        }
      } catch (error) {
        console.log(error);
      }
    },
    getExercises: async function () {
      const res = await RoutinesApi.getCycleExcercises(1, 1);
      return res.results;
    },
    setDuration(duration) {
      let result = "";

      if (duration < 15) {
        result = "under 15";
      } else if (duration < 30) {
        result = "15-30";
      } else if (duration < 45) {
        result = "30-45";
      } else if (duration < 60) {
        result = "45-60";
      } else {
        result = "above 60";
      }
      return result;
    },

    getDuration() {
      this.routineData.duration = 0;
      this.routineData.rounds.forEach((round) => {
        round.exercises.forEach((exercise) => {
          this.routineData.duration += exercise.duration;
        });
      });
    },

    async createRoutine() {
      //primero validar que haya al menos una rutina
      //crear la rutina
      let levels = ["rookie", "beginner", "intermediate", "advanced", "expert"];
      const routine = new Routine(
        this.routineData.name,
        `${this.routineData.description}|${
          this.routineData.muscleGroup
        }|${this.setDuration(this.duration)}`,
        true,
        levels[this.routineData.difficultyLevel],
        { id: this.typeItems.indexOf(this.routineData.type) + 1 }
      );
      const res = await RoutinesApi.createRoutine(routine);
      const routineId = res.id;
      //crear los ciclos
      for (const cycle of this.routineData.rounds) {
        let index = this.routineData.rounds.indexOf(cycle);
        const cycleResponse = await RoutinesApi.createRoutineCycle(
          routineId,
          new Cycle(cycle.name, "detail", "exercise", index + 1, 1)
        );

        const cycleId = cycleResponse.id;
        //crear los ejercicios de cada cycle
        for (const exercise of cycle.exercises) {
          const exerciseResponse = await RoutinesApi.createCycleExercise(
            routineId,
            cycleId,
            new Exercise(exercise.name, "", "exercise", exercise.duration, 0)
          );
          const exerciseId = exerciseResponse.id;
          //subir las imagenes de cada ejercicio
          await RoutinesApi.createExerciseImage(
            routineId,
            cycleId,
            exerciseId,
            new ImageModel(1, exercise.image)
          );
        }
      }

      console.log(routineId);

      this.$router.replace("/routine/" + routineId);
    },

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
      let aux = elements[id1];
      elements[id1] = elements[id2];
      elements[id2] = aux;
      elements[id2].idGiver++;
      elements[id2].idGiver--;
      elements[id1].idGiver++;
      elements[id1].idGiver--;
    },
    addRound() {
      this.routineData.rounds.push({
        name: "round " + (this.routineData.rounds.length + 1),
        exercises: [],
      });
    },
    removeRound(roundIndex) {
      this.tab = 0;
      this.routineData.rounds.splice(roundIndex, 1);
      this.getDuration();
    },
    openExercise(roundIndex) {
      this.addingExercise = true;
      this.roundIndex = roundIndex;
      this.selected = [];
    },
    addExercise() {
      this.addingExercise = false;
      let cycle = this.routineData.rounds[this.roundIndex];
      this.selected.forEach((exercise) => {
        this.routineData.duration += exercise.duration;
        let ex = Object.assign({}, exercise);
        ex.idGiver = this.idGiver;
        this.idGiver += 2;
        cycle.exercises.push(ex);
      });
    },
    removeExercise(roundIndex, exerciseIndex) {
      let cycle = this.routineData.rounds[roundIndex];
      this.routineData.duration -= cycle.exercises[exerciseIndex].duration;
      cycle.exercises.splice(exerciseIndex, 1);
    },
    editExercise(roundIndex, exerciseIndex) {
      this.edittingExercise = true;
      this.exerciseForEdit = this.routineData.rounds[roundIndex].exercises[
        exerciseIndex
      ];
      this.sliderDuration = this.exerciseForEdit.duration;
    },
    saveExercise() {
      this.edittingExercise = false;
      this.routineData.duration +=
        this.sliderDuration - this.exerciseForEdit.duration;
      this.exerciseForEdit.duration = this.sliderDuration;
    },
  },
};
</script>

<style  lang="scss">
.round-title-container {
  display: flex;
  justify-content: center;
  .v-text-field__slot {
    input {
      color: #ff8000 !important;
      text-transform: uppercase;
    }
  }
}
</style>

<style scoped  lang="scss">
@import "../sass/variables";

.data-table-image-container {
  height: 50px;
  width: 100px;
  position: relative;
  display: flex;
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.routine {
  background-color: black;
}

.select-container {
  width: 150px;
  position: relative;

  z-index: 2;

  .v-input {
    margin: 0;
    padding: 0;
  }
}

.headers {
  position: relative;
  height: 300px;
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

.btn-fmt {
  text-transform: none;
  font-size: 16px;
  font-weight: 600;
}

.routine-info {
  margin: auto;
  justify-self: center;
  position: absolute;
  width: 1000px;
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
  width: $content-container-width - 150px;
  margin: auto !important;
  margin-top: 20px !important;
}

.title-container {
  display: flex;
  align-items: center;
  padding-top: 20px;
  justify-content: center;
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
      font-size: 50px;
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
  }
}

.round-buttons-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-top: 20px;
}

.round-title-container {
  display: flex;
  justify-content: center;
}
</style>
