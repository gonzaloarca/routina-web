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
  data: () => ({
    
  }),
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css family=Raleway&display=swap");
@import "./sass/variables";

.v-application {
  font-family: $body-font-family, sans-serif !important;
  .title {
    font-family: $title-font, sans-serif !important;
  }
}

.navbar {
}

.main {
  position: absolute;
  top: -$nav-bar-height;
  width: 100vw;
}
</style>
