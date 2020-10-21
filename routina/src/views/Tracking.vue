<template>
  <div class="tracking">
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
        <v-row class="center">
          <v-col style="background-color: rgb(33, 33, 33)" class="center">
            <div>
              <div style="font-size: 20px" class="grey">
                <span class="font-weight-black mx-10"
                  ><v-icon>mdi-scale-bathroom</v-icon> Latest Weightings
                  Records</span
                >
              </div>
              <div class="weight-container center"><span>65.1kg</span></div>
              <div>
                <v-btn
                  x-big
                  rounded
                  class="my-6 primary black--text font-weight-black"
                  ><span>Add New Weighting</span></v-btn
                >
              </div>
            </div>
          </v-col>
          <v-col style="background-color: rgb(33, 33, 33)" class="center">
            <div>
              <div style="font-size: 20px" class="grey">
                <span class="font-weight-black mx-10"
                  ><v-icon>mdi-history</v-icon> Weighting History</span
                >
              </div>
              <div class="center">
                <v-virtual-scroll
                  :items="weightings"                  
                  :item-height="60"
                  :height="240"
                  style="background-color:rgb(23,23,23)"
                >
                  <template  v-slot="{ item }">
                    <v-list-item  style=" position:relative; margin:auto; margin-top:10px; background-color:rgb(66,66,66); width:80%" >
                        <div style="position:absolute;">Mar 10 <br> 2020</div>
                        <div style="position:absolute; right:0; margin-right:3px"><span><v-icon>mdi-scale-bathroom</v-icon>{{item}} kg</span></div>
                    </v-list-item>
                  </template>
                </v-virtual-scroll>
              </div>
              <div>
                <v-btn
                  x-big
                  rounded
                  class="my-6 primary black--text font-weight-black"
                  ><span>SHOW GRAPH</span></v-btn
                >
              </div>
            </div>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item class="tab-item"> como </v-tab-item>
      <v-tab-item class="tab-item"> andas </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Tracking",
  data() {
    return {
      tab: null,
      weightings:[61.5,62.2,67.7,63.1,68.5,61.5,62.2,67.7,63.1,68.5],
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

.weight-container {
  background-color: rgb(23, 23, 23);
  height: 150px;
  font-size: 40px;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  margin:auto;
}

::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
</style>
