<template>
  <v-app>
    <v-container>
      <v-card >
        <v-progress-linear :indeterminate="true" :hidden="!load"></v-progress-linear>
        <v-card-title primary-title>
          <div>
            <h3 class="headline">Inicio de Sesión</h3>
            <v-divider></v-divider>
            <div>description</div>
          </div>
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              label="Correo Electronico"
              id="email"
              :rules="emailRules"
              required
              prepend-icon="email"
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Contraseña"
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="!e1 ? 'password' : 'text'"
              id="password"
              :rules="passwordRules"
              required
              prepend-icon="vpn_key"
            ></v-text-field>
            <v-btn
              :disabled="!valid"
              color="info"
              @click="login">Iniciar Sesión</v-btn>
          </v-form>
        </v-card-text>
      </v-card>

      <pre style="padding-top:60px;">
          {{ $data }}
      </pre>
    </v-container>
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
      email: "",
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

      this.load = true;

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
          .then(user => this.$router.replace('Admin'), error => {console.log(error); this.load=false;});
    }
  }
};
</script>

<style scoped>
</style>
