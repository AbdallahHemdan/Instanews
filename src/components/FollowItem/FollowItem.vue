<template>
  <div class="follow__item">
    <img :src="following.img" :alt="following.name + 'image'" class="drop-icon" />
    <div class="right">
      <div class="notification-info">
        <div class="user">{{ following.name }}</div>
        <div class="nickname">
          {{ following.nickName }}
        </div>
      </div>
      <button class="follow__cta">Follow</button>
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
.follow__item {
  display: flex;
  align-items: center;
  margin-bottom: 14px;
}

.notification-info {
  margin-left: 0.5rem;
}

.drop-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.nickname {
  font-size: 12px;
  color: #8e8e8e;
}

.follow__cta {
  border: 1px solid transparent;
  background-color: #0095f6;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  padding: 0 16px;
  font-size: 14px;
  height: 32px;
}

.right {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 8px;
}
</style>
