<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on" icon>
          <v-icon>comment</v-icon> {{ mensagens.length }}
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container class="secaocomentarios">
            <v-row v-for="mensagem of mensagens" :key="mensagem.content">
              <div class="pequeno">
                <div class="font-weight-black">{{ mensagem.user }}</div>
                <div class="insidePequeno">{{ mensagem.content }}</div>
              </div>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-textarea
                  name="inputComentario"
                  label="Comentário*"
                  value=""
                  hint="Digite sua dúvida"
                ></v-textarea>
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
          <v-btn color="blue darken-1" text @click="dialog = false">
            Comentar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
  props: ["idTopico", "mensagens"],
};
</script>

<style scoped>
.secaocomentarios {
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
