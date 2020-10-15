<template>
  <div class="routine">
    <div class="headers">
      <img class="routine-image" />
      <div class="routine-info"></div>
      <v-row class="routine-buttons">
        <v-col>
          <v-btn>START</v-btn>
          <v-btn v-on:click="pressed = !pressed" icon>
            <v-icon v-if="pressed" class="like-icon" dark> mdi-heart </v-icon>
            <v-icon v-if="!pressed" class="like-icon" dark>
              mdi-heart-outline
            </v-icon>
          </v-btn>
        </v-col>
        <v-spacer/>
        <v-col>
             <v-btn>Edit Rotuine<v-icon>mdi-pencil</v-icon></v-btn>
        </v-col>
      </v-row>
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

export default {
  name: "Routine",

  data(){
      return{
          pressed:false,
      }
  }
};
</script>

<style scoped>

.headers{
    position: relative;
    height: 60vh;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;

}
.routine-image{
    position: absolute;
    height: 100%;
    width: 100%;

}

.routine-info{
    margin: auto;
    justify-self: center;
    position: absolute;
    width: 50%;
    height: 50%;
    background-color: blue ;
}

.routine-buttons{
    position: absolute;
    width: 100%;
    bottom:0;
}

.exercise-list{
    height: 1000px;
    width: 40%;
    background-color: green;
}

.more-info{
    width: 40%;
}

.additional-information{
    height: 300px;
    width: 100%;
    background-color: purple;
}

.equipment-needed{
    height: 400px;
    width: 100%;
    background-color: yellow;
}
</style>
