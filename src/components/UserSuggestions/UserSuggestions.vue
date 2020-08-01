<template>
  <div class="user-suggestions-container">
    <user-info></user-info>
    <suggestion-header></suggestion-header>
    <single-suggestion v-for="(user, index) in usersToSuggest" :key="index" :user="user">
    </single-suggestion>
  </div>
</template>

<script>
export default {
  name: 'UserSuggestions',
  data: function() {
    return {
      usersToSuggest: [
        {
          userImg:
            'https://instagram.fcai19-2.fna.fbcdn.net/v/t51.2885-19/s150x150/95221472_440488696796279_245378164589592576_n.jpg?_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_ohc=Z3QFcXAsVyUAX9LhRUC&oh=c677e9567affef5025bab80d8632c6fe&oe=5F4D4EAA',
          username: 'sayedalesawy',
          suggestionBase: 'popular',
          id: '1',
        },
        {
          userImg:
            'https://instagram.fcai19-2.fna.fbcdn.net/v/t51.2885-19/s150x150/93602357_153855199370851_2219568734123589632_n.jpg?_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_ohc=N8g84WcmI2sAX82znvI&oh=39be7c8305ee2cad0a9d5c0a592e5be4&oe=5F51112E',
          username: 'nasser_ahmed009',
          suggestionBase: 'popular',
          id: '2',
        },
        {
          userImg:
            'https://instagram.fcai19-2.fna.fbcdn.net/v/t51.2885-19/s150x150/71101176_686434495193983_6272575461205737472_n.jpg?_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_ohc=7CYZj8q2csIAX8uoGUC&oh=4247e1a77f990ffdbb908cd305f7782f&oe=5F4E65C7',
          username: 'hellomayuko',
          suggestionBase: 'popular',
          id: '3',
        },
        {
          userImg:
            'https://instagram.fcai19-2.fna.fbcdn.net/v/t51.2885-19/s150x150/74670561_705013450006616_4647295489199308800_n.jpg?_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_ohc=fS-fqa3z9ykAX_RKjW3&oh=97353b9c3fae178aa7c21fde7fde545c&oe=5F50C4C2',
          username: 'ranaelkaliouby',
          suggestionBase: 'popular',
          id: '4',
        },
        {
          userImg:
            'https://instagram.fcai19-2.fna.fbcdn.net/v/t51.2885-19/s150x150/91243337_531392880852319_3226176362406477824_n.jpg?_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_ohc=AYMkonaFslkAX-Ym_As&oh=7ba5f51682ae9b4818ee222f3f7158ea&oe=5F50477B',
          username: 'amr.sherif.adel',
          suggestionBase: 'popular',
          id: '5',
        },
        {
          userImg:
            'https://instagram.fcai19-2.fna.fbcdn.net/v/t51.2885-19/s150x150/73095012_2821471094557540_354524605114744832_n.jpg?_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_ohc=b-w3_FfhiQsAX-Iccab&oh=57c6e3a961d2942b3852c38021b391f1&oe=5F4E0375',
          username: 'sharif__alii',
          suggestionBase: 'popular',
          id: '6',
        },
      ],
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

<style lang="scss" scoped></style>
