<template>
  <v-virtual-scroll
    :items="equipments"
    :height="height"
    :item-height="itemHeight"
    class="scroller"
  >
    <template v-slot="{ item }">
      <v-list-item class="item">
        <v-row class="equipment-row">
          <img src="../assets/routine1.jpg" />
          <v-col> {{ item }} </v-col>
        </v-row>
      </v-list-item>
    </template>
  </v-virtual-scroll>
</template>

<script>
export default {
  name: "EquipmentNeeded",
  props: { equipments: Array, itemHeight: String, height: String },
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
</style>