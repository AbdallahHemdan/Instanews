<template>
  <div class="follow-item">
    <img :src="following.img" :alt="following.name + 'image'" class="follow-item__icon" />

    <div class="follow-item__right">
      <div class="follow-item__info">
        <div class="follow-item__username">{{ following.name }}</div>
        <div class="follow-item__nickname">
          {{ following.nickName }}
        </div>
      </div>

      <button class="follow-item__cta">Follow</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FollowItem',
  props: {
    following: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.follow-item {
  display: flex;
  align-items: center;
  margin-bottom: 14px;

  &__icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  &__right {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 8px;
  }

  &__info {
    margin-left: 0.5rem;
  }

  &__nickname {
    font-size: 12px;
    color: #8e8e8e;
  }

  &__cta {
    border: 1px solid transparent;
    background-color: #0095f6;
    border-radius: 4px;
    color: #fff;
    font-weight: 600;
    padding: 0 16px;
    font-size: 14px;
    height: 32px;
  }
}
</style>
