<template>
  <div class="routine">
    <div class="headers">
      <v-img src="../assets/routine1.jpg" class="routine-image" />
      <div class="routine-info">
        <h1>{{routineData.routineName}}</h1>
        <h2>by <v-btn text flat class="btn-fmt primary--text" router :to="'/generic-profile/'+routineData.author.id"><span>{{routine.author.name}}</span></v-btn></h2>
        <div style="height:15px; width:100%;"></div>
        <v-row class=" row-pad routine-specifications">
          <v-col class="col-pad text-uppercase">
            <span class="type-label">ROUTINE TYPE</span>
            <br />
            {{routineData.type}}
          </v-col>
          <v-col class="col-pad text-uppercase">
            <span class="type-label">DURATION</span>
            <br />
            <v-icon dense>mdi-timer-outline</v-icon>
            {{routineData.duration}}
          </v-col>
          <v-col class="col-pad text-uppercase">
            <span class="type-label">MUSCLE GROUP</span>
            <br />
            {{routine.muscleGroup}}
          </v-col>

          <v-col class="col-pad text-uppercase">
            <span class="type-label">DIFFICULTY</span>
            <br />
            <DifficultyLevel style="display: inline" :difficulty="routineData.difficulty" />
          </v-col>

          <v-col class="col-pad text-uppercase">
            <span class="type-label">Rating</span>
            <br />
            <v-rating
              :length="5"
              :size="18"
              dense
              background-color="white"
              color="white"
              :readonly="true"
              :value="routineData.rating"
            ></v-rating>
          </v-col>


        </v-row>
      </div>
      <div class="routine-buttons-container">
        <div style="margin-left:100px; margin-right:100px;">
          <v-btn
            x-big
            rounded
            router
            :to="'/routine/'+this.id+'/edit-routine'"
            class="ma-0 black--text font-weight-black"
            color="white"
            ><span 
            style="display:flex; justify-content:center; align-items:center;">EDIT ROUTINE
            <v-icon class="pa-1" >mdi-pencil</v-icon>
            </span>
          </v-btn>
          <v-btn class="primary--text" v-on:click="pressed = !pressed" style="z-index:50;" icon>
            <v-icon v-if="pressed" class="like-icon"  dark> mdi-heart </v-icon>
            <v-icon v-if="!pressed" class="like-icon"  dark>
              mdi-heart-outline
            </v-icon>
          </v-btn>
        </div>
      </div>
    </div>



    <div class="info-container">
    
    <v-row class="content-container">
      <v-col class="exercise-container">
        <div class="exercise-list">
          <div style="width:750px; background-color:grey darken-5;">
            <v-tabs class="tab-fmt" v-model="tab" :fixed-tabs="true">
            <v-tab
              v-for="round in routineData.cycles"
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
              v-for="round in routineData.cycles"
              :key="round.name"
              class="mx-2"
            >
              <div style="height: 300px">
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
      <v-col style=" max-width:5px;">
        <div ></div>
      </v-col>
      <v-col class="more-info">
        <div class="additional-information">
          <h2 style="text-align: center; height:50px;">Rate this routine</h2>
        </div>
        <div class="rating-fmt">
          <v-rating
              :length="5"
              :size="18"
              dense
              background-color="primary"
              color="primary"
              large

            ></v-rating>
        </div>
        <div class="additional-information">
          <h2 style="text-align: center; height:50px;">Description</h2>
        </div>
        <div class="desc-fmt">
          <p class="pa-2">{{routineData.description}}</p>
        </div>
        
      </v-col>
    </v-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DifficultyLevel from "../components/DifficultyLevel.vue";
import ExerciseList from "../components/ExerciseList.vue";
import {RoutinesApi} from "../services/routines.js";

export default {
  name: "Routine",
  components: { DifficultyLevel, ExerciseList,  },
  data() {
    return {
      id:this.$route.params.id,
      routineData:{},
      // rounds: [{
      //   name:"warm up",
      //   exercises:[
      //     { name: "ejercicio1" },
      //     { name: "ejercicio2" },
      //     { name: "ejercicio3" },
      //     { name: "ejercicio4" },
      //     { name: "ejercicio5" },
      //     { name: "ejercicio6" },
      //     { name: "ejercicio7" },
      //     { name: "ejercicio8" },
      //   ],},
      //   {name:"round 1",
      //   exercises: [
      //     { name: "ejercicio1" },
      //     { name: "ejercicio2" },
      //     { name: "ejercicio3" },
      //     { name: "ejercicio4" },
      //     { name: "ejercicio5" },
      //     { name: "ejercicio6" },
      //     { name: "ejercicio7" },
      //     { name: "ejercicio8" },
      //   ],},
      //   {name:"round 2",
      //   exercises:[
      //     { name: "ejercicio1" },
      //     { name: "ejercicio2" },
      //     { name: "ejercicio3" },
      //     { name: "ejercicio4" },
      //     { name: "ejercicio5" },
      //     { name: "ejercicio6" },
      //     { name: "ejercicio7" },
      //     { name: "ejercicio8" },
      //   ],},
      // ],

      pressed: false,
      tab:null,
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius ullam est quibusdam dolorem corrupti rem vero minima veniam delectus tempora et autem accusamus nobis quod placeat excepturi eveniet nisi accusantium aliquid error reiciendis molestias, vel sunt. Quas laborum nisi vero.",
      created(){
        RoutinesApi.getFullRoutine(this.id).then(function(data){
            this.routineData=data.body;
        });
    },
    
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

.tab-fmt{
  background-color:rgb(50, 50, 50);
  text-decoration-color: white;
}

.col-pad{
  padding-left:2px;
  padding-right:2px;
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
    font-size: 20px;
    font-weight: 600;
    .type-label {
      font-size: 16px !important;
    }
  }
}

.row-pad{
  margin-left:0px;
  margin-right:0px;
}

.routine-buttons-container {
  position: absolute;
  width: 100%;
  bottom: 0;
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  z-index:20;

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
  max-width: $content-container-width;
  margin: auto;
  padding: 0px 30px 30px 30px;
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
  width: 750px;
}

.more-info {
  margin: 0;
  padding: 0;
  width:300px;
 
}

.rating-fmt{
  height:100px;
  background-color: rgb(20, 20, 20);
  display:flex;
  justify-content:center;
  align-items: center;
  text-align:center;
  width:100%;
}


.btn-fmt{

  text-transform: none;
  font-size:16px;
  font-weight:600;
}

.desc-fmt{
  min-height:fit-content;
  background-color: rgb(20, 20, 20);
  display:flex;
  justify-content:center;
  align-items: center;
  text-align:center;
  width:100%;
}

.exercise-list {
  width: 100%;
  background-color: rgb(20, 20, 20);
  min-height:fit-content;
  padding-bottom: 10px;
}

.additional-information {
  background-color: rgb(50, 50, 50);
  display:flex;
  justify-content:center;
  align-items: center;
  text-align:center;
  width:100%;

}

.equipment-needed {
  height: 400px;
  width: 100%;
  background-color: rgb(33, 33, 33);
}
</style>
