<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on" icon>
          <v-icon>edit</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container class="secaoprincipal">
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  name="inputTitle"
                  label="Título*"
                  value=""
                  hint="Digite o título"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-textarea
                  name="inputConteudo"
                  label="Conteúdo*"
                  value=""
                  hint="Digite o conteúdo"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-textarea
                  name="inputCodigo"
                  label="Código"
                  value=""
                  hint="Digite o código"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  name="inputURL"
                  label="Imagem"
                  value=""
                  hint="Digite a url da Imagem"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*Campo requerido</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Fechar
          </v-btn>
          <v-btn color="blue darken-1" text @click="salvarTopico()">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import firebase from "../services/firebaseConnection";

export default {
  data: () => ({
    dialog: false,
  }),
  props: ["idTopico", "mensagens"],
  methods: {
    async salvarTopico() {
      console.log("jjj");
      const col = firebase.firestore().collection("topicos");
      const query = col.where("itens", "array-contains", "code");
      query.get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          console.log(doc);
        });
      });
    },
  },
};
</script>

<style scoped>
.secaoprincipal {
  overflow-y: auto;
}
.pequeno {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
  margin-top: 10px;
}
.insidePequeno {
  margin-left: 10px;
}
</style>
