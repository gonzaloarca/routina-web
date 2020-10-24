<template>
  <div class="tracking">
    <RoutinesBanner banner-image-url="tracking.jpg" banner-title="Tracking" />
    <div class="tabs-container">
      <v-tabs class="tabs" v-model="tab">
        <v-tab><h3>Weight</h3> </v-tab>
        <v-tab><h3>Workout stats</h3></v-tab>
      </v-tabs>
    </div>
    <v-tabs-items class="tab-items my-5" v-model="tab">
      <div class="weight-cont">
        <v-tab-item class="tab-item">
          <Weights :weightings="weightings" />
        </v-tab-item>
        <v-tab-item class="tab-item"> <Stats /> </v-tab-item>
      </div>
    </v-tabs-items>

    <v-footer color="black" />
  </div>
</template>

<script>
import Stats from "../components/Tracking/Stats.vue";
import Weights from "../components/Tracking/Weights.vue";
import RoutinesBanner from "../components/RoutinesBanner.vue";

export default {
  name: "Tracking",
  components: { Weights, Stats, RoutinesBanner },
  data() {
    return {
      tab: null,
      weightings: [
        {
          date: "mar 1 2020",
          weight: 61.5,
        },
        {
          date: "mar 2 2020",
          weight: 62.3,
        },
        {
          date: "mar 3 2020",
          weight: 60.2,
        },
        {
          date: "mar 8 2020",
          weight: 64.3,
        },
        {
          date: "mar 15 2020",
          weight: 65.7,
        },
        {
          date: "mar 16 2020",
          weight: 63.2,
        },
        {
          date: "mar 17 2020",
          weight: 62.1,
        },
        {
          date: "mar 18 2020",
          weight: 60.2,
        },
      ],
    };
  },
};
</script>

<style scoped  lang="scss">
@import "../sass/variables";
.tracking {
  background-color: black;
  height: 1000px;
}

.headers {
  position: relative;
  height: $banner-height;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  z-index: 2 !important;
  text-align: center;
  background-color: rgba(66, 66, 66, 0.5);
  margin: auto !important;
  font-size: 18px !important;
}

.tabs-container {
  margin-top: 20px;
}

.tabs {
  background-color: rgb(33, 33, 33);
  width: 950px;
  margin: auto;
}

.tab-title {
  font-size: 18px !important;
  margin: 10px;
}

.tab-items {
  background-color: black !important;
  width: 950px;
  margin: auto;
  padding: 0;
  .tab-item {
    margin: 0;
    padding: 0;
    width: 100%;
    //background-color: rgba(33, 33, 33);
  }
}

.weight-cont {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(33, 33, 33);
}
</style>
