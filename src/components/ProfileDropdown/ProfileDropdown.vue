<template>
  <div class="dropdown profile-options">
    <a
      class="dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <img src="./../../assets/me.jpg" class="profile-options__img" alt="profile" />
    </a>

    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="/profile">
        <img
          src="./../../assets/svgs/avatar.svg"
          alt="avatar image"
          class="profile-options__icon"
        />
        Profile
      </a>

      <a class="dropdown-item" href="/profile/saved">
        <img src="./../../assets/svgs/unsaved.svg" alt="saved icon" class="profile-options__icon" />
        Saved
      </a>

      <a class="dropdown-item" href="/profile/settings">
        <img
          src="./../../assets/svgs/settings.svg"
          alt="settings icon"
          class="profile-options__icon"
        />
        Settings
      </a>

      <div class="logout">
        <a class="dropdown-item" href="/" @click="logout">
          <img
            src="./../../assets/svgs/logout.svg"
            alt="logout icon"
            class="profile-options__icon"
          />
          Log Out
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'ProfileDropdown',
  methods: {
    logout: function() {
      firebase.auth().signOut();
      window.localStorage.removeItem('accessToken');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../Navbar/Navbar.scss';
</style>
