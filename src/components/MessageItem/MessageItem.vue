<template>
  <div class="chat-item">
    <img :src="message.ownerImg" :alt="message.owner" class="chat-item__icon" />

    <div class="chat-item__info">
      <div class="chat-item__username">{{ message.owner }}</div>
      <div class="chat-item__last-msg">
        {{ message.lastMessage }} <span class="date">{{ message.lastMessageDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageItem',
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.chat-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid $light-gray;

    @media (max-width: 992px) {
      border-bottom: none;
    }
  }

  @media (max-width: 992px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  &__icon {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-right: 0.5rem;

    @media (max-width: 576px) {
      width: 40px;
      height: 40px;
    }
  }

  &__info {
    @media (max-width: 992px) {
      display: none;
    }
  }

  &__last-msg {
    color: $dark-gray;
  }
}
</style>
