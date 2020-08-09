<template>
  <div class="suggestion">
    <div class="suggestion__left">
      <img
        :src="user.userImg"
        :alt="user.username"
        class="suggestion__user-img"
        draggable="false"
      />

      <div class="suggestion__info">
        <div class="suggestion__username">{{ user.username }}</div>
        <span class="suggestion__relation">{{ user.suggestionBase }}</span>
      </div>
    </div>

    <div class="suggestion__right">
      <a :href="'/' + user.id" class="suggestion__follow-link">Follow</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleSuggestion',
  props: {
    user: {
      type: Object,
      requires: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.suggestion {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.5rem;

  &__left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 6rem;
    margin-right: 134px;
  }

  &__relation {
    color: $dark-gray;
    font-size: 80%;
  }

  &__user-img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 1rem;
  }

  &__follow-link {
    text-decoration: none;
  }
}
</style>
