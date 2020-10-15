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
    <v-row class="info-container">
      <v-col class="exercise-list"></v-col>
      <v-col class="more-info">
        <v-row class="additional-information"></v-row>
        <v-row class="equipment-needed"></v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import DifficultyLevel from "../components/DifficultyLevel.vue";

export default {
  name: "Routine",
  components: { DifficultyLevel },
  data() {
    return {
      pressed: false,
    };
  },
};
</script>

<style scoped  lang="scss">
.headers {
  position: relative;
  height: 60vh;
  background-color: red;
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
  .routine-specifications{
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

.exercise-list {
  height: 1000px;
  width: 40%;
  background-color: green;
}

.more-info {
  width: 40%;
}

.additional-information {
  height: 300px;
  width: 100%;
  background-color: purple;
}

.equipment-needed {
  height: 400px;
  width: 100%;
  background-color: yellow;
}
</style>
