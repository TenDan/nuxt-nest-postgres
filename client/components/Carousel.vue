<template>
  <b-carousel
    :indicator="false"
    icon-pack="fas"
    icon-size="is-medium"
    progress
    progress-type="is-primary"
    :autoplay="false"
  >
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <section :class="`hero is-medium is-${carousel.color}`">
        <div class="hero-body has-text-centered">
          <h1 class="title">{{carousel.text}}</h1>
        </div>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data(){
    return {
      carousels: [
        { text: 'Slide 1', color: 'primary' },
        { text: 'Slide 2', color: 'info' },
        { text: 'Slide 3', color: 'success' },
        { text: 'Slide 4', color: 'warning' },
        { text: 'Slide 5', color: 'danger' },
      ]
    }
  }
}
</script>

<style scoped>
.hero-body {
  justify-content: center;
}
</style>