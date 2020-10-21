<template>
  <div class="Explore">
    <ExploreBanner />
    <div class="explore-content">
      <v-card class="content-container">
        <h1 class="title-container">Explore routines by:</h1>
        <v-tabs v-model="explore_tabs" background-color="black" fixed-tabs class="pb-0">
          <v-tab
            v-for="tab in tabs"
            :key="tab.name"
            @change="tab.focus=!tab.focus"
            
          >
            <ExploreTabHead :name="tab.name" :icon="tab.icon" :focus="tab.focus" ></ExploreTabHead>
          </v-tab>
      </v-tabs>
      <h1>hola</h1>
      </v-card>
      
    </div>
  </div>
</template>

<script>
import ExploreBanner from "../components/ExploreBannner";
import ExploreTabHead from "../components/ExploreTabHead";


export default {
  name: "Explore",
  components: { ExploreBanner, ExploreTabHead },
  data(){
    return{
      tabs:[
        {name:"featured", icon:"mdi-star", focus:"true"},
        {name:"duration", icon:"mdi-timer", focus:"false"},
        {name:"type", icon:"mdi-star", focus:"false"},
        {name:"difficulty level", icon:"mdi-star", focus:"false"},
        {name:"equipment", icon:"mdi-star", focus:"false"},
        {name:"muscle group", icon:"mdi-star", focus:"false"},
      ],
      
    }
  }
};
</script>

<style scoped lang="scss">
  @import "../sass/variables";
  .Explore {
    background-color: black;
  }
  .explore-content {
    max-width: $content-container-width;
    margin: auto;
    padding: 30px 30px 30px 30px;
  }

  .title-container{
    padding: 30px 30px 30px 30px;
  }

  .tab{
    width:20%;
  }
  .content-container {
    max-width: $content-container-width - 150px;
    align-content: center;
    margin: 0 auto 30px;
    // padding: 30px 30px 30px 30px;
  }

</style>
