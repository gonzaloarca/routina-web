<template>
  <div class="my-5" style="display: flex; justify-content: center; width:100%;">
    <div
      style="background-color: rgb(33, 33, 33); width: 40%; height: fit-content; display:flex; align-items:center; justify-content:center;"
      class="my-0 center"
    >
      <div class="my-4 mx-4">
        <div
          style="
            position: relative;
            text-transform: uppercase;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
           
          "
          class="grey darken-2"
        >
          <span class="font-weight-black mx-8"
            ><v-icon class="icon-left">mdi-scale-bathroom</v-icon> Latest
            Weightings Records</span
          >
        </div>
        <div class="weight-container center"><span>65.1kg</span></div>
        <div>
          <v-btn
            x-big
            rounded
            class="my-6 primary black--text font-weight-black"
            @click="clickWeightings"
            ><span>Add New Weighting</span></v-btn
          >
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div
      style="background-color: rgb(33, 33, 33); width: 40%"
      class="my-0 center"
    >
      <div style="width: 95%" class="my-4">
        <div
          style="
            position: relative;
            text-transform: uppercase;
            font-size: 20px;
            display: flex;
            justify-content: center;
          "
          class="grey darken-2"
        >
          <span class="font-weight-black mx-8"
            ><v-icon class="icon-left">mdi-history</v-icon> Weighting
            History</span
          >
        </div>
        <div class="center">
          <div class="scroller">
            <v-list-item
              v-for="item in graphData.value"
              :key="item.id"
              style="
                position: relative;
                margin: auto;
                margin-top: 10px;
                background-color: rgb(66, 66, 66);
                width: 80%;
              "
            >
              <div
                class="white black--text"
                style="left: 0; position: absolute; width:20%; height:100%;"
              >
                <h3 style="font-size:14px;">{{graphData.date}}</h3>
                <h3 style="font-size:14px;">{{graphData.year}}</h3>
              </div>
              <div style="display:flex; align-items:center; justify-content:center;">
                <span style="text-align:center; width:80%; position:absolute; right:0; font-size:16px;">{{ item }} kg<v-icon style="position: absolute; right: 0; margin-right: 3px">mdi-scale-bathroom</v-icon></span>
              </div>
            </v-list-item>
          </div>
        </div>
        <div>
          <v-btn
            x-big
            rounded
            class="my-6 primary black--text font-weight-black"
            v-on:click="clickGraph"
            ><span>SHOW GRAPH</span></v-btn
          >
        </div>
      </div>
    </div>
    <OverlayWeighting
      v-if="overlayWeight"
      v-on:close-overlay-weight="overlayWeight = false"
      :overlayWeightings="overlayWeight"
    >
    </OverlayWeighting>
    <OverlayGraph
      :value="overlayGraph"
      v-on:close-graph="overlayGraph = false"
      :data="weightings.map((item) => item.weight)"
      :labels="weightings.map((item) => item.date)"
      label="Weight"
    >
    </OverlayGraph>
  </div>
</template>

<script>
import OverlayWeighting from "./OverlayWeighting.vue";
import OverlayGraph from "./OverlayGraph.vue";

export default {
  name: "Weights",
  components: { OverlayWeighting, OverlayGraph },
  props: {
    weightings: Array,
    withOverlay: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      overlayWeight: false,
      overlayGraph: false,
      graphData: {
        date: "Mar 10", 
        year:"2020",
        value: this.weightings.map((item) => item.weight),
      },
    };
  },
  methods: {
    clickWeightings(event) {
      this.overlayWeight = true;
      this.$emit("click-weight", event);
    },
    clickGraph(event) {
      this.overlayGraph = true;
      this.$emit("click-graph", event);
    },
  },
};
</script>

<style scoped>
.scroller {
  height: 240px;
  overflow-x: auto;
  overflow-y: scroll;
  background-color: rgb(23, 23, 23);
  position: relative;
  width: 100%;
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
  margin: auto;
}
.icon-left {
  position: absolute;
  left: 0px;
  padding: 3px 3px 3px 3px;
}

.divider {
  width: 3px;
  background-color: rgb(20, 20, 20);
}
</style>