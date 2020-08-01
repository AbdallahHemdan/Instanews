<template>
  <div class="interact">
    <div class="left">
      <a class="no-btn like-post">
        <img :src="likedImg" class="icon" @click="changeLikeState" />
      </a>
      <a class="no-btn comment-post">
        <img src="./../../assets/svgs/comment.svg" alt="comment" class="icon" />
      </a>
      <a class="no-btn share-post">
        <img src="./../../assets/svgs/share.svg" alt="share" class="icon" />
      </a>
    </div>
    <div class="right">
      <a class="no-btn save-post" @click="changeSaveState">
        <img :src="savedImg" alt="saved" class="icon" />
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
.interact {
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: center;

  .left > a {
    padding: 0.5rem;
  }

  .right > a {
    padding: 0.5rem;
  }
}

a {
  cursor: pointer;
}

.icon {
  width: 25px;
  height: 25px;
}
</style>
