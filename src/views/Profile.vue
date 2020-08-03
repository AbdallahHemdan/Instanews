<template>
  <div class="profile-container">
    <profile-header></profile-header>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data: function() {
    return {};
  },
  methods: {},
  computed: {},
  props: {},
  components: {
    'profile-header': () => import('./../components/ProfileHeader/ProfileHeader'),
  },
};
</script>

<style lang="scss" scoped></style>
