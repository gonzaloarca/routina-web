<template>
  <v-virtual-scroll
    :items="exercises"
    :height="height"
    :item-height="itemHeight"
    class="scroller"
  >
    <template v-slot="{ item }">
      <v-list-item class="item">
        <v-row class="excercise-row">
          <v-col class="ma-0 pa-0"><img src="../assets/routine1.jpg" /></v-col>
          <v-col> duration </v-col>
          <v-col> {{ item }} </v-col>
        </v-row>
      </v-list-item>
    </template>
  </v-virtual-scroll>
</template>

<script>
export default {
  name: "ExerciseList",
  props: { exercises: Array, itemHeight: String, height: String },
};
</script>

<style scoped lang="scss">
.scroller {
  background-color: black !important;
  border-bottom: 5px solid black;
}
::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
.item {
  position: relative;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.07);
  margin: 5px;
}
.excercise-row {
  position: relative;
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: inherit;
  img {
    position: absolute;
    width: 20% !important;
    height: 100%;
    object-fit: cover !important;
    object-position: right !important;
  }
}
</style>