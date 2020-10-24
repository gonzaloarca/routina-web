<template>
  <div class="stats center-h">
    <div class="container">
      <div class="routine-history-scroller">
        <div class="title">
          <v-icon class="ma-2">mdi-history</v-icon><span><h3>Routine History</h3></span>
        </div>
        <div class="scroller">
          <div class="item-container" v-for="item in stats" :key="item.id">
            <div class="date-container"><h3>{{ item.date }}</h3></div>
            <div class="name-container">
              <span class="routine-name">{{ item.name }}</span>
              <span class="routine-author">
                by <span class="primary--text">{{ item.author }}</span></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="container">
      <div class="date-btn-container">
        <div style="margin-left:auto">
          <v-select
            :items="dates.titles"
            label="Time"
            dense
            solo
            hide-details
            filled
            background-color="primary"
            color="black"
            tile
            light
            single-line
            class="black --text"
          
          ></v-select>
        </div>
        
      </div>
      <div class="data-container">
        <div class="title-big">
          <v-icon class="ma-2">mdi-history</v-icon>
          <span><h3 class="ml-10">AVERAGE TIME SPENT WORKING OUT PER DAY</h3></span>
        </div>
        <div class="description" style="display:flex; align-items:center; justify-content:center; height:90px;">32.7 minutos</div>
      </div>
      <div class="data-container">
        <div class="title-big">
          <v-icon class="ma-2">mdi-history</v-icon>
          <span><h3 class="ml-10">TOTAL TIME SPENT WORKING OUT</h3></span>
        </div>
        <div class="description" style="display:flex; align-items:center; justify-content:center; height:90px;">5 hours, 30.1 minutes</div>
      </div>
      <div class="btn-container">
        <v-btn
          v-on:click="overlayGraph = true"
          rounded
          class="primary black--text"
          
          ><h3>Show Graph</h3></v-btn
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
  components: { OverlayGraph },
  data() {
    return {
      overlayGraph: false,
      dates: {
        titles: ["Last Week", "Last Month", "Last Year", "Ever"],
      },
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
  
}

.select-fmt {
  color: $primary;
  
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
      padding-left: 5px;
      padding-bottom: 5px;
      padding-top: 5px;
      padding-right: 5px;

    }
    .name-container {
      margin-left: 120px;
      margin-right: 10px;
      .routine-name {
        font-size: 20px;
      }
      .routine-author {
        font-size: 18px;
      }
    }
  }
}

.scroller {
  height: 400px;
  overflow-x: auto;
  overflow-y: scroll;
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
  height:45px;
  min-height:fit-content;
  text-transform:uppercase;
  .v-icon {
    position: absolute;
    left: 0;
  }
}

.title-big {
  background-color: rgb(100, 100, 100);
  position: relative;
  font-size: 15px !important;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height:60px;
  min-height:fit-content;
  text-transform:uppercase;
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
    // margin-left: auto;
    margin-right: 0;
    width:50%;
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

.divider {
  width: 3px;
  margin-top:20px;
  margin-bottom:20px;
  background-color: rgb(20, 20, 20);
}
</style>