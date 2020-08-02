<template>
  <div class="post-header-container">
    <profile-upper-header></profile-upper-header>
    <profile-stories></profile-stories>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'ProfileHeader',
  components: {
    'profile-upper-header': () => import('./../ProfileUpperHeader/ProfileUpperHeader'),
    'profile-stories': () => import('./../ProfileStories/ProfileStories'),
  },
};
</script>

<style lang="scss" scoped></style>
