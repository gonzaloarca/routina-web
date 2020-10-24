<template>
  <div class="routine">
    <div class="headers">
      <v-img src="../assets/routine1.jpg" class="routine-image" />
      <div class="routine-info">
        
        <div style="info-container">
          <h2>Now editing</h2>
          <h1>{{ routineData.name }}</h1>
          <h2>Originally made by <span class="primary--text">UserX</span></h2>
        </div>
      </div>
    </div>
    <v-row class="info-container ma-8">
      <v-col class="exercise-container">
        <div class="mx-2 title-container">
          <div style="width: 250px; margin-top: 10px">
            <div class="ma-0 pa-0" style="background-color: rgba(0, 0, 0, 0.4)">
              <v-text-field
                style="
                  font-size: 30px;
                  font-weight: 600;
                  margin-left: 10px;
                  margin-right: 10px;
                "
                background-color="transparent"
                v-model="routineData.name"
                placeholder="routine name"
                append-icon="mdi-pencil"
                hide-details
                dense
              >
              </v-text-field>
            </div>
          </div>
        </div>

        <div class="mx-3 my-4 types-container">
          <div class="my-2 center-v">
            <h3 class="mx-2">Type</h3>
            <div class="select-container">
              <v-select
                :items="typeItems"
                label="Type"
                v-model="routineData.type"
                return-object
                single-line
                class="primary black--text"
                color="black"
                light
                dense
                hide-details="true"
              ></v-select>
            </div>
          </div>
          <div class="my-2 center-v">
            <h3 class="mx-2">Muscle Group</h3>
            <div class="select-container">
              <v-select
                :items="muscleGroupItems"
                v-model="routineData.muscleGroup"
                label="Muscle Group"
                return-object
                single-line
                class="primary black--text"
                color="black"
                light
                dense
                hide-details="true"
              ></v-select>
            </div>
          </div>
          <div class="my-2 center-v">
            <h3 class="mx-2">Difficulty Level</h3>
            <div class="select-container">
              <v-select
                :items="[1, 2, 3, 4]"
                label="level"
                return-object
                v-model="routineData.difficultyLevel"
                single-line
                class="primary black--text"
                color="black"
                light
                dense
                hide-details="true"
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
              <div class="center-h center-v"><h2>ADD A NEW ROUND!</h2></div>
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
                  class="primary black--text ma-2"
                  v-on:click="addRound"
                  rounded
                  small
                  ><v-icon>mdi-plus-circle</v-icon>ADD ROUND</v-btn
                >
                <v-btn
                  v-on:click="removeRound(index)"
                  class="red darken-2 black--text ma-2"
                  rounded
                  small
                  ><v-icon>mdi-delete</v-icon>REMOVE ROUND</v-btn
                >
              </div>
              <div class="primary--text round-title-container">
                <div>
                  <v-text-field
                    v-model="round.name"
                    placeholder="round name"
                    style="width: 200px; font-size: 25px"
                    background-color="transparent"
                    append-icon="mdi-pencil"
                    dense
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
                  <v-card style="z-index=30">
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
                  class="primary black--text ma-2"
                  rounded
                  small
                  ><v-icon>mdi-plus-circle</v-icon>ADD EXERCISE</v-btn
                >

                <v-overlay style="z-index: 100" :value="addingExercise">
                  <v-card  style="max-height:70vh; overflow-y:scroll">
                    <div style="display: flex;">
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
                        class="title primary black--text ma-2"
                        v-on:click="addExercise"
                        rounded
                        small
                        >ADD</v-btn
                      >
                    </div>
                  </v-card>
                </v-overlay>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </div>
        <div class="mx-2" style="display: flex; justify-content: center">
          <v-btn v-on:click="createRoutine" class="title primary black--text ma-2" rounded small
            >SAVE CHANGES</v-btn
          >
          <v-btn
            outlined
            style="border-color: rgb(255, 128, 0) !important; border-width: 2px"
            class="title black primary--text ma-2"
            rounded
            small
            >DISCARD CHANGES</v-btn
          >
        </div>
      </v-col>
      <v-col class="more-info">
        <div class="description-container">
          <div class="time-container">
            <v-icon>mdi-timer-outline</v-icon>
            <h3>Estimated Duration Time: {{this.routineData.duration}} minutes</h3>
          </div>
          <div class="description">
            <div class="description-title">
              <h3>Description</h3>
              <v-btn x-large icon><v-icon>mdi-pencil</v-icon></v-btn>
            </div>

            <v-textarea
              style="
                font-size: 17px;
                margin-bottom: 20px;
                margin-left: 20px;
                margin-right: 20px;
              "
              placeholder="Enter here your description"
              background-color="black"
              v-model="routineData.description"
              solo
              counter
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
      idGiver:0,
      sliderDuration: 1,
      typeItems: ["Cardio", "Strength", "HIIT","Yoga","Pilates"],
      muscleGroupItems: ["Full body", "Legs", "Arms"],

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
        repeats: 0,
        rounds: [{ name: "round 1", exercises: [] }],
      },
      pressed: false,
      selectedFile: null,
    };
  },
  async mounted() {
    console.log(
      "GEEEEEEEEEEEEET   EXERCISEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEES"
    );
    this.exercises = await this.getExercises();

    

    let id = this.$route.params.id;
    console.log(id);
    let routine = await RoutinesApi.getFullRoutine(id);
    console.log(routine);
    this.routineData.name = routine.name;
    this.routineData.type=routine.type;
    this.routineData.muscleGroup = routine.muscleGroup;
    this.routineData.difficultyLevel = routine.difficultyLevel;
    this.routineData.rounds=[];
    this.routineData.duration=0;
    for(let round = 0; round<routine.cycles.length; round++){
      let cycle = routine.cycles[round];
      this.routineData.rounds[round]={name:cycle.name, exercises:[]};
      for(let exercise = 0; exercise<cycle.exercises.length; exercise++){
          this.routineData.duration += cycle.exercises[exercise].duration;
          let ex = cycle.exercises[exercise];
          this.routineData.exercises[exercise] ={idGiver:this.idGiver, name:ex.name, duration:ex.duration, image:ex.image};
          this.routineData.exercises[exercise].idGiver = this.idGiver;
          this.idGiver++;
      }
    }
    await this.getExercisesImages();


  },
  methods: {
    getExercisesImages: async function () {
      console.log(this.exercises);
      try {
        for (const exercise of this.exercises) {
          const res = await RoutinesApi.getExerciseImages(1, 1, exercise.id);
          exercise.image = await res.results[0].url;
        }
        console.log(this.exercises);
      } catch (error) {
        console.log(error);
      }
    },
    getExercises: async function () {
      const res = await RoutinesApi.getCycleExcercises(1, 1);
      console.log(res);
      return res.results;
    },
    setDuration(duration){
      let result = "";
     
      if(duration <15){
        result = "under 15";
      }else if(duration<30){
        result = "15-30";
      }else if(duration<45){
        result = "30-45";
      }else if(duration<60){
        result = "45-60";
      }else{
        result="above 60";
      }
      return result;
    },
    
  async createRoutine() {
        //primero validar que haya al menos una rutina
        //crear la rutina
        let levels=["rookie","beginner","intermediate","advanced","expert"];
        const routine = new Routine(
            this.routineData.name,
            `${this.routineData.description}|${this.routineData.muscleGroup}|${this.setDuration(this.duration)}`,
            true,
            levels[this.routineData.difficultyLevel],
            {id:this.typeItems.indexOf(this.routineData.type)}
        );
        const res = await RoutinesApi.createRoutine(routine);
        const routineId = res.id;
        //crear los ciclos
        for (const cycle of this.routineData.rounds) {
            let index = this.routineData.rounds.indexOf(cycle);
            const cycleResponse = await RoutinesApi.createRoutineCycle(
                routineId,
                new Cycle(cycle.name, "detail", "exercise", index+1, 1)
            );

            const cycleId = cycleResponse.id;
            //crear los ejercicios de cada cycle
            for (const exercise of cycle.exercises) {
                const exerciseResponse = await RoutinesApi.createCycleExercise(
                    routineId,
                    cycleId,
                    new Exercise(exercise.name,"", "exercise", exercise.duration, 0)
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
      console.log(res);
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
      this.tab--;
      this.routineData.rounds.splice(roundIndex, 1);
    },
    openExercise(roundIndex) {
      this.addingExercise = true;
      this.roundIndex = roundIndex;
      this.selected = [];
    },
    addExercise() {
      this.addingExercise = false;
      let cycle = this.routineData.rounds[this.roundIndex];
      this.selected.forEach(exercise =>{
        this.routineData.duration+=exercise.duration;
        let ex = Object.assign({}, exercise);
        ex.idGiver=this.idGiver;
        this.idGiver++;
        cycle.exercises.push(ex);
      });
      
    },
    removeExercise(roundIndex, exerciseIndex) {
      let cycle = this.routineData.rounds[roundIndex];
      this.routineData.duration -= cycle.exercises[exerciseIndex];
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
      this.edittingExercise=false;
      this.routineData.duration += this.sliderDuration - this.exerciseForEdit.duration;
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

.types-container {
  background-color: transparent;
}

.select-container {
  width: 100px;
  position: relative;
  margin-left: 15px;
  margin-top: 0;
  padding: 0;
  z-index: 30;
  right: 0;
  .v-input {
    margin: 0;
    padding: 0;
  }
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
