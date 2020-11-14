/* eslint-disable */
<template>
  <div class="matriz">
    <div class="content">
      <v-flex class="mt-4 mb-3"> </v-flex>
      <v-expansion-panels>
        <v-expansion-panel v-for="(texto, index) in textos" :key="texto.title">
          <v-expansion-panel-header>
            {{ texto.title }}
            <div class="icones">
              <PopupChat
                class="dentro"
                :idTopico="index"
                :mensagens="texto.comment.comentarios"
              />
              <PopupEdit class="dentro" />
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div>
              <vue-mathjax :formula="texto.content"> </vue-mathjax>

              <prism class="codigo" language="javascript">
                {{ textao }}
              </prism>

              <img v-if="texto.imgURL" :src="texto.imgURL" alt="" />
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import firebase from "../services/firebaseConnection";
import PopupChat from "../components/PopupChat";
import PopupEdit from "../components/PopupEdit";
import { VueMathjax } from "vue-mathjax";
import "prismjs/prism";
import "prismjs/themes/prism.css";
import Prism from "vue-prism-component";
export default {
  components: {
    "vue-mathjax": VueMathjax,
    PopupChat,
    PopupEdit,
    Prism,
  },
  data() {
    return {
      textos: [],
      textao: `"let isPalindrome = (word) => {  <br><br><br>
let [length, result] = [word.length, true];
for (let i = 0; i < length / 2; i++) {
\t \t \t if (word[i] !== word[length - 1 - i])
 result = false;}
 return result; }
 module.exports = isPalindrome;"`,
    };
  },
  props: ["currentText"],
  async created() {
    this.listaDeTextos();
  },
  methods: {
    async listaDeTextos() {
      try {
        const texts = await firebase
          .firestore()
          .collection("topicos")
          .doc(this.currentText)
          .get();
        let dados = texts.data().itens;
        for (let d of dados) {
          this.textos.push(d);
        }
      } catch (error) {
        console.log("Erro ao buscar textos no banco" + error);
      }
    },
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

.codigo {
  width: 1000px;
}

.icones {
  position: relative;
  margin-right: -115%;
}
</style>
