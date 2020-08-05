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
  border-top: 1px solid #d9dadc;
  display: block;
  line-height: 1px;
  margin: 25px 0;
  position: relative;
  text-align: center;

  &__title {
    background: #fff;
    font-size: 12px;
    letter-spacing: 1px;
    padding: 0 15px;
    text-transform: uppercase;
    color: #999;
  }
}
</style>
