import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: 'AIzaSyDD3BWIbIyMps-i9mvEhKjTJhUeeGhZmlo',
  authDomain: 'instanews-2abc6.firebaseapp.com',
  databaseURL: 'https://instanews-2abc6.firebaseio.com',
  projectId: 'instanews-2abc6',
  storageBucket: 'instanews-2abc6.appspot.com',
  messagingSenderId: '134963009544',
  appId: '1:134963009544:web:c8474e3ac3c31c0a9719bd',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(VueResource);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
