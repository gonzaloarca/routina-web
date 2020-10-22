<template>
  <div class="stats center-h">
    <div class="container">
      <div class="routine-history-scroller">
        <div class="title">
          <v-icon>mdi-history</v-icon><span>Routine History</span>
        </div>
        <v-virtual-scroll :items="stats" :item-height="70" height="400">
          <template v-slot:default="{ item }">
            <div class="item-container">
              <div class="date-container">{{ item.date }}</div>
              <div class="name-container">
                <span class="routine-name">{{ item.name }}</span>
                <span class="routine-author">
                  by <span class="primary--text">{{ item.author }}</span></span
                >
              </div>
            </div>
          </template>
        </v-virtual-scroll>
      </div>
    </div>
    <div class="divider"></div>
    <div class="container">
      <div class="date-btn-container">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              tile
              color="primary black--text"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Time <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in dates" :key="index">
              <v-list-item-title
                ><v-btn text tile block>{{
                  item.title
                }}</v-btn></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div class="data-container">
        <div class="title">
          <v-icon>mdi-history</v-icon>
          <span>AVERAGE TIME SPENT WORKING OUT PER DAY</span>
        </div>
        <div class="description">32.7 minutos</div>
      </div>
      <div class="data-container">
        <div class="title">
          <v-icon>mdi-history</v-icon>
          <span>TOTAL TIME SPENT WORKING OUT</span>
        </div>
        <div class="description">5 hours, 30.1 minutes</div>
      </div>
      <div class="btn-container">
        <v-btn
          v-on:click="overlayGraph = true"
          rounded
          class="primary black--text"
          small
          >Show Graph</v-btn
        >
      </div>
    </div>
    <OverlayGraph
      :value="overlayGraph"
      v-on:close-graph="overlayGraph = false"
      :data="statsWithTime.map((item) => item.time)"
      :labels="statsWithTime.map((item) => item.date)"
      label="Weight"
    >
    </OverlayGraph>
  </div>
</template>

<script>
import OverlayGraph from "./OverlayGraph.vue";
export default {
  name: "Stats",
  components:{OverlayGraph},
  data() {
    return {
      overlayGraph: false,
      dates: [
        { title: "Last Week" },
        { title: "Last Month" },
        { title: "Last Year" },
        { title: "Ever" },
      ],
      stats: [
        {
          date: "Mar. 17 2020",
          name: "Routine 1",
          author: "UserX",
        },
        {
          date: "Mar. 17 2020",
          name: "Routine 1",
          author: "UserX",
        },
        {
          date: "Mar. 17 2020",
          name: "Routine 1",
          author: "UserX",
        },
        {
          date: "Mar. 17 2020",
          name: "Routine 1",
          author: "UserX",
        },
        {
          date: "Mar. 17 2020",
          name: "Routine 1",
          author: "UserX",
        },
        {
          date: "Mar. 17 2020",
          name: "Routine 1",
          author: "UserX",
        },
        {
          date: "Mar. 17 2020",
          name: "Routine 1",
          author: "UserX",
        },
        {
          date: "Mar. 17 2020",
          name: "Routine 1",
          author: "UserX",
        },
        {
          date: "Mar. 17 2020",
          name: "Routine 1",
          author: "UserX",
        },
        {
          date: "Mar. 17 2020",
          name: "Routine 1",
          author: "UserX",
        },
        {
          date: "Mar. 17 2020",
          name: "Routine 1",
          author: "UserX",
        },
      ],
      statsWithTime: [
        {
          date: "mar 1 2020",
          time: 25,
        },
        {
          date: "mar 2 2020",
          time: 30,
        },
        {
          date: "mar 3 2020",
          time: 0,
        },
        {
          date: "mar 8 2020",
          time: 0,
        },
        {
          date: "mar 15 2020",
          time: 80,
        },
        {
          date: "mar 16 2020",
          time: 60,
        },
        {
          date: "mar 17 2020",
          time: 70,
        },
        {
          date: "mar 18 2020",
          time: 90,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.stats {
  display: flex;
  margin: 0;
  padding: 0;
}

.container {
  width: 50%;
  background-color: rgb(33, 33, 33);
  height: fit-content;
}

.routine-history-scroller {
  background-color: rgb(23, 23, 23);
  margin-left: 20px;
  margin-right: 20px;
  .item-container {
    background-color: rgb(66, 66, 66);
    margin: 10px;
    display: flex;
    .date-container {
      background-color: white;
      color: black;
      display: flex;
      align-items: center;
    }
    .name-container {
      margin-left: auto;
      margin-right: 10px;
      .routine-name {
        font-size: 35px;
      }
      .routine-author {
        font-size: 25px;
      }
    }
  }
}

.data-container {
  margin: 20px;
}

.title {
  background-color: rgb(100, 100, 100);
  position: relative;
  font-size: 15px !important;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  .v-icon {
    position: absolute;
    left: 0;
  }
}

.description {
  background-color: rgb(23, 23, 23);
  font-size: 30px;
}

.date-btn-container {
  display: flex;
  margin: 20px;

  .v-btn {
    margin-left: auto;
    margin-right: 0;
  }
}

.center-h {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
}

.center-v {
  display: flex;
  align-items: center;
}

::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
.divider {
  width: 10px;
  background-color: black;
}
</style>