<template>
  <div class="inbox">
    <div class="inbox__logo">
      <img src="./../../assets/svgs/message.svg" alt="message logo" />
    </div>

    <div class="inbox__info">
      <div class="inbox__main-title">
        You Messages
      </div>

      <div class="inbox__sub-title">
        Send private photos and messages to a friend or group.
      </div>

      <button class="inbox__sent-btn">Send Message</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InboxContainer',
};
</script>

<style lang="scss" scoped>
.inbox {
  height: 87vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__logo {
    width: 96px;
    height: 96px;
  }

  &__info {
    margin-top: 32px;
    text-align: center;
  }

  &__main-title {
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 0.5rem;
  }

  &__sub-title {
    color: $dark-gray;
    font-size: $font-size-2x;
  }

  &__sent-btn {
    color: $white;
    background-color: $main-color;
    border: 1px solid transparent;
    border-radius: 4px;
    font-weight: 600;
    margin-top: 2rem;
    padding: 4px 10px;
  }
}
</style>
