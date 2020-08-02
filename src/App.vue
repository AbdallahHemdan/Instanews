<template>
  <div id="app">
    <navbar></navbar>
    <main class="container main-page">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar';

export default {
  name: 'app',
  data: function() {
    return {};
  },
  components: {
    navbar: Navbar,
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
