<template>
  <div id="app">
    <navbar></navbar>
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

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
</style>
