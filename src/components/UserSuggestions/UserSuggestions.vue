<template>
  <div class="user-suggestions">
    <user-info></user-info>

    <suggestion-header></suggestion-header>

    <single-suggestion v-for="(user, index) in usersToSuggest" :key="index" :user="user">
    </single-suggestion>

    <div class="footer">
      ALL RIGHTS RECEIVED
      <a href="https://github.com/AbdallahHemdan" class="footer__link">HEMDAN</a> &copy; 2020
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserSuggestions',
  data: function() {
    return {
      usersToSuggest: require('./../../mock/Home/UserSuggestions').default,
    };
  },
  methods: {},
  computed: {},
  components: {
    'user-info': () => import('./../UserInfo/UserInfo'),
    'suggestion-header': () => import('./../SuggestionHeader/SuggestionHeader'),
    'single-suggestion': () => import('./../SingleSuggestion/SingleSuggestion'),
  },
};
</script>

<style lang="scss" scoped>
.footer {
  float: left;
  margin-top: 2rem;
  margin-left: 8px;
  font-size: 15px;
  color: $dark-gray;
  text-align: center;

  &__link {
    text-decoration: none;
  }
}
</style>
