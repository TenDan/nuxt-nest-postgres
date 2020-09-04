<template lang="html">
  <b-loading class="loading-page" is-full-page v-model="loading"></b-loading>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-page {
  opacity: 1;
}
$loading-background: "#fff";
$loading-background-legacy: "#fff";
</style>
