<template>
  <div class="post-header">
    <profile-upper-header></profile-upper-header>
  </div>
</template>

<script>
export default {
  name: 'ProfileHeader',
  components: {
    'profile-upper-header': () => import('./../ProfileUpperHeader/ProfileUpperHeader'),
  },
};
</script>

<style lang="scss" scoped></style>
