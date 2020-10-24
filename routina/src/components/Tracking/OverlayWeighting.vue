<template>
  <v-overlay class="overlay-content" :value="overlayWeightings">
    <div class="centered-div">
      <v-card width="500px" tile justify-center>
        <div
          style="
            text-transform: uppercase;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
          "
          class="grey darken-1"
        >
          <span class="font-weight-bold"
            ><v-icon left class="icon-left">mdi-scale-bathroom</v-icon>
            Add new weighting
            <v-btn
              icon
              v-on:click="closeOverlayWeight"
              class="close-button pa-0"
              ><v-icon class="pa-1">mdi-close</v-icon>
            </v-btn>
          </span>
        </div>
        <div style="font-size: 20px" class="grey darken-4">
          <span
            class="font-weight-bold ma-10"
            style="align-items: center; justify-content: center; display: flex"
          >
            <v-text-field
              placeholder="Insert new weight value"
              solo
              rounded
              dense
              hide-details
              light
              clearable
              style="width: 300px"
              v-model="weighting"
            ></v-text-field>
          </span>
          <div class="centered-div">
            <v-btn
              x-big
              rounded
              width="20%"
              class="ma-3 primary black--text font-weight-bold"
              @click="addWeighting"
              ><span>Add</span></v-btn
            >
            <v-btn
              x-big
              rounded
              width="20%"
              class="ma-3 font-weight-bold"
              color="primary"
              dark
              outlined
              v-on:click="closeOverlayWeight"
              ><span>Cancel</span></v-btn
            >
          </div>
        </div>
      </v-card>
    </div>
  </v-overlay>
</template>

<script>
import {UserApi,} from "@/services/user.js";
 export default {
  name: "overlayWeight",
  props: {
    overlayWeightings: Boolean,
  },
  data(){
    return{
      weighting:0,
    }
  },
  methods: {
    closeOverlayWeight() {
      this.$emit("close-overlay-weight", false);
      return;
    },

    updateWeights(){
      this.$emit("update-weightings", false);
    },
    
    async addWeighting(){
      console.log("WEEEEEEIIIIGHHTING");
      console.log(this.weighting);
      this.weighting = parseFloat(this.weighting);
      const res=await UserApi.addWeightingToUser(this.weighting,);
      console.log("hola");
      this.updateWeights();
      console.log("holaaaa");
      this.closeOverlayWeight();
      console.log("holaaaaaaaa");
     
      return res;
    },
  },
};
</script>

<style scoped lang="scss">
@import "~vuetify/src/styles/styles.sass";


.close-button {
  position: absolute;
  right: 0px;
}

.overlay-content {
  width: 100%;
  height: 100%;
}

.centered-div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-left {
  position: absolute;
  left: 0px;
  padding: 3px 3px 3px 3px;
}

.close-button {
  position: absolute;
  top: -4px;
  right: 0px;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 0px 0px;
}
</style>