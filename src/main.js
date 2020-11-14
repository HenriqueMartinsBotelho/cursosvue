import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "./services/firebaseConnection";
import vuetify from "./plugins/vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import VueCodeHighlight from "vue-code-highlight";

Vue.config.productionTip = false;
Vue.use(VueCodeHighlight);

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
