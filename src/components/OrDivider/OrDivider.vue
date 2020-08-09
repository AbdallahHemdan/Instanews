<template>
  <div class="divider">
    <strong class="divider__title">or</strong>
  </div>
</template>

<script>
export default {
  name: 'OrDivider',
};
</script>

<style lang="scss" scoped>
.divider {
  border-top: 1px solid $lighter-gray;
  display: block;
  line-height: 1px;
  margin: 25px 0;
  position: relative;
  text-align: center;

  &__title {
    background: $white;
    font-size: $font-size-1x;
    letter-spacing: 1px;
    padding: 0 15px;
    text-transform: uppercase;
    color: $dark-gray;
  }
}
</style>
