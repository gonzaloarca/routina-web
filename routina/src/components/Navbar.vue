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
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

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
        class="mx-2 font-weight-bold hidden-sm-and-down"
        active-class="active-btn"
        router
        :to="link.route"
      >
        {{ link.label }}
      </v-btn>

      <!-- Search bar -->
      <v-menu
        offset-y
        nudge-left="240px"
        :close-on-content-click="false"
        v-model="searchOpen"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-on="on"
            v-bind="attrs"
            @click="searchOpen = !searchOpen"
          >
            <v-icon :class="searchOpen ? 'orange--text' : 'white--text'">
              mdi-magnify</v-icon
            >
          </v-btn>
        </template>
        <v-text-field
          elevation="0"
          v-model="searchInput"
          append-icon="mdi-magnify"
          @keyup.enter="search"
          @click:append="search"
          clearable
          label="Search"
          solo
          rounded
          light
        >
        </v-text-field>
      </v-menu>

      <!-- <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn> -->
      <LoggedInPopOver v-if="loggedIn"/>
      <LoginPopOver v-else/>
    </v-app-bar>

    <!-- Navigation drawer -->
    <v-navigation-drawer
      v-model="drawer"
      class="hidden-md-and-up"
      disable-resize-watcher
      app
    >
      <v-list>
        <v-list-item
          class="orange--text"
          v-for="link in navLinks"
          :key="link.text"
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-title class="font-weight-medium">{{
            link.label
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import LoginPopOver from "@/components/LoginPopOver";
import LoggedInPopOver from "./LoggedInPopOver";
import styles from "../sass/variables.scss";


export default {
  data() {
    return {
      navLinks: [
        { label: "Home", route: "/", icon: "mdi-home" },
        { label: "Explore", route: "/explore", icon: "mdi-magnify" },
        { label: "My Routines", route: "/routines", icon: "mdi-dumbbell" },
        // { label: "Plans", route: "/plans", icon: "mdi-clipboard-text" },
        {
          label: "Tracking",
          route: "/tracking",
          icon: "mdi-chart-timeline-variant",
        },
      ],
      navBarHeight: styles.navBarHeight,
      drawer: false,
      searchOpen: false,
      searchInput: "",
      loggedIn:true,
    };
  },
  methods: {
    search() {
      console.log(this.searchInput);
    },
    onResize() {
      if (window.innerWidth >= this.$vuetify.breakpoint.thresholds.md) {
        this.drawer = false;
      }
    },
  },
  mounted() {
    this.onResize();

    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize);
  },
  components:{LoginPopOver, LoggedInPopOver},
};
</script>

<style scoped lang="scss" >
@import "../sass/variables";

.appbar {
  background-image: linear-gradient(
    rgba(0, 0, 0, 1) 5%,
    rgba(0, 0, 0, 0.7) 40%,
    rgba(0, 0, 0, 0)
  );
}

.active-btn {
  color: #ff8000 !important;
}

.v-menu__content {
  box-shadow: none;
}

.theme--dark.v-btn--active:hover::before,
.theme--dark.v-btn--active::before {
  opacity: 0;
}
</style>
