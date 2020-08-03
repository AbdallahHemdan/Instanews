<template>
  <div class="single-chat">
    <img :src="message.ownerImg" :alt="message.owner" class="chat-icon" />
    <div class="usernames">
      <div class="main-name">{{ message.owner }}</div>
      <div class="last-msg">
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
.single-chat {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 1rem;

  &:not(:last-child) {
    border-bottom: 1px solid #ccc;

    @media (max-width: 992px) {
      border-bottom: none;
    }
  }

  .chat-icon {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-right: 0.5rem;

    @media (max-width: 576px) {
      width: 40px;
      height: 40px;
    }
  }
}

@media (max-width: 992px) {
  .usernames {
    display: none;
  }

  .single-chat {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
.last-msg {
  color: #8e8e8e;
}

.icon {
  width: 24px;
  height: 24px;
}
</style>
