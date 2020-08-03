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
      <img src="./../../assets/me.jpg" class="profile-img" alt="profile" />
    </a>
    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="/profile">
        <img src="./../../assets/svgs/avatar.svg" alt="avatar image" class="drop-icon" />
        Profile
      </a>
      <a class="dropdown-item" href="/profile/saved">
        <img src="./../../assets/svgs/unsaved.svg" alt="saved icon" class="drop-icon" />
        Saved
      </a>
      <a class="dropdown-item" href="/profile/settings">
        <img src="./../../assets/svgs/settings.svg" alt="settings icon" class="drop-icon" />
        Settings
      </a>
      <div class="logout">
        <a class="dropdown-item" href="/">
          <img src="./../../assets/svgs/logout.svg" alt="logout icon" class="drop-icon" />
          Log Out
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileDropdown',
};
</script>

<style lang="scss" scoped>
@import './../../style/settings.scss';
@import './../Navbar/Navbar.scss';
</style>
