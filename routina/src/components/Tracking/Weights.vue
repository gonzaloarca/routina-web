<template>
  <div style="display: flex; justify-content: center">
    <div
      style="background-color: rgb(33, 33, 33); width: 40%; height: fit-content"
      class="my-0 center"
    >
      <div class="my-4">
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
          <span class="font-weight-black mx-10"
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
      style="background-color: rgb(33, 33, 33); width: 60%"
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
          <span class="font-weight-black mx-10"
            ><v-icon class="icon-left">mdi-history</v-icon> Weighting
            History</span
          >
        </div>
        <div class="center">
          <v-virtual-scroll
            :items="graphData.value"
            :item-height="60"
            :height="240"
            style="background-color: rgb(23, 23, 23)"
          >
            <template v-slot="{ item }">
              <v-list-item
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
                  style="left: 0; position: absolute"
                >
                  Mar 10 <br />
                  2020
                </div>
                <div style="position: absolute; right: 0; margin-right: 3px">
                  <span><v-icon>mdi-scale-bathroom</v-icon>{{ item }} kg</span>
                </div>
              </v-list-item>
            </template>
          </v-virtual-scroll>
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

::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}

.divider {
  width: 10px;
  background-color: black;
}
</style>