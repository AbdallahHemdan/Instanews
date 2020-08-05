<template>
  <div class="login-container">
    <div class="container auth-container">
      <div class="row">
        <left-auth></left-auth>
        <div class="right-col text-center">
          <a href="/" class="header-link">
            <h2 class="header">Instanews</h2>
          </a>
          <p class="info">
            Log In into Instanews to see photos and videos from your friends.
          </p>
          <button type="button" class="btn btn-primary btn-block social-btn">
            <span class="fa fa-facebook brand-logo"></span>
            Login with facebook
          </button>
          <button type="button" class="btn btn-dark btn-block social-btn">
            <span class="fa fa-github brand-logo"></span>
            Login with github
          </button>
          <button type="button" class="btn btn-danger btn-block social-btn">
            <span class="fa fa-google brand-logo"></span>
            Login with google
          </button>
          <or-divider></or-divider>
          <div class="alert alert-danger err-msg" role="alert" v-show="this.errMessage">
            {{ this.errMessage }}
          </div>
          <form action="">
            <div class="form-label-group">
              <input
                type="text"
                name="username"
                id="username"
                class="form-control"
                placeholder="Enter your username"
                v-model="username"
              />
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
                placeholder="Email address"
                v-model="email"
              />
            </div>
            <div class="form-label-group">
              <input
                type="password"
                name="password"
                id="password"
                class="form-control"
                placeholder="Enter your password"
                v-model="password"
              />
            </div>
            <div class="form-label-group">
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                class="form-control"
                placeholder="Confirm your password"
                v-model="confirmPassword"
              />
            </div>
            <div class="ctas">
              <button type="button" class="btn btn-primary btn-block login-btn" @click="signup">
                Sign Up
              </button>
              <div class="alts">
                <p class="conditions">
                  By signing up, you agree to <span>our Terms</span>, <span>Data Policy</span> and
                  <span>Cookies Policy</span>
                </p>
                <div class="have-account">
                  <span>Have an account? </span>
                  <a href="./login">Log In</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Signup',
  data: function() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errMessage: '',
    };
  },
  components: {
    'left-auth': () => import('./../components/LeftAuth/LeftAuth'),
    'or-divider': () => import('./../components/OrDivider/OrDivider'),
  },
  methods: {
    signup: function() {
      if (!this.username) {
        this.errMessage = "Username can't be empty";
        return;
      } else if (this.password != this.confirmPassword) {
        this.errMessage = 'The two passwords are not equal';
        return;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            if (firebase.auth().currentUser) {
              firebase
                .auth()
                .currentUser.updateProfile({
                  displayName: this.username,
                })
                .then(e => {
                  window.location = '/';
                });
            }
          },
          err => {
            console.log(err);
            this.errMessage = err.message;
          },
        );
    },
    authWithGoogle: function() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
          window.location = '/';
        })
        .catch(err => {
          alert('Oops. ' + err.message);
        });
    },
    authWithGithub: function() {
      const provider = new firebase.auth.GithubAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // redirect to home page
          window.location = '/';
        })
        .catch(function(error) {
          alert('Oops. ' + error.message);
        });
    },
    authWithFacebook: function() {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // redirect to home page
          window.location = '/';
        })
        .catch(function(error) {
          alert('Oops. ' + error.message);
        });
    },
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

@media (max-width: 1000px) {
  .left-col {
    display: none;
  }
  .right-col {
    margin: 20px auto;
  }
}

.login-btn {
  margin-top: 30px;
  margin-bottom: 30px;
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

.conditions {
  color: #8e8e8e;

  span {
    font-weight: 600;
  }
}

.err-msg {
  margin-bottom: 1rem;
  padding: 5px 10px;
}
</style>
