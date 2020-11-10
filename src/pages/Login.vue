<template>
  <div id="conteiner">
    <v-btn @click="googleLogin" class="pink white--text"
      >Login com Google
    </v-btn>
  </div>
</template>

<script>
import firebase from "../services/firebaseConnection";

export default {
  methods: {
    async googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let token = result.credential.accessToken;
          let user = result.user;
          console.log("TOKEN" + token);
          console.log("USER" + user);
          console.log("RESULT" + result);
          this.$router.replace("/");
        })
        .catch((err) => {
          alert("Oops. " + err.message);
        });
    },
  },
};
</script>

<style scoped>
#conteiner {
  background-color: aqua;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 50%;
  height: 100vh;
}
</style>
