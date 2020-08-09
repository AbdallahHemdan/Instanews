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
    font-size: $font-size-1x;
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
    font-size: $font-size-2x;

    &--follow {
      border: 1px solid transparent;
      background-color: $main-color;
      border-radius: 4px;
      color: $white;
      font-weight: 600;
      padding: 2px 9px;
      font-size: $font-size-2x;
    }

    &--followed {
      border: 1px solid $lighter-gray;
      border-radius: 4px;
      background-color: transparent;
      color: $darker-gray;
      font-weight: 600;
      padding: 2px 9px;
      font-size: $font-size-2x;
    }
  }

  &__info {
    margin-left: 8px;
  }
}
</style>
