<template>
  <div class="comments">
    <comment v-for="(comment, index) in comments" :key="index" :comment="comment"></comment>

    <section class="comments__post-time">
      2 HOURS AGO
    </section>
    <section>
      <form class="comments__leave-comment">
        <textarea
          name="comment"
          placeholder="Add a comment ..."
          class="comments__comment-area"
          v-model="commentMessage"
        ></textarea>
        <button type="submit" class="comments__post-btn" :disabled="!commentTyped">Post</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  components: {
    comment: () => import('./../SingleComment/SingleComment'),
  },
  data: function() {
    return {
      commentMessage: '',
    };
  },
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
  computed: {
    commentTyped: function() {
      return this.commentMessage.length ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
.comments {
  padding-left: 1rem;

  &__post-time {
    font-size: 0.8rem;
    color: $dark-gray;
    padding-bottom: 0.5rem;
  }

  &__leave-comment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid $lighter-gray;
    color: $dark-gray;
    line-height: 18px;
    min-height: 56px;
  }

  &__comment-area {
    width: 100%;
    border: none;
    padding-top: 24px;
    resize: none;

    &:focus {
      outline: none;
    }

    &::-webkit-input-placeholder {
      color: $dark-gray;
    }

    &:-moz-placeholder {
      /* Firefox 18- */
      color: $dark-gray;
    }

    &::-moz-placeholder {
      /* Firefox 19+ */
      color: $dark-gray;
    }

    &:-ms-input-placeholder {
      color: $dark-gray;
    }
  }

  &__post-btn {
    border: none;
    color: $main-color;
    background-color: transparent;
    font-size: $font-size-3x;
    padding-right: 10px;
    font-weight: 500;

    &:disabled {
      color: rgba(0, 123, 255, 0.4);
    }
  }
}
</style>
