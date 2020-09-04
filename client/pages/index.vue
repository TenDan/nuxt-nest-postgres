<template>
  <section class="hero is-link has-carousel is-fullheight-with-navbar">
    <div class="hero-body">
      <Carousel class="hero-carousel" />
    </div>
  </section>
</template>

<script>
import Carousel from '../components/Carousel';
export default {
  head() {
    return {
      title: 'Strona główna',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Strona początkowa strony TenDan'
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
};
</script>

<style>
.carousel-items {
  height: 100%;
}
.carousel-items .carousel-item,
.carousel-items .hero,
.carousel-items .hero-body {
  height: 100%;
}
</style>

