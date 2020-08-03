<template>
  <div class="messages-container">
    <div class="header">
      <div class="title">
        Direct
      </div>
      <div class="edit">
        <img src="./../../assets/svgs/edit.svg" alt="edit icon" class="icon" />
      </div>
    </div>
    <div class="list-of-messages">
      <message-item
        v-for="(message, index) in messages"
        :key="index"
        :message="message"
      ></message-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessagesContainer',
  data: function() {
    return {
      messages: require('./../../mock/Messages/Messages').default,
    };
  },
  components: {
    'message-item': () => import('./../MessageItem/MessageItem'),
  },
};
</script>

<style lang="scss" scoped>
.messages-container {
  height: 87vh;
  border-right: 1px solid #ccc;
}

.header {
  position: relative;

  .title {
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    text-align: center;
    font-weight: 600;
  }

  .edit {
    position: absolute;
    top: 30%;
    right: 10%;
  }
  clear: both;

  @media (max-width: 992px) {
    display: none;
  }
}

.list-of-messages {
  padding: 8px;
  padding-left: 16px;
  @media (max-width: 992px) {
    padding-top: 2rem;
  }
}
</style>
