<template>
  <div class="materia">
    <div class="content">
      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              @click="sortBy('title')"
              class="ma-1"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>folder</v-icon>
              <span class="caption">Matéria</span>
            </v-btn>
          </template>
          <span>Ordenar por matéria</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              @click="sortBy('person')"
              class="ma-1"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>person</v-icon>
              <span class="caption">Professor</span>
            </v-btn>
          </template>
          <span>Ordenar por professor</span>
        </v-tooltip>
      </v-layout>

      <v-card
        text
        class="pa-2 mt-4 mb-4 cartao"
        v-for="topico in topicos"
        @click="goToTopic(topico.urlTopic)"
        :key="topico.title"
      >
        <v-layout row wrap :class="`pa-3 topico ${topico.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text ml-5">Tópico</div>
            <div class="ml-5">{{ topico.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text ml-5">Professor</div>
            <div class="ml-5">{{ topico.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text ml-5">Atualizado</div>
            <div class="ml-5">
              {{ formatDate(Date(topico.date)) }}
            </div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip
                small
                :class="`${topico.status} white--text caption my-2`"
                >{{
                  topico.status === "ongoing" ? "Em andamento" : "Completo"
                }}</v-chip
              >
            </div>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>
      </v-card>
    </div>
  </div>
</template>

<script>
import firebase from "../services/firebaseConnection";
import moment from "moment";
export default {
  data() {
    return {
      topicos: [],
    };
  },
  props: ["currentMateria"],

  async created() {
    // this.currentMateria = this.$route.path.replace(/^\/|\/$/g, "");
    this.listaDeTopicos();
  },
  methods: {
    sortBy(prop) {
      this.topicos.sort((a, b) => (a[prop] <= b[prop] ? -1 : 1));
    },
    async listaDeTopicos() {
      try {
        const lista = await firebase
          .firestore()
          .collection("materias")
          .doc(this.currentMateria)
          .get();
        let dados = lista.data().topicos;
        for (let d of dados) {
          this.topicos.push(d);
        }
      } catch (error) {
        console.log("Erro ao buscar lista no banco" + error);
      }
    },
    goToTopic(topic) {
      this.$router.push(`/topico/${topic}`);
    },
    formatDate(date) {
      const d = moment(date).format("DD / MMM / YYYY");
      return d;
    },
  },
};
</script>

<style scoped>
.materia {
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

.topico.complete {
  border-left: 4px solid #3cd1c2;
}

.topico.ongoing {
  border-left: 4px solid orange;
}

.v-chip.v-chip--no-color.theme--light.complete {
  background-color: #3cd1c2;
}

.v-chip.v-chip--no-color.theme--light.ongoing {
  background-color: #ffaa2c;
}

.cartao:hover {
  background-color: #f4f4f4;
  cursor: pointer;
}
</style>
