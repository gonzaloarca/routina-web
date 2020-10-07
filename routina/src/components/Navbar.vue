<template>
  <nav app>
    <v-app-bar
      app
      class="appbar"
      dark
      color="transparent"
      flat
      :height="navBarHeight"
    >
      <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>

      <router-link :to="'/'">
        <v-img
          class="mx-4"
          width="200px"
          alt="routina logo"
          src="../assets/logo.png"
        />
      </router-link>
      <div></div>

      <v-spacer></v-spacer>
      <v-btn
        v-for="link in navLinks"
        :key="link.label"
        text
        tile
        class="mx-2 font-weight-bold"
        active-class="active-btn"
        router 
        :to="link.route"
      >
        {{ link.label }}
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon class="mr-1">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import styles from "../sass/variables.scss";

export default {
  data() {
    return {
      navLinks: [
        { label: "Home", route: "/" },
        { label: "Explore", route: "/explore" },
        { label: "My Routines", route: "/routines" },
        { label: "Plans", route: "/plans" },
        { label: "Tracking", route: "/tracking" },
      ],
      navBarHeight: styles.navBarHeight,
    };
  },
};
</script>

<style scoped lang="scss" >
@import "../sass/variables";

.appbar {
  background-image: linear-gradient(rgba(0, 0, 0, 1) 5%,rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0));
}

.active-btn{
  color: #FF8000 !important;
}

.theme--dark.v-btn--active:hover::before, .theme--dark.v-btn--active::before {
  opacity: 0;
}
</style>