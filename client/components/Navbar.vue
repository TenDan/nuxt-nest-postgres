<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">TenDan</b-navbar-item>
    </template>

    <template slot="start">
      <b-navbar-item href="#">Strona główna</b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">About</b-navbar-item>
        <b-navbar-item href="#">Contact</b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="columns is-desktop">
          <div class="column is-fullwidth">
            <nuxt-link to="/register" class="button is-rounded is-primary is-fullwidth">
              <strong>Zarejestruj się</strong>
            </nuxt-link>
          </div>
          <div class="column is-fullwidth">
            <nuxt-link to="/login" class="button is-rounded is-light is-fullwidth">Zaloguj się</nuxt-link>
          </div>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {};
  },
};
</script>

<style scoped>
.buttons-container {
  display: flex;
  align-items: center;
  justify-content: space-around !important;
}
</style>