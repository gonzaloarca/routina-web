<template>
  <v-virtual-scroll
    :items="equipments"
    :height="height"
    :item-height="itemHeight"
    class="scroller"
  >
    <template v-slot="{ item }">
      <v-list-item class="item" :key="rerender">
        <v-row class="equipment-row">
          <img src="../assets/routine1.jpg" />
          <v-col> {{ item }} </v-col>
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
    </template>
  </v-virtual-scroll>
</template>

<script>
export default {
  name: "EquipmentNeeded",
  props: {
    equipments: Array,
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
      let actualIndex = this.equipments.indexOf(item);
      await this.$emit("swap-up", actualIndex);
      this.rerender--;
    },
    async swapDown(item) {
      let actualIndex = this.equipments.indexOf(item);
      await this.$emit("swap-down", actualIndex);
      this.rerender++;
    },
  },
};
</script>

<style scoped lang="scss">
.scroller {
  background-color: black !important;
  border-bottom: 5px solid black;
}

.item {
  position: relative;
  height: 100%;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.07);
  margin: 5px;
}
.equipment-row {
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: inherit;
  text-align: center;
  img {
    margin: 0;
    padding: 0;
    z-index: 0;
    position: absolute;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    object-position: right !important;
    // filter: blur(2px);
  }
  .col {
    margin: auto;
    padding: 0;
    z-index: 2;
  }
}
.editable {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>