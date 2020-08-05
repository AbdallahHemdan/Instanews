<template>
  <a class="dropdown-item notification">
    <img :src="notification.ownerImg" alt="avatar image" class="notification__icon" />

    <div class="notification__right">
      <div class="notification__info">
        <div class="user">{{ notification.owner }}</div>

        <div class="notification__description">
          {{ notification.action }} <span>{{ notification.actionDate }}</span>
        </div>
      </div>

      <div>
        <button
          :class="{
            notification__btn: true,
            'notification__btn--follow': !notification.isFollowed,
            'notification__btn--followed': notification.isFollowed,
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
.notification {
  &__icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  &__description {
    font-size: 12px;
  }

  &__right {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__btn {
    border-radius: 4px;
    font-weight: 600;
    padding: 2px 9px;
    font-size: 14px;

    &--follow {
      border: 1px solid transparent;
      background-color: #0095f6;
      border-radius: 4px;
      color: #fff;
      font-weight: 600;
      padding: 2px 9px;
      font-size: 14px;
    }

    &--followed {
      border: 1px solid #dbdbdb;
      border-radius: 4px;
      background-color: transparent;
      color: #262626;
      font-weight: 600;
      padding: 2px 9px;
      font-size: 14px;
    }
  }

  &__info {
    margin-left: 8px;
  }
}
</style>
