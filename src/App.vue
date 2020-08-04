<template>
  <div id="app">
    <navbar></navbar>
    <main class="container main-page">
      <router-view />
    </main>
  </div>
</template>

<script>
import firebase from 'firebase';
import Navbar from './components/Navbar/Navbar';
export default {
  name: 'app',
  data: function() {
    return {
      user: null,
    };
  },
  components: {
    navbar: Navbar,
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('accessToken', user.uid);
        localStorage.setItem('displayName', user.displayName);
      } else {
        this.user = null;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('displayName');
      }
    });
  },
};
</script>

<style lang="scss">
body {
  background-color: #fafafa;
}

.main-page {
  margin-top: 92px;
}
</style>
