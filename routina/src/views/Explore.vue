<template>
  <div class="Explore">
    <ExploreBanner />
    <div class="explore-content">
      <div class="content-container">
        <h1 class="title-container">Explore routines by:</h1>
        <v-tabs
          v-model="explore_tabs"
          background-color="black"
          fixed-tabs
          class="pb-0"
        >
          <v-tab
            v-for="tab in tabs"
            :key="tab.name"
            v-on:click="showingRoutines = false"
          >
            <ExploreTabHead :name="tab.name" :icon="tab.icon"></ExploreTabHead>
          </v-tab>
        </v-tabs>
        <v-row>
          <div class="orange-bar">
            <v-btn
              v-if="showingRoutines"
              @click="showingRoutines = false"
              icon
              color="black"
              style="flex: 1"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <h2 class="text-color" style="flex: 30" v-if="showingRoutines">
              {{ this.tabName }}
            </h2>
            <v-spacer v-if="showingRoutines" style="flex: 1"></v-spacer>
          </div>
        </v-row>
        <v-tabs-items v-if="!showingRoutines" v-model="explore_tabs">
          <v-tab-item v-for="tab in tabs" :key="tab.name">
            <ExploreGrid
              v-if="tab.name === 'all'"
              :withOverlay="true"
              componentType="RoutineCard"
              name="Routine"
              :categories="routines"
              width="100%"
            ></ExploreGrid>
            <div
              v-else
              style="
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <ExploreGrid
                v-on:click="categoryClick"
                componentType="CategoryCard"
                :name="tab.name"
                :categories="tab.categories"
                width="100%"
              ></ExploreGrid>
            </div>
          </v-tab-item>
        </v-tabs-items>

        <ExploreGrid
          v-if="showingRoutines"
          :withOverlay="true"
          componentType="RoutineCard"
          name="Routine"
          :categories="routines"
          width="100%"
        ></ExploreGrid>
      </div>
    </div>
  </div>
</template>

<script>
import ExploreBanner from "../components/ExploreBanner";
import ExploreTabHead from "../components/ExploreTabHead";
import ExploreGrid from "../components/ExploreGrid";

export default {
  name: "Explore",
  components: { ExploreBanner, ExploreTabHead, ExploreGrid },
  methods: {
    categoryClick(event) {
      this.tabName = event.emitter;
      this.showingRoutines = true;
    },
  },
  data() {
    return {
      showingRoutines: false,
      explore_tabs: null,
      tabName: "null",
      routines: [
        //time esta en minutos
        {
          routineName: "Routine 1",
          routineId: 1,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 2,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 3,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 4,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 5,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 6,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 7,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 8,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 9,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 10,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 11,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
        {
          routineName: "Routine 1",
          routineId: 12,
          author: "Julian Sicardi",
          type: "Cardio",
          difficulty: 2,
          muscleGroup: "Legs",
          time: 45,
          image: require("../assets/routine1.jpg"),
        },
      ],

      tabs: [
        {
          name: "all",
        },
        {
          name: "featured",
          icon: "mdi-star",
          categories: [
            { name: "favorites", image: "yoga.jpg" },
            { name: "popular", image: "cardio.jpeg" },
            { name: "recently used", image: "chest.jpeg" },
            { name: "new", image: "basiceq.jpg" },
          ],
        },

        {
          name: "duration",
          icon: "mdi-timer",
          categories: [
            { name: "under 15'", image: "abs.jpg" },
            { name: "15'-30'", image: "crossfit.jpg" },
            { name: "30'-45'", image: "hiit.jpg" },
            { name: "45'-60'", image: "arms.jpg" },
            { name: "above 60'", image: "fullbody.jpg" },
          ],
        },

        {
          name: "type",
          icon: "fa-heartbeat",
          categories: [
            { name: "Cardio", image: "cardio.jpeg" },
            { name: "Strength", image: "strength.jpg" },
            { name: "HIIT", image: "hiit.jpg" },
            { name: "Yoga", image: "yoga.jpg" },
            { name: "Pilates", image: "pilates.jpg" },
          ],
        },

        {
          name: "difficulty level",
          icon: "mdi-fire",
          categories: [
            { name: "Easy", image: "lowerbody.jpg" },
            { name: "Accesible", image: "pilates.jpg" },
            { name: "Moderate", image: "strength.jpg" },
            { name: "Hard", image: "back.jpg" },
          ],
        },

        {
          name: "muscle group",
          icon: "fa-running",
          categories: [
            { name: "arms", image: "arms.jpg" },
            { name: "core", image: "core.jpg" },
            { name: "legs", image: "lowerbody.jpg" },
            { name: "full body", image: "fullbody.jpg" },
            { name: "abs", image: "abs.jpg" },
            { name: "back", image: "back.jpg" },
            { name: "chest", image: "chest.jpeg" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../sass/variables";
.Explore {
  background-color: black;
  height: 1100px;
}
.explore-content {
  max-width: $content-container-width;
  margin: auto;
  padding: 30px 30px 30px 30px;
}

.title-container {
  padding: 30px 30px 30px 30px;
}

.tab {
  width: 20%;
}
.content-container {
  width: $content-container-width - 150px;
  background-color: #1e1e1e;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  // padding: 30px 30px 30px 30px;
}

.orange-bar {
  background-color: #ff8000 !important;
  margin: auto;
  width: $content-container-width - 150px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.text-color {
  color: rgb(19, 19, 19);
  text-transform: uppercase;
  font-size: 18px;
  padding: 2px 2px 2px 2px;
  text-align: center;
  font-weight: 600;
}
</style>
