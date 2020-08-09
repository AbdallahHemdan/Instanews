<template>
  <div class="profile-desc">
    <h1 class="profile-desc__username">mayuko</h1>

    <ul>
      <li>🏠 Born in San Diego, CA</li>
      <li>📹 Tech, Career, Lifestyle</li>
      <li>🖥 Making Internet things (videos, iOS apps)</li>
      <li>💖 Compassion, Inclusivity, Chill vibes</li>

      <li class="profile-desc__link">
        <a href="https://www.hellomayuko.com/">hellomayuko.com</a>
      </li>
    </ul>

    <div class="profile-desc__friends-follow">
      Followed by
      <span> <a href="/">abdallah_hemdan</a> </span>, <span><a href="/">omar_ahmed</a></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileDescription',
};
</script>

<style lang="scss" scoped>
.profile-desc {
  padding-left: 0.5rem;
  padding-top: 2rem;

  @media (max-width: 576px) {
    padding-left: 3rem;
  }

  @media (max-width: 420px) {
    padding-left: 2rem;
  }

  @media (max-width: 420px) {
    padding-left: 1rem;
  }

  &__username {
    font-size: 1rem;
  }

  &__link > a {
    text-decoration: none;
    font-weight: 600;
    margin-top: 0.5rem;
    padding-left: 0.5rem;
  }

  &__friends-follow {
    color: $dark-gray;
    padding-left: 0.5rem;

    span {
      color: $darker-gray;
      font-weight: 600;

      & > a {
        text-decoration: none;
        color: $darker-gray;
      }
    }
  }

  ul {
    list-style: none;
    padding-left: 0;
  }
}
</style>
