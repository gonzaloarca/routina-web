<template>
  <v-card class="root">
    <div class="card">
        <v-card-title class="title" >ROUTINE 1</v-card-title>
      <v-row>
        <div class="scroller-container">
          <h4>Excercise List</h4>
          <v-virtual-scroll
            :bench="benched"
            :items="items"
            height="300"
            item-height="64"
            class="scroller"
          >
            <template v-slot="{ item }">
              {{ item }}
            </template>
          </v-virtual-scroll>
        </div>
        <div class="scroller-container">
          <h4>Equipment needed</h4>
          <v-virtual-scroll
            :bench="benched"
            :items="items"
            height="300"
            item-height="64"
            class="scroller"
          >
            <template v-slot="{ item }">
              {{ item }}
            </template>
          </v-virtual-scroll>
        </div>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: ["hola", "como", "estas"],
    };
  },
};
</script>

<style scoped>
.root {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}

.scroller {
  background-color: black !important;
}

.scroller-container {
  width: 30%;
  margin: 10%;
}

.card {
  width: 30vw;
  margin: auto;
  border: 1px solid blue;
}

.title{
   text-align: center !important;
   display: block !important;
}
</style>
