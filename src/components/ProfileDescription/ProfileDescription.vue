<template>
  <div class="full-description">
    <h1 class="username">mayuko</h1>
    <ul>
      <li>🏠 Born in San Diego, CA</li>
      <li>📹 Tech, Career, Lifestyle</li>
      <li>🖥 Making Internet things (videos, iOS apps)</li>
      <li>💖 Compassion, Inclusivity, Chill vibes</li>
      <li class="website-link">
        <a href="https://www.hellomayuko.com/">hellomayuko.com</a>
      </li>
    </ul>
    <div class="friends-follow">
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
.full-description {
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

  .username {
    font-size: 1rem;
  }

  ul {
    list-style: none;
    padding-left: 0;

    .website-link {
      text-decoration: none;
      font-weight: 600;
      margin-top: 0.5rem;
      padding-left: 0.5rem;
    }
  }

  .friends-follow {
    color: #999;
    padding-left: 0.5rem;

    span {
      color: #444;
      font-weight: 600;

      & > a {
        text-decoration: none;
        color: #444;
      }
    }
  }
}
</style>
