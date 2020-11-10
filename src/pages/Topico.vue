<template>
  <div class="matriz">
    <div class="content">
      <v-expansion-panels>
        <v-expansion-panel v-for="texto in textos" :key="texto.title">
          <v-expansion-panel-header>
            {{ texto.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <vue-mathjax :formula="texto.content"></vue-mathjax>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import { VueMathjax } from "vue-mathjax";
export default {
  components: {
    "vue-mathjax": VueMathjax,
  },
  data() {
    return {
      textos: [
        {
          title: "Definição de Matriz",
          content:
            "Lorem ipsum dolor $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$  sit amet,aliquip ex ea commodo $3^9$ consequat.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        },
        {
          title: "Matriz quadrada",
          content:
            "aaaaLorem ipsum dolor sit $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$",
        },
      ],
    };
  },
};
</script>

<style scoped>
.matriz {
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  height: 100%;
}

.content {
  padding: 5%;
  background-color: #f4f4f4;
  width: 70%;
}
</style>
