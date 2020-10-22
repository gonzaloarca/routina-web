import '@fortawesome/fontawesome-free/css/all.css'

import Vue from "vue";
import Vuetify from "vuetify/lib";



Vue.use(Vuetify,{
  iconfont: 'fa'
})

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
