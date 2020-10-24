import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Explore from "../views/Explore.vue";
import Tracking from "../views/Tracking.vue";
import Routines from "../views/Routines.vue";

import Routine from "../views/Routine.vue";
import EditRoutine from "../views/EditRoutine.vue";
import RegisterUser from "../views/RegisterUser.vue";
import Settings from "../views/Settings.vue";
import MyProfile from "../views/MyProfile.vue";
import CreateExercise from "../views/CreateExercise.vue";
import GenericProfile from "../views/GenericProfile.vue";
import VerifyEmail from "../views/VerifyEmail.vue";

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
    path: "/tracking",
    name: "Tracking",
    component: Tracking,
  },
  {
    path: "/routine/:id",
    name: "Routine",
    component: Routine,
  },
  {
    path: "/routine/:id/edit-routine",
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
  {
    path: "/create-exercise",
    name: "CreateExercise",
    component: CreateExercise,
  },
  {
    path: "/generic-profile/:id",
    name: "GenericProfile",
    component: GenericProfile,
  },
  {
    path: "/verify-email",
    name: "VerifyEmail",
    component: VerifyEmail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
