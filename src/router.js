import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Algelin from "./pages/algelin/Algelin";

import firebase from "./services/firebaseConnection";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/algelin/:materia",
      component: Algelin,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      component: Login,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  //Verificando se alguma rota tem esse requiresAuth.

  if (requiresAuth && !firebase.auth().currentUser) {
    console.log("kkk");
    next("/login");
  } else {
    console.log("bbb");
    next();
  }
});

export default router;
