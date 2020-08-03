<template>
  <div class="newsfeed-container">
    <post v-for="(post, index) in posts" :key="index" :post="post" :comments="comments"></post>
  </div>
</template>
<script>
export default {
  name: 'Newsfeed',
  data: function() {
    return {
      posts: require('./../../mock/Home/Posts').default,
      comments: [
        {
          commenter: 'omar_hemdan',
          comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
          commenter: 'mohamed_ahmed',
          comment: ' and over yeterly mr its fulfilled cant',
        },
        {
          commenter: 'adel_mohamed',
          comment: 't friendly on Total around or body fine d 🎉😍😍',
        },
        {
          commenter: 'ahmed_mahboub',
          comment: 'mile wondered mrs Am suspec',
        },
        {
          commenter: 'saied_elsaway',
          comment: 'valley mrs yet Mrs weeks ye By want d  🎈🚀',
        },
      ],
    };
  },
  methods: {},
  components: {
    post: () => import('./../Post/Post'),
  },
};
</script>

<style lang="scss" scoped></style>
