<template>
  <div class="col-6 left-col left-auth">
    <img :src="currentImg" alt="man-break-dancing" class="left-auth__img" draggable="false" />
  </div>
</template>

<script>
export default {
  name: 'LeftAuth',
  data: function() {
    return {
      counter: 0,
      listOfImg: [
        require('./../../assets/GIF/Auth/1.gif'),
        require('./../../assets/GIF/Auth/2.gif'),
        require('./../../assets/GIF/Auth/3.gif'),
        require('./../../assets/GIF/Auth/4.gif'),
        require('./../../assets/GIF/Auth/5.gif'),
      ],
    };
  },
  created: function() {
    setInterval(() => {
      this.counter = (this.counter + 1) % this.listOfImg.length;
    }, 3000);
  },
  computed: {
    currentImg: function() {
      return this.listOfImg[this.counter];
    },
  },
};
</script>

<style lang="scss" scoped>
.left-col {
  @media (max-width: 992px) {
    display: none;
  }

  .left-auth {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__img {
      padding-top: 20px;
      width: 100%;
      height: auto;
      float: right;
      margin: 50px 10px 10px;
      transition: 1s ease-in-out;
    }
  }
}
</style>
