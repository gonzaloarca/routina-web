import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Explore from "../views/Explore.vue";
import Tracking from "../views/Tracking.vue";
import Routines from "../views/Routines.vue";
import Plans from "../views/Plans.vue";
import RegisterUser from "../views/RegisterUser.vue";

Vue.use(VueRouter);

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
  {
    path: "/register",
    name: "RegisterUser",
    component: RegisterUser,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
