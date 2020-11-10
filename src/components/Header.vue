<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <h3>{{ headerTitle }}</h3>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <button @click="firebaseSignOut()">SignOut</button>
    </v-toolbar>
    <v-navigation-drawer temporary app v-model="drawer" class="primary">
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text">
          <v-list-tile-action>
            <v-icon class=" ma-3 white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">
              <router-link class="white--text linklateral" :to="link.route">{{
                link.text
              }}</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
          <v-spacer></v-spacer>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import firebase from "../services/firebaseConnection";
import router from "@/router";

export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Home", route: "/" },
        { icon: "folder", text: "Álgebra Linear", route: "/materia/algelin" },
        { icon: "folder", text: "Teoria dos Números", route: "/teon" },
      ],
    };
  },
  props: ["headerTitle"],
  methods: {
    firebaseSignOut() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          router.push("/");
        })
        .catch(function(error) {
          console.log("Erro ao tentar efetuar SignOut" + error);
        });
    },
  },
};
</script>

<style scoped>
.linklateral {
  text-decoration: none;
}
</style>
