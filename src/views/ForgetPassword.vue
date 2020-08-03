<template>
  <div class="container auth-container">
    <div class="row">
      <left-auth></left-auth>
      <div class="right-col text-center">
        <a href="/" class="header-link">
          <h2 class="header">Instanews</h2>
        </a>
        <img src="./../assets/lock.png" alt="lock" class="lock" />
        <p class="info">
          Log In into Instanews to see photos and videos from your friends.
        </p>
        <form action="">
          <div class="form-label-group">
            <input
              type="email"
              name="email"
              id="email"
              class="form-control"
              placeholder="Enter your email"
              v-model="email"
            />
          </div>
          <div class="ctas">
            <div class="first-ctas">
              <button type="button" class="btn btn-primary btn-block login-btn">
                Send Login Link
              </button>
              <button
                type="button"
                class="btn btn-secondary btn-block login-btn"
                onClick="{this.handleBackToLogin}"
              >
                <span class="fa fa-angle-double-left back-login"></span>
                Back to Log In
              </button>
            </div>
            <or-divider></or-divider>
            <div class="alts">
              <div class="have-account">
                <span>Don't have an account? </span>
                <a href="./signup">Sign up</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgetPassword',
  data: function() {
    return {
      email: '',
    };
  },
  components: {
    'left-auth': () => import('./../components/LeftAuth/LeftAuth'),
    'or-divider': () => import('./../components/OrDivider/OrDivider'),
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}

.auth-container {
  margin-top: 20px;
}
.right-col {
  background-color: #fff;
  border: 1px solid #ddd;
  width: 400px;
  float: right;
  margin: 20px 10px 0px 10px;
  padding: 40px;
}
.header {
  font-family: 'Pacifico', cursive;
  font-weight: 300;
}

.header-link:hover {
  text-decoration: none;
  color: #007bff;
}

.info {
  font-size: 17px;
  line-height: 25px;
  color: #999;
  margin-bottom: 2rem;
  margin-top: 1rem;
}
.brand-logo {
  margin-right: 10px;
}

.divider {
  border-top: 1px solid #d9dadc;
  display: block;
  line-height: 1px;
  margin: 25px 0;
  position: relative;
  text-align: center;
}

.divider .divider-title {
  background: #fff;
  font-size: 12px;
  letter-spacing: 1px;
  padding: 0 15px;
  text-transform: uppercase;
  color: #999;
}

.email::placeholder,
.password::placeholder {
  color: #555;
  font-size: 18px;
  font-weight: 200;
  opacity: 0.1;
}
.field {
  margin-bottom: 10px;
}

.have-account {
  margin-top: 15px;
}
.have-account a {
  padding: 5px;
}

@media (max-width: 992px) {
  .right-col {
    margin: 20px auto;
  }
}
.login-btn {
  padding: 6px;
}

.err-message {
  color: red;
  font-weight: 400;
  margin-bottom: -15px;
}

.alert-dismissible {
  padding-right: 2rem !important;
}

.social-btn {
  padding: 5px;
}

.form-control {
  background: #fafafa;
  padding: 8px 0 8px 10px;
  color: #444;
  font-size: 14px;
  line-height: 18px;
  min-height: 40px;
  margin-bottom: 1rem;
}

.lock {
  height: 70px;
  margin: 15px auto 0;
}

.first-ctas {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
