<template>
  <div class="user-info-container">
    <img
      src="./../../assets/me.jpg"
      alt="Hemdan's profile image"
      class="user-img"
      draggable="false"
    />
    <div class="user-names">
      <div class="username">Abdallah Hemdan</div>
      <span class="sub-name">Abdallah_Ahmed_Hemdan</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
};
</script>

<style lang="scss" scoped>
.user-info-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.usernames {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.username {
  font-size: 1rem;
  font-weight: 600;
}

.sub-name {
  font-size: 0.8rem;
  color: #999;
}
.user-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #ccc;
  padding: 2px;
  margin-right: 15px;
}
</style>
