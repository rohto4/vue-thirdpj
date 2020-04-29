// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAeFiFA1ViGVDMfWMwKB-hTK_fnQtViSHU",
  authDomain: "vue-third-pj.firebaseapp.com",
  databaseURL: "https://vue-third-pj.firebaseio.com",
  projectId: "vue-third-pj",
  storageBucket: "vue-third-pj.appspot.com",
  messagingSenderId: "211841787879",
  appId: "1:211841787879:web:2ded6053d64b43d18e3f42",
  measurementId: "G-1L4KELKBRZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
