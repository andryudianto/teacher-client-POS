<template>
  <div class="error-page">
    <b-container>
      <div class="errorContainer mx-auto">
        <h1 class="errorCode">404</h1>
        <p class="errorInfo">
            Opps, it seems that this page does not exist.
        </p>
        <p class="errorHelp mb-3">
            If you are sure it should, search for it.
        </p>
        <b-form>
          <b-form-group>
            <b-form-input class="input-no-border" type="text" placeholder="Search Pages" />
          </b-form-group>
          <router-link tag="a" to="/app/dashboard">
            <b-button class="errorBtn" type="submit" variant="success">
                Search <i class="la la-search ml-xs" />
            </b-button>
          </router-link>
        </b-form>
      </div>
      <footer class="pageFooter">
        &copy; 2020 - Made by <a href="https://github.com/rungKelas" rel="nofollow noopener noreferrer" target="_blank">Ruang Kelas</a>
      </footer>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
};
</script>

<style src="./Error.scss" lang="scss" scoped />
