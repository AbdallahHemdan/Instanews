<template>
  <div class="error">
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="ghost"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      class="svg-inline--fa fa-ghost fa-w-12 error__img"
      data-v-d5ea9138=""
    >
      <path
        fill="currentColor"
        d="M186.1.09C81.01 3.24 0 94.92 0 200.05v263.92c0 14.26 17.23 21.39 27.31 11.31l24.92-18.53c6.66-4.95 16-3.99 21.51 2.21l42.95 48.35c6.25 6.25 16.38 6.25 22.63 0l40.72-45.85c6.37-7.17 17.56-7.17 23.92 0l40.72 45.85c6.25 6.25 16.38 6.25 22.63 0l42.95-48.35c5.51-6.2 14.85-7.17 21.51-2.21l24.92 18.53c10.08 10.08 27.31 2.94 27.31-11.31V192C384 84 294.83-3.17 186.1.09zM128 224c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm128 0c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
        data-v-d5ea9138=""
      ></path>
    </svg>

    <div class="error__message">
      <h1 class="error__first-message center-text">Are you lost ?</h1>
      <p class="error__second-message">Sorry, we couldn't find this page</p>
    </div>

    <div class="error__cta-container">
      <button class="error__back" @click="directToHome">Back to Home</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    directToHome: function() {
      window.location = '/';
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  padding: 0;
  margin: 0;
}

.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  color: $main-color;

  &__img {
    max-width: 150px;
    display: grid;
    margin: 50px auto 40px;
    width: 100%;
    height: auto;

    @media (max-width: 48em) {
      max-width: 100px;
    }
  }

  &__first-message {
    text-align: center;
    font-size: 40px;
    margin-top: 0px;
    margin-bottom: 4px;
    color: $main-color;
  }

  &__second-message {
    color: $darker-gray;
    text-align: center;
  }

  &__cta-container {
    margin: 4rem auto 0;
    text-align: center;
  }

  &__back {
    border: 1px solid transparent;
    background-color: $main-color;
    border-radius: 6px;
    color: $white;
    font-weight: 600;
    padding: 5px 15px;
    font-size: 20px;
  }
}
</style>
