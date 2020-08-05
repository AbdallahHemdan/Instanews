<template>
  <div class="newsfeed">
    <post v-for="(post, index) in posts" :key="index" :post="post" :comments="comments"></post>
  </div>
</template>
<script>
export default {
  name: 'Newsfeed',
  data: function() {
    return {
      posts: require('./../../mock/Home/Posts').default,
      comments: require('./../../mock/Home/Comments').default,
    };
  },
  methods: {},
  components: {
    post: () => import('./../Post/Post'),
  },
};
</script>

<style lang="scss" scoped></style>
