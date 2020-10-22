<template>
  <div class="tracking">
    hola
    <div class="headers">
      <v-img src="../assets/tracking.png" class="routine-image" />
      <div class="image-blur"></div>
      <div class="title">
        <h1 class="ma-6">Tracking</h1>
      </div>
    </div>
    <v-tabs class="tabs" v-model="tab">
      <v-tab class="tab-title"> Weight </v-tab>
      <v-tab class="tab-title"> Workout stats </v-tab>
      <v-tab class="tab-title"> Goals </v-tab>
    </v-tabs>
    <v-tabs-items class="tab-items my-5" v-model="tab">
      <v-tab-item class="tab-item">
        <Weights :weightings="weightings"/>
      </v-tab-item>
       <v-tab-item class="tab-item"> <Stats/>  </v-tab-item>
      <v-tab-item class="tab-item"> <Goals/> </v-tab-item>
     
    </v-tabs-items>
    <v-footer color="black" />
  </div>
</template>

<script>
import Stats from '../components/Tracking/Stats.vue';
import Weights from '../components/Tracking/Weights.vue';
import Goals from '../components/Tracking/Goals.vue';



export default {
  name: "Tracking",
  components:{Weights,Goals,Stats},
  data() {
    return {
      tab: null,
      weightings: [61.5, 62.2, 67.7, 63.1, 68.5, 61.5, 62.2, 67.7, 63.1, 68.5],
    };
  },
};
</script>

<style scoped  lang="scss">
.tracking {
  background-color: black;
}

.headers {
  position: relative;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  z-index: 30 !important;
  text-align: center;
  background-color: rgba(66, 66, 66, 0.5);
  margin: auto !important;
  font-size: 30px !important;
}

.routine-image {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 1 !important;
}
.image-blur {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2 !important;
  backdrop-filter: blur(3px);
}

.tabs {
  background-color: rgb(33, 33, 33);
}

.tab-title {
  font-size: 20px !important;
  margin: 10px;
}

.tab-items {
  background-color: black !important;

  .tab-item {
    margin-left: 20px;
    margin-right: 20px;
    //background-color: rgba(33, 33, 33);
  }
}

::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
</style>
