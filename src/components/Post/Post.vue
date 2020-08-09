<template>
  <div class="post">
    <div class="post__upper">
      <img src="./../../assets/me.jpg" alt="owner" class="post__owner-img" draggable="false" />
      <a href="/profile" class="post__owner align-middle">
        <span>{{ post.creator }}</span>
      </a>

      <button class="post__options-menu" data-toggle="modal" data-target="#exampleModalCenter">
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
        <div class="modal-dialog modal-dialog-centered" role="document">
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
        class="post__main-img"
        alt="main post"
        draggable="false"
        :src="post.mainImg"
        onDoubleClick="{this.handleLikePost}"
      />
    </div>

    <post-action></post-action>
    <div class="post__likes">78 likes</div>
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
  background: $white;
  margin-bottom: 60px;
  border: 1px solid $lighter-gray;

  &__upper {
    padding: 10px 15px;
    border-bottom: 1px solid $lighter-gray;
  }

  &__owner-img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid $light-gray;
    background-color: $white;
    padding: 1px;
  }

  &__owner {
    margin-left: 10px;
    color: $main-color;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 2px;

    &:hover {
      text-decoration: none;
      color: $main-color;
    }
  }

  &__options-menu {
    border: none;
    background: transparent;
    float: right;
    margin-top: 5px;

    &:focus {
      outline: 0;
    }
  }

  &__likes {
    padding-left: 1rem;
    font-weight: 600;
  }

  &__main-img {
    width: 100%;
    height: auto;
  }
}

.post-modal-choice {
  width: 100%;
  border: none;
  border-bottom: 1px solid $lighter-gray;
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

.dots {
  font-size: 10px;
  margin-top: 5px;
}
</style>
