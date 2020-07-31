<template>
  <div class="newsfeed-container">
    <post v-for="(post, index) in posts" :key="index" :post="post"></post>
  </div>
</template>

<script>
export default {
  name: 'Newsfeed',
  data: function() {
    return {
      posts: [
        {
          mainImg:
            'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          creator: 'Hemdan',
          creatorImg: './../assets/me.jpg',
        },
        {
          mainImg:
            'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          creator: 'Hemdan',
          creatorImg: './../assets/me.jpg',
        },
        {
          mainImg:
            'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          creator: 'Hemdan',
          creatorImg: './../assets/me.jpg',
        },
        {
          mainImg:
            'https://images.unsplash.com/photo-1588778272105-1ff4b41dbe93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          creator: 'Hemdan',
          creatorImg: './../assets/me.jpg',
        },
        {
          mainImg:
            'https://images.unsplash.com/photo-1588783949480-d6ac3a1f9c08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          creator: 'Hemdan',
          creatorImg: './../assets/me.jpg',
        },
        {
          mainImg:
            'https://images.unsplash.com/photo-1588786849476-349bcdfe4754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          creator: 'Hemdan',
          creatorImg: './../assets/me.jpg',
        },
        {
          mainImg:
            'https://images.unsplash.com/photo-1537181534458-45dcee76ae90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          creator: 'Hemdan',
          creatorImg: './../assets/me.jpg',
        },
        {
          mainImg:
            'https://images.unsplash.com/photo-1564769625905-50e93615e769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          creator: 'Hemdan',
          creatorImg: './../assets/me.jpg',
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
