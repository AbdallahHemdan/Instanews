<template>
  <a class="dropdown-item">
    <img :src="notification.ownerImg" alt="avatar image" class="drop-icon" />
    <div class="right">
      <div class="notification-info">
        <div class="user">{{ notification.owner }}</div>
        <div class="description">
          {{ notification.action }} <span>{{ notification.actionDate }}</span>
        </div>
      </div>
      <div>
        <button
          :class="{
            follow: !notification.isFollowed,
            followed: notification.isFollowed,
          }"
          @click.prevent="changeFollowState"
        >
          {{ this.notification.isFollowed ? 'following' : 'follow' }}
        </button>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'NotificationItem',
  data: function() {
    return {};
  },
  methods: {
    changeFollowState: function() {
      console.log('done');
    },
  },
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.drop-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.description {
  font-size: 12px;
}

.right {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.follow {
  border: 1px solid transparent;
  background-color: #0095f6;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  padding: 2px 9px;
  font-size: 14px;
}

.followed {
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: transparent;
  color: #262626;
  font-weight: 600;
  padding: 2px 9px;
  font-size: 14px;
}

.notification-info {
  margin-left: 8px;
}
</style>
