<template>
  <div class="home-container container">
    <div class="left-content">
      <newsfeed></newsfeed>
    </div>
    <div class="right-content" id="sidebar">
      <user-suggestions></user-suggestions>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return {};
  },
  components: {
    newsfeed: () => import('./../components/Newsfeed/Newsfeed'),
    'user-suggestions': () => import('./../components/UserSuggestions/UserSuggestions'),
  },
};
</script>

<style lang="scss" scoped>
.left-content {
  float: left;
  width: 60%;
  margin-bottom: 30px;
}

.right-content {
  position: fixed;
  left: 62%;
  width: 40%;
}

@media (max-width: 768px) {
  .left-content {
    width: 100%;
  }

  .right-content {
    display: none;
  }
}
</style>
