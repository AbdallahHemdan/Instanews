<template>
  <div class="post">
    <div class="upper">
      <img src="./../../assets/me.jpg" alt="owner" class="owner-img" draggable="false" />
      <a href="/profile" class="post-owner align-middle">
        <span>{{ post.creator }}</span>
      </a>
      <button class="dots-menu" data-toggle="modal" data-target="#exampleModalCenter">
        <span class="dots">●●●</span>
      </button>
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <button class="post-modal-choice danger-choice">Report Inappropriate</button>
              <button class="post-modal-choice danger-choice">Unfollow</button>
              <button class="post-modal-choice">Go to post</button>
              <button class="post-modal-choice lst-choice" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-img">
      <img
        class="post-img"
        alt="main post"
        draggable="false"
        :src="post.mainImg"
        onDoubleClick="{this.handleLikePost}"
      />
    </div>
    <post-action></post-action>
    <div class="post-likes">78 likes</div>
    <post-description :writer="post.creator" :description="post.description"></post-description>
    <post-comments :comments="comments"></post-comments>
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
    comments: {
      type: Array,
      required: true,
    },
  },
  components: {
    'post-action': () => import('./../PostAction/PostAction'),
    'post-description': () => import('./../PostDescription/PostDescription'),
    'post-comments': () => import('./../Comments/Comments'),
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
  border-bottom: 1px solid #dbdbdb;
}

.owner-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #ffff;
  padding: 1px;
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

.post-modal-choice {
  width: 100%;
  border: none;
  border-bottom: 1px solid #dee2e6;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: transparent;
  font-size: 1rem;

  &:hover {
    outline: none;
  }
  &:active {
    outline: none;
  }
}

.modal-content {
  border-radius: 20px;
  width: 85%;
  margin: auto;
}

.danger-choice {
  color: red;
  font-weight: 700;
}

.lst-choice {
  border-bottom: none;
}

.post-likes {
  padding-left: 1rem;
  font-weight: 600;
}
</style>
