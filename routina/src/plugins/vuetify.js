import Vue from "vue";
import Vuetify from "vuetify/lib";


Vue.use(Vuetify);

export default new Vuetify({
  breakpoint:{
    thresholds:{
      md: 960,
    },
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#ff8000",
      },
    },
  },
});
