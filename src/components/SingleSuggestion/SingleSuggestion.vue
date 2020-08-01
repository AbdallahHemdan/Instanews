<template>
  <div class="single-suggestion">
    <div class="left">
      <img :src="user.userImg" :alt="user.username" class="userImg" draggable="false" />
      <div class="user-names">
        <div class="username">{{ user.username }}</div>
        <span class="relation">{{ user.suggestionBase }}</span>
      </div>
    </div>
    <div class="right">
      <a :href="'/' + user.id" class="follow">Follow</a>
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
.single-suggestion {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
}

.left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 6rem;
  margin-right: 134px;
}

.userImg {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 1rem;
}

.follow {
  text-decoration: none;
}

.relation {
  color: #8e8e8e;
  font-size: 80%;
}

.user-name {
  display: flex;
  flex-direction: column;
}
</style>
