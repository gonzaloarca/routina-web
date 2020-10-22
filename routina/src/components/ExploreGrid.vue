<template>
  <div
    style="overflow:hidden; position:relative; width:100%; align-items:center; justify-content:center"
  >
   
    <div style=" position:relative; width:100%; align-items:center; justify-content:center">
      <v-row class="row-style" justify="center">
        <v-container style="width:75%" fluid>
          <v-row>
            <v-col v-for="cat in categories" :key="cat.name" :cols="3" class="col-style">
              <component
                v-on:click="clickEvent"
                :is="componentType"
                :routineData="cat"
                :name="cat.name"
                :withOverlay="withOverlay"
                :image="cat.image"
                width="100%"
              ></component>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </div>
  </div>
</template>
<script>
import CategoryCard from "../components/CategoryCard";
import RoutineCard from "../components/RoutineCard";
export default {
  name: "ExploreGrid",
  components: { CategoryCard, RoutineCard },
  props: {
    name: {
      type: String,
      required: true
    },
    categories: {
      type: Array,
      required: true
    },
    componentType: {
      type: String
    },
    withOverlay:{
      type:Boolean
    }
  },
  methods: {
    clickEvent(event) {
      this.$emit("click", event);
    }
  }
};
</script>


<style scoped lang="scss">
@import "~vuetify/src/styles/styles.sass";
.col-style {
  position: relative;
    display:flex;
    justify-content:center;
  padding: 10px 10px 10px 10px;
}

.row-style {
  margin-right: 0px;
  margin-left: 0px;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
