<template>
  <div class="row">
    <div class="left">
      <img
        src="https://instagram.fcai19-2.fna.fbcdn.net/v/t51.2885-19/s150x150/71101176_686434495193983_6272575461205737472_n.jpg?_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_ohc=7CYZj8q2csIAX8P9RZj&oh=8edba4fd96c6ed9fdc22f794eebceada&oe=5F4E65C7"
        alt="profile image"
        class="profile-img"
      />
    </div>
    <div class="right">
      <upper-header></upper-header>
      <profile-description></profile-description>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileUpperHeader',
  components: {
    'upper-header': () => import('./../ProfileHeaderTitle/ProfileHeaderTitle'),
    'profile-description': () => import('./../ProfileDescription/ProfileDescription'),
  },
};
</script>

<style lang="scss" scoped>
.left {
  display: flex;
  justify-content: center;
  width: 25%;

  @media (max-width: 768px) {
    max-width: 15%;
  }

  @media (max-width: 576px) {
    max-width: 100%;
    margin: auto;
  }

  .profile-img {
    width: 168px;
    height: 168px;
    border-radius: 50%;
    background-color: $white;
    border: 2px solid $light-gray;
    padding: 4px;

    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
    }
    @media (max-width: 576px) {
      width: 150px;
      height: 150px;
    }
  }
}

.right {
  padding-top: 10px;
  width: 75%;

  @media (max-width: 768px) {
    width: 85%;
    padding-top: 0;
    padding-right: 0;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
}

.header-actions {
  @media (max-width: 420px) {
    margin-bottom: 1rem;
  }
}
</style>
