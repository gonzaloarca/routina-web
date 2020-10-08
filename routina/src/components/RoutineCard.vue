<template>
  <div class="routine-card">
      <v-card height="150" width="150">
          <img :src="routineData.image" class="card-image">
          <div class="card-title text-uppercase font-weight-bold black--text">{{routineData.routineName}}</div>
      </v-card>
  </div>
</template>

<script>
export default {
  name: "RoutineCard",
  props: { routineData: Object },
};
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

.routine-card{
    position: relative;
}
.card-image{
    height: 50px;
    width: 30px;
    align-content: bottom;
}
.card-title{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 5px 0 5px 0;
    background-color: rgb(145, 145, 145);
    text-align: center;

}
</style>