<template>
  <div class="dropdown profile-options" autoClose="false">
    <a
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      aria-hidden="false"
    >
      <img src="https://img.icons8.com/ios/30/000000/like.png" class="profile-img" alt="profile" />
    </a>

    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
      <notification-item
        v-for="(notification, index) in notifications"
        :key="index"
        :notification="notification"
      >
      </notification-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationsDropdown',
  data: function() {
    return {
      notifications: require('./../../mock/Notifications/Notifications').default,
    };
  },
  components: {
    'notification-item': () => import('./../NotificationItem/NotificationItem'),
  },
};
</script>

<style lang="scss" scoped>
@import './../Navbar/Navbar.scss';

.dropdown-menu {
  min-width: 20rem;
  padding: 0.5rem 0 0;
  margin: 0.5rem 0 0;
  right: -290%;
  max-height: 300px;
  overflow-y: scroll;
}
</style>
