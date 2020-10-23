<template>
  <div class="routines-banner">
    <div class="slider-wrapper">
      <div class="routines-header">
        <h1 class="black--text px-3">{{ bannerTitle }}</h1>
      </div>
      <div class="slider">
        <div
          class="slider-row1"
          :style="
            'background-image: url(' +
            require('@/assets/' + bannerImageUrl) +
            ')'
          "
          id="slider"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoutinesBanner",
  props: {
    bannerImageUrl: {
      type: String,
      required: true,
    },
    bannerTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import "../sass/variables";

$img-w: 1969px;
$img-h: 350px;
$shrink: 7/5;
$ratio: 1 / $shrink;
$speed: 40s;

$y-displacement: 0px;

.slider-wrapper {
  position: relative;
  width: 100%;
  height: $banner-height;

  .routines-header {
    height: fit-content;
    width: fit-content;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px) contrast(0.5) brightness(1.5);
    h1 {
      font-size: 30pt;
    }
  }

  .slider {
    position: absolute;
    width: 100%;
    height: $banner-height;

    overflow: hidden;
    .slider-row1 {
      width: 200%;
      height: $img-h * $ratio;
      top: $y-displacement;
      background-repeat: repeat-x;
      position: relative;
      transform: translateX(-90px);
      background-size: $img-w * $ratio $img-h * $ratio;
      animation: slide $speed linear infinite;
    }
  }
}

@keyframes slide {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -$img-w * $ratio;
  }
}
</style>
