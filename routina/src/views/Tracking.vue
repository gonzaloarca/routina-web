<template>
  <div class="tracking">
    <div class="headers">
      <v-img src="../assets/tracking.png" class="routine-image" />
      <div class="image-blur"></div>
      <div class="title">
        <h1 class="ma-6">Tracking</h1>
      </div>
    </div>
    <div class="tabs-container">
      <v-tabs class="tabs" v-model="tab">
        <v-tab class="tab-title"> Weight </v-tab>
        <v-tab class="tab-title"> Workout stats </v-tab>
        <!-- <v-tab class="tab-title"> Goals </v-tab> -->
      </v-tabs>
    </div>
    <v-tabs-items class="tab-items my-5" v-model="tab">
      <v-tab-item class="tab-item">
        <Weights :weightings="weightings" />
      </v-tab-item>
      <v-tab-item class="tab-item"> <Stats /> </v-tab-item>
      <!-- <v-tab-item  class="tab-item"> <Goals /> </v-tab-item> -->
    </v-tabs-items>
    <v-footer color="black" />

    
  </div>


</template>

<script>
import Stats from "../components/Tracking/Stats.vue";
import Weights from "../components/Tracking/Weights.vue";

// import Goals from "../components/Tracking/Goals.vue";

export default {
  name: "Tracking",
   components: { Weights, Stats },
  data() {
    return {
      tab: null,
      weightings: [61.5, 62.2, 67.7, 63.1, 68.5, 61.5, 62.2, 67.7, 63.1, 68.5],
    };
  },
};
</script>

<style scoped  lang="scss">
@import "../sass/variables";
.tracking {
  background-color: black;
}

.headers {
  position: relative;
  height: $banner-height;
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

.tabs-container{
  margin-top:20px;
}

.tabs {
  background-color: rgb(33, 33, 33);
  width: 70%;
  margin:auto;
}

.tab-title {
  font-size: 20px !important;
  margin: 10px;
}

.tab-items {
  background-color: black !important;
  width: 70%;
  margin:auto;
  padding: 0;
  .tab-item {
    margin:0;
    padding: 0;
    //background-color: rgba(33, 33, 33);
  }
}

::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
</style>
