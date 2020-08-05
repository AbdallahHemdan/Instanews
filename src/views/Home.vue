<template>
  <div class="home container">
    <div class="home__left">
      <home-stories></home-stories>
      <newsfeed></newsfeed>
    </div>

    <div class="home__right">
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
    'home-stories': () => import('./../components/HomeStories/HomeStories'),
  },
};
</script>

<style lang="scss" scoped>
.home {
  &__left {
    float: left;
    width: 60%;
    margin-bottom: 30px;
  }

  &__right {
    position: fixed;
    left: 62%;
    width: 40%;
  }

  @media (max-width: 768px) {
    &__left {
      width: 100%;
    }

    &__right {
      display: none;
    }
  }
}
</style>
