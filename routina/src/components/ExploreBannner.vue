<template>
  <div class="explore-banner">
    <div class="slider-wrapper">
      <div class="explore-header">
        <h1 class="black--text">Explore</h1>
      </div>
      <div class="slider">
        <div class="slider-row1"></div>
        <div class="slider-row2"></div>
        <div class="slider-row3"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ExploreBanner",
};
</script>

<style scoped lang="scss">
$img-w: 4980px;
$img-h: 1080px;
$shrink: 7;
$ratio: 1 / $shrink;
$speed: 40s;
$banner-height: 350px;
$y-displacement: -(3 * $img-h * $ratio - $banner-height);

.slider-wrapper {
  position: relative;
  width: 100%;
  height: $banner-height;
  
  .explore-header {
    height: 70px;
    width: 170px;
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
    backdrop-filter: blur(5px) contrast(0.5) brightness(1.5) ;
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
      background-image: url("../assets/explore-inf-scroll.jpg");
      background-repeat: repeat-x;
      position: relative;
      transform: translateX(-90px);
      background-size: $img-w * $ratio $img-h * $ratio;
      animation: slide $speed linear infinite;
    }
    .slider-row2 {
      width: 200%;
      height: $img-h * $ratio;
      top: $y-displacement;
      position: relative;
      background-image: url("../assets/explore-inf-scroll.jpg");
      background-repeat: repeat-x;
      background-size: $img-w * $ratio $img-h * $ratio;
      animation: slide $speed linear infinite;
    }
    .slider-row3 {
      width: 500%;
      height: $img-h * $ratio;
      top: $y-displacement;
      position: relative;
      background-image: url("../assets/explore-inf-scroll.jpg");
      background-repeat: repeat-x;
      transform: translateX(-300px);
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
