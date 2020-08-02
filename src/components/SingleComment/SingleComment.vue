<template>
  <div class="comment-container">
    <div class="comment">
      <a href="/"
        ><span>{{ comment.commenter }}</span></a
      >
      {{ comment.comment }}
    </div>
    <div class="like-action">
      <a class="like-post">
        <img :src="likedImg" class="icon" @click="changeLikeState" draggable="false" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  data: function() {
    return {
      liked: false,
    };
  },
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  computed: {
    likedImg: function() {
      let liked = require('./../../assets/svgs/liked.svg');
      let unLiked = require('./../../assets/svgs/unliked.svg');
      return this.liked ? liked : unLiked;
    },
  },
  methods: {
    changeLikeState: function() {
      this.liked = !this.liked;
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-container {
  padding-bottom: 0.5rem;
  color: #0a0a0a;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  span {
    font-weight: 600;
    color: #000;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
}

.icon {
  width: 16px;
  height: 16px;
}
</style>
