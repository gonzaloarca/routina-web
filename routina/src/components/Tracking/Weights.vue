<template>
  <div style="display: flex; justify-content: center">
    <div
      style="background-color: rgb(33, 33, 33); width: 30%; height: fit-content"
      class="my-0 mx-2 center"
    >
      <div class="my-4">
        <div style="font-size: 20px" class="grey">
          <span class="font-weight-black mx-10"
            ><v-icon>mdi-scale-bathroom</v-icon> Latest Weightings Records</span
          >
        </div>
        <div class="weight-container center"><span>65.1kg</span></div>
        <div>
          <v-btn
            x-big
            rounded
            class="my-6 primary black--text font-weight-black"
            ><span>Add New Weighting</span></v-btn
          >
        </div>
      </div>
    </div>
    <div
      style="background-color: rgb(33, 33, 33); width: 40%"
      class="my-0 mx-2 center"
    >
      <div style="width: 95%" class="my-4">
        <div style="font-size: 20px" class="grey">
          <span class="font-weight-black mx-10"
            ><v-icon>mdi-history</v-icon> Weighting History</span
          >
        </div>
        <div class="center">
          <v-virtual-scroll
            :items="weightings"
            :item-height="60"
            :height="240"
            style="background-color: rgb(23, 23, 23)"
          >
            <template v-slot="{ item }">
              <v-list-item
                style="
                  position: relative;
                  margin: auto;
                  margin-top: 10px;
                  background-color: rgb(66, 66, 66);
                  width: 80%;
                "
              >
                <div
                  class="white black--text"
                  style="left: 0; position: absolute"
                >
                  Mar 10 <br />
                  2020
                </div>
                <div style="position: absolute; right: 0; margin-right: 3px">
                  <span><v-icon>mdi-scale-bathroom</v-icon>{{ item }} kg</span>
                </div>
              </v-list-item>
            </template>
          </v-virtual-scroll>
        </div>
        <div>
          <v-btn
            x-big
            rounded
            class="my-6 primary black--text font-weight-black"
            ><span>SHOW GRAPH</span></v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Weights",
    props:{weightings:Array}
}
</script>

<style scoped>
.weight-container {
  background-color: rgb(23, 23, 23);
  height: 150px;
  font-size: 40px;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  margin: auto;
}

::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
</style>