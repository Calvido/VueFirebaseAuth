// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import firebase from 'firebase'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuetify)

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDOIZhZNJpO1pkKjBBGB6S-Fk78JY5-rvo",
  authDomain: "pruebasauth-fcca.firebaseapp.com",
  databaseURL: "https://pruebasauth-fcca.firebaseio.com",
  projectId: "pruebasauth-fcca",
  storageBucket: "",
  messagingSenderId: "337524815779"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user){

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })

});


