export { default as Carousel } from '../..\\client\\components\\Carousel.vue'
export { default as Footer } from '../..\\client\\components\\Footer.vue'
export { default as Loading } from '../..\\client\\components\\Loading.vue'
export { default as Navbar } from '../..\\client\\components\\Navbar.vue'

export const LazyCarousel = import('../..\\client\\components\\Carousel.vue' /* webpackChunkName: "components_Carousel" */).then(c => c.default || c)
export const LazyFooter = import('../..\\client\\components\\Footer.vue' /* webpackChunkName: "components_Footer" */).then(c => c.default || c)
export const LazyLoading = import('../..\\client\\components\\Loading.vue' /* webpackChunkName: "components_Loading" */).then(c => c.default || c)
export const LazyNavbar = import('../..\\client\\components\\Navbar.vue' /* webpackChunkName: "components_Navbar" */).then(c => c.default || c)
