import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Explore from "../views/Explore.vue";
import Tracking from "../views/Tracking.vue";
import Routines from "../views/Routines.vue";
import Plans from "../views/Plans.vue";
import Routine from "../views/Routine.vue";
import EditRoutine from "../views/EditRoutine.vue";
import RegisterUser from "../views/RegisterUser.vue";
import Settings from "../views/Settings.vue";
import MyProfile from "../views/MyProfile.vue";

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
    path: "/routine",
    name: "Routine",
    component: Routine,
  },
  {
    path: "/edit-routine",
    name: "EditRoutine",
    component: EditRoutine,
  },
  {
    path: "/register",
    name: "RegisterUser",
    component: RegisterUser,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/profile",
    name: "MyProfile",
    component: MyProfile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
