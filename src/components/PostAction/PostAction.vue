<template>
  <div class="post-actions">
    <div class="post-actions__left">
      <a class="post-actions__like">
        <img
          :src="likedImg"
          class="post-actions__icon"
          @click="changeLikeState"
          draggable="false"
        />
      </a>

      <a class="post-actions__comment">
        <img
          src="./../../assets/svgs/comment.svg"
          alt="comment"
          class="post-actions__icon"
          draggable="false"
        />
      </a>

      <a class="post-actions__share">
        <img
          src="./../../assets/svgs/share.svg"
          alt="share"
          class="post-actions__icon"
          draggable="false"
        />
      </a>
    </div>

    <div class="post-actions__right">
      <a class="post-actions__save" @click="changeSaveState">
        <img :src="savedImg" alt="saved" class="post-actions__icon" draggable="false" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostAction',
  data: function() {
    return {
      liked: false,
      saved: false,
    };
  },
  computed: {
    likedImg: function() {
      let liked = require('./../../assets/svgs/liked.svg');
      let unLiked = require('./../../assets/svgs/unliked.svg');
      return this.liked ? liked : unLiked;
    },
    savedImg: function() {
      let saved = require('./../../assets/svgs/saved.svg');
      let unSaved = require('./../../assets/svgs/unsaved.svg');
      return this.saved ? saved : unSaved;
    },
  },
  methods: {
    changeLikeState: function() {
      this.liked = !this.liked;
    },
    changeSaveState: function() {
      this.saved = !this.saved;
    },
  },
};
</script>

<style lang="scss" scoped>
.post-actions {
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: center;

  &__left > a {
    padding: 0.5rem;
    cursor: pointer;
  }

  &__right > a {
    padding: 0.5rem;
    cursor: pointer;
  }

  &__icon {
    width: 25px;
    height: 25px;
  }
}
</style>
