<template>
  <div class="scroller-container">
    <div class="scroller">
      <transition-group name="swap" tag="div">
        <v-list-item v-for="item in exercises" class="item" :key="item.name">
          <v-row class="excercise-row">
            <v-col class="ma-0 pa-0"
              ><img src="../assets/routine1.jpg"
            /></v-col>
            <v-col> duration </v-col>
            <v-col> {{ item.name }} </v-col>
            <v-col v-if="editable" class="editable ma-0 pa-0">
              <v-btn x-small class="ma-0 pa-0" icon
                ><v-icon class="ma-0 pa-0">mdi-pencil</v-icon></v-btn
              >
              <v-btn v-on:click="swapUp(item)" x-small class="ma-0 pa-0" icon
                ><v-icon class="ma-0 pa-0">mdi-arrow-up</v-icon></v-btn
              >
              <v-btn v-on:click="swapDown(item)" x-small class="ma-0 pa-0" icon
                ><v-icon class="ma-0 pa-0">mdi-arrow-down</v-icon></v-btn
              >
            </v-col>
          </v-row>
        </v-list-item>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExerciseList",
  props: {
    exercises: Array,
    itemHeight: String,
    height: String,
    editable: { type: Boolean, default: false },
  },
  data() {
    return {
      rerender: 0,
    };
  },
  methods: {
    async swapUp(item) {
      let actualIndex = this.exercises.indexOf(item);
      await this.$emit("swap-up", actualIndex);
      item.rerender--;
    },
    async swapDown(item) {
      let actualIndex = this.exercises.indexOf(item);
      await this.$emit("swap-down", actualIndex);
      item.rerender++;
    },
  },
};
</script>

<style scoped lang="scss">
.swap-move {
  transition: transform 0.3s;
}

// .fade-enter-active{
//   transition: all 0.5s;
// }
// .fade-enter{
//   opacity: 0;
//   //transform:translateX(-1000px);
// }

.scroller-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}

.scroller {
  background-color: black !important;
  border-bottom: 5px solid black;
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

.editable {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>