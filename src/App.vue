<template>
  <v-app>
    <Header :headerTitle="materia.title" v-if="$route.path !== '/login'" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "App",
  data() {
    return {
      materia: {
        title: "Página X",
      },
    };
  },
  components: {
    Header,
  },
};
</script>

<style scoped></style>
