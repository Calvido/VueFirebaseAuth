<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card>
              <v-progress-linear :indeterminate="true" :hidden="!load"></v-progress-linear>
              <v-toolbar dark color="primary">
                <v-toolbar-title>Inicio de Sesión</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="email"
                    label="Correo Electronico"
                    id="email"
                    :rules="emailRules"
                    required
                    prepend-icon="email">
                  </v-text-field>
                  <v-text-field
                    v-model="password"
                    label="Contraseña"
                    :append-icon="e1 ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (e1 = !e1)"
                    :type="!e1 ? 'password' : 'text'"
                    id="password"
                    :rules="passwordRules"
                    required
                    prepend-icon="vpn_key">
                  </v-text-field>
                </v-form>
                <v-alert
                  v-model="alert"
                  type="error"> {{msj}}
                </v-alert>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn
                  :disabled="!valid"
                  color="info"
                  @click="login">Iniciar Sesión</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import firebase from "firebase";

export default {
  data() {
    return {
      e1: false,
      valid: true,
      load: false,
      alert: false,
      email: "",
      msj: "",
      emailRules: [
        v => !!v || "Debe indicar el Correo Electronico",
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "Debe indicar un correo Válido"
      ],
      password: "",
      passwordRules: [
        v => !!v || "Debe indicar una contraseña",
        v =>
          v.length <= 10 ||
          "La contraseña debe contener menos de 10 caracteres alfanumericos"
      ]
    };
  },
  methods: {
    login() {
      this.alert = false;
      this.load = true;

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
          .then(user => this.$router.replace('Admin'), error => {
            console.log(error);
            this.msj = error.message;
            this.alert = true;
            this.load=false;});
    }
  }
};
</script>

<style scoped>
</style>
