import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Materia from "./pages/Materia";
import Topico from "./pages/Topico";

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
      path: "/topico/:id",
      component: Topico,
      meta: {
        requiresAuth: true,
      },
      props: true,
    },
    {
      path: "/materia/:currentMateria",
      component: Materia,
      meta: {
        requiresAuth: true,
      },

      props: true,
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
    next("/login");
  } else {
    next();
  }
});

export default router;
