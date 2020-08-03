<template>
  <div class="inbox-container">
    <div class="logo">
      <img src="./../../assets/svgs/message.svg" alt="message logo" />
    </div>
    <div class="info">
      <div class="main-title">
        You Messages
      </div>
      <div class="sub-title">
        Send private photos and messages to a friend or group.
      </div>

      <button class="sent-btn">Send Message</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InboxContainer',
};
</script>

<style lang="scss" scoped>
.inbox-container {
  height: 87vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    width: 96px;
    height: 96px;
  }

  .info {
    margin-top: 32px;
    text-align: center;

    .main-title {
      font-size: 22px;
      line-height: 26px;
      margin-bottom: 0.5rem;
    }

    .sub-title {
      color: #8e8e8e;
      font-size: 14px;
    }

    .sent-btn {
      color: #fff;
      background-color: #0095f6;
      border: 1px solid transparent;
      border-radius: 4px;
      font-weight: 600;
      margin-top: 2rem;
      padding: 4px 10px;
    }
  }
}
</style>
