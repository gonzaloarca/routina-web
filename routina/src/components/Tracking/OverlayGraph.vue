<template>
  <v-overlay class="overlay-content" :value="value">
    <div class="graph-container">
      <v-btn icon v-on:click="closeGraph" class="close-button pa-0"
        ><v-icon class="pa-1">mdi-close</v-icon>
      </v-btn>
      <Graph
        class="graph"
        :chartdata="chartData.data"
        :options="chartData.options"
      ></Graph>
    </div>
  </v-overlay>
</template>



<script>
import Graph from "../Graph.vue";
export default {
  name: "overlayGraph",
  components: { Graph },
  props: {
    data: Array,
    labels:Array,
    label:String,
    value: Boolean,
  },
  data() {
    return {
      chartData: {
        data: {
          labels: this.labels,
          datasets: [
            {
              label: this.label,
              data: this.data,
              borderColor: "rgba(255,128,0, 1)",
              borderWidth: 3,
              lineTension:0,
              poitStyle:"circle",
              pointRadius:5,
              pointBackgroundColor: "rgba(255,128,0, 1)",
              
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                gridLines: {
                  display: true,
                  color: "rgba(255,255,255,0.3)",
                  offsetGridLines: true,
                },
                ticks: {
                  beginAtZero: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: true,
                  color: "rgba(255,255,255,0.3)",
                },
              },
            ],
          },
        },
      },
    };
  },
  methods: {
    closeGraph() {
      this.$emit("close-graph", false);
      return;
    },
  },
};
</script>

<style scoped lang="scss">
@import "~vuetify/src/styles/styles.sass";

.overlay-content {
  position: fixed;
}

.graph-container {
  position: relative;
  background-color: black;
  width: 700px;
  height: 300px;
}

.graph {
  width: 100%;
  height: 100%;
  position: relative;
}

.close-button {
    z-index:30;
  position: absolute;
  right: 0;
}
</style>