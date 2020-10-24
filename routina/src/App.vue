<template>
  <v-app>
    <Navbar />
    <v-main class="main">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: { Navbar },
  data: () => ({}),
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css family=Open+Sans&display=swap");
@import "./sass/variables";

$scrollbar-color-primary: rgb(87, 87, 87);
$scrollbar-color-secondary: rgb(0, 0, 0);

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

.v-application {
  font-family: $body-font-family !important;
  .title {
    font-family: $title-font !important;
  }
}

.navbar {
}

.main {
  position: absolute;
  top: -$nav-bar-height;
  width: 100vw;
}
* {
  scrollbar-width: thin;
  scrollbar-color: $scrollbar-color-primary $scrollbar-color-secondary;
}

/* Works on Chrome/Edge/Safari */
*::-webkit-scrollbar {
  width: 12px;
}
*::-webkit-scrollbar-track {
  background: $scrollbar-color-secondary;
}
*::-webkit-scrollbar-thumb {
  background-color: $scrollbar-color-primary;
  border-radius: 20px;
  border: 3px solid $scrollbar-color-secondary;
}
</style>
