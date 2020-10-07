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
              
              <v-list-item class="item">{{ item }}</v-list-item>
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
              <v-list-item class="item">{{ item }}</v-list-item>
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
      items: ["ejercicio", "ejercicio", "ejercicio","ejercicio", "ejercicio", "ejercicio","ejercicio", "ejercicio", "ejercicio"],
    };
  },
};
</script>

<style scoped>

::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
.item{
    background-color:rgba(255,255,255,0.07);
    margin: 3px;
}

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
  white-space: nowrap;
}

.card {
  width: 50vw;
  margin: auto;
  background-color:#FF8000;
}

.title{
   text-align: center !important;
   display: block !important;
}
</style>
