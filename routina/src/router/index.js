import Vue from "vue";
import VueRouter from "vue-router";
import axios from 'axios';
import Home from "../views/Home.vue";
import Explore from "../views/Explore.vue";
import Tracking from "../views/Tracking.vue";
import Routines from "../views/Routines.vue";
import Plans from "../views/Plans.vue";

Vue.use(VueRouter,axios);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/routines",
    name: "Routines",
    component: Routines,
  },
  {
    path: "/plans",
    name: "Plans",
    component: Plans,
  },
  {
    path: "/tracking",
    name: "Tracking",
    component: Tracking,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
