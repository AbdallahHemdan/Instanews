<template>
  <div class="post">
    <div class="upper">
      <img src="./../../assets/me.jpg" alt="owner" class="owner-img" />
      <a href="/adidas" class="post-owner align-middle">
        <span>{{ post.creator }}</span>
      </a>
      <button class="dots-menu">
        <span class="dots">●●●</span>
      </button>
    </div>
    <div class="main-img">
      <img
        :src="post.mainImg"
        alt="main post"
        class="post-img"
        onDoubleClick="{this.handleLikePost}"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  data: function() {
    return {};
  },
  methods: {},
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  background: #fff;
  margin-bottom: 60px;
  border: 1px solid #c9c7c7;
}

.upper {
  padding: 10px 15px;
}
.owner-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.post-owner {
  margin-left: 10px;
  color: #007bff;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 2px;
}
.post-owner:hover {
  text-decoration: none;
  color: #007bff;
}

.dots {
  font-size: 10px;
  margin-top: 5px;
}

.post-img {
  width: 100%;
  height: auto;
}

.dots-menu {
  border: none;
  background: transparent;
  float: right;
  margin-top: 5px;
}
.dots-menu:focus {
  outline: 0;
}

.interact {
  padding: 5px 10px;
}
.no-btn {
  border: none;
  background: transparent;
  margin-right: 10px;
}
.no-btn:focus {
  outline: none;
}

.save-post {
  float: right;
}
.likes-no {
  padding: 15px 15px 0 15px;
  font-weight: 600;
}

.post-description {
  font-size: 14px;
}
.post-description {
  padding: 0 15px;
}
.post-owner-name,
.comment-owner-name {
  font-weight: 600;
}

.others-comments {
  font-size: 14px;
  padding: 0 15px;
  margin-bottom: 10px;
}

.head {
  color: #999;
}

.like-comment {
  float: right;
}

.like-comment-icon {
  float: right;
}
</style>
