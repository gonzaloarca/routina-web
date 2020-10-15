<template>
  <div class="special-routine-banner">
    <v-card class="elevation-0">
      <img :src="require(`../assets/${image}`)" class="special-background" />
      <div class="fill-height gradient"></div>
      <div class="special-container-wrapper">
        <h1 class="special-title">{{ title }}</h1>
        <div class="special-container fill-height">
          <RoutineCard
            :routine-data="routineData"
            class="special-routine-card my-10"
          />
          <p class="special-description">{{ description }}</p>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import RoutineCard from "./RoutineCard";

export default {
  name: "SpecialRoutineBanner",
  components: { RoutineCard },
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    routineData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
$banner-height: 470px;

.v-card {
  z-index: 1;
  position: relative;
  height: $banner-height;
  overflow: hidden;
  .gradient {
    z-index: -1;
    background-image: radial-gradient(rgba(0, 0, 0, 0), rgba(30, 30, 30, 1));
    position: absolute;
    width: 100%;
  }

  .special-background {
    transform: scale;
    z-index: -2;
    position: absolute;
    height: $banner-height;
    width: 100%;
    object-fit: cover;
  }
  .special-container-wrapper {
    padding: 30px;
    height: 100%;
    width: 100%;
    top: 0;
    position: absolute;
    .special-title {
      position: absolute;
    }
    .special-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      gap: 20px;

      .special-routine-card {
   
      }
      .special-description {
        max-width: 350px;
        padding: 15px;
        font-weight: 600;
        background-color: #1e1e1e;
        text-align: justify;

      }
    }
  }
}
</style>