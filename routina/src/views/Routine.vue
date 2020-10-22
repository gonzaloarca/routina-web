<template>
  <div class="routine">
    <div class="headers">
      <v-img src="../assets/routine1.jpg" class="routine-image" />
      <div class="routine-info">
        <h1>Routine 1</h1>
        <h2>by <span class="primary--text">UserX</span></h2>
        <v-row class="routine-specifications">
          <v-col class="text-uppercase">
            <span class="type-label">ROUTINE TYPE</span>
            <br />
            CARDIO
          </v-col>
          <v-col class="text-uppercase">
            <span class="type-label">DURATION</span>
            <br />
            <v-icon dense>mdi-timer-outline</v-icon>
            45'
          </v-col>
          <v-col class="text-uppercase">
            <span class="type-label">MUSCLE GROUP</span>
            <br />
            FULL BODY
          </v-col>

          <v-col>
            <span class="type-label">DIFFICULTY</span>
            <br />
            <DifficultyLevel style="display: inline" :difficulty="2" />
          </v-col>
        </v-row>
      </div>
      <div class="routine-buttons-container">
        <div>
          <v-btn
            x-big
            rounded
            router
            to="edit-routine"
            class="ma-0 primary black--text font-weight-black"
            ><span><v-icon>mdi-pencil</v-icon>EDIT ROUTINE</span></v-btn
          >
          <v-btn class="primary--text" v-on:click="pressed = !pressed" icon>
            <v-icon v-if="pressed" class="like-icon" dark> mdi-heart </v-icon>
            <v-icon v-if="!pressed" class="like-icon" dark>
              mdi-heart-outline
            </v-icon>
          </v-btn>
        </div>
        <!-- <v-row>
          <v-col>
            <v-btn
              x-big
              rounded
              class="ma-0 primary black--text font-weight-black"
              ><span class="ma-10"><v-icon>mdi-pencil</v-icon>EDIT ROUTINE</span></v-btn
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
              router
              to="edit-routine"
              >Edit Rotuine<v-icon>mdi-pencil</v-icon></v-btn
            >
          </v-col>
        </v-row> -->
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
            <ExerciseList itemHeight="55" height="300" :exercises="exercises" />
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
import DifficultyLevel from "../components/DifficultyLevel.vue";
import ExerciseList from "../components/ExerciseList.vue";
import EquipmentNeeded from "../components/EquipmentNeeded.vue";

export default {
  name: "Routine",
  components: { DifficultyLevel, ExerciseList, EquipmentNeeded },
  data() {
    return {
      exercises: [
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

.routine-info {
  margin: auto;
  justify-self: center;
  position: absolute;
  width: 50%;
  height: 50%;
  justify-content: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  .routine-specifications {
    font-size: 25px;
    font-weight: 600;
    .type-label {
      font-size: 16px !important;
    }
  }
}

.routine-buttons-container {
  position: absolute;
  width: 100%;
  bottom: 0;
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  div {
    padding-top: 10px;
    padding-bottom: 10px;
    width: 60%;
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
  // .row {
  //   width: 60%;
  //   margin: auto;
  //   text-align: center;
  //   .v-btn {
  //     margin-top: auto !important;
  //     margin-bottom: auto !important;
  //     margin-left: 10px;
  //     font-size: 20px !important;
  //     .like-icon {
  //       font-size: 40px;
  //     }
  //   }
  // }
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
