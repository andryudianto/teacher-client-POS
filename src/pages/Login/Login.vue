<template>
  <div class="auth-page">
    <b-container>
      <h5 class="auth-logo">
        <i class="fa fa-circle text-primary"></i>
        Platform Online School
        <i class="fa fa-circle text-danger"></i>
      </h5>
      <div class="d-flex justify-content-center align-items-center container">
        <img src="../../assets/logo-black.png" alt="image" width="50 px">
      </div>
      <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login</h3>" customHeader>
        <p class="widget-auth-info">
            Use your email to sign in.
        </p>
        <form class="mt" @submit.prevent="login" id="login">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{errorMessage}}
          </b-alert>
          <div class="form-group">
            <input v-model="email" class="form-control no-border" required type="email" name="email" placeholder="Email" />
          </div>
          <div class="form-group">
            <input v-model="password" class="form-control no-border" required type="password" name="password" placeholder="Password" />
          </div>
          <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse">Login</b-button>
        </form>
        <p class="widget-auth-info">
          Don't have an account? Sign up now!
        </p>
        <router-link class="d-block text-center" to="register">Create an Account</router-link>
      </Widget>
    </b-container>
    <footer class="auth-footer">
      &copy; 2020 - Made by <a href="https://github.com/rungKelas" rel="nofollow noopener noreferrer" target="_blank">Ruang Kelas</a>
    </footer>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'LoginPage',
  components: { Widget },
  data() {
    return {
      errorMessage: null,
      email: '',
      password: ''
    };
  },
  methods: {
    login () {
      const { email, password } = this
      const payload = {
        email,
        password
      }
      this.$store.dispatch('login', payload)
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          this.$router.push({ name: 'Dashboard' })
        })
        .catch(err => {
          throw(err.response)
        })
    },
  }
};
</script>
<style>
.auth-page {
  background-image: url('../../assets/background_1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>