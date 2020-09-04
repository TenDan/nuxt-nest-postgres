
module.exports = {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  telemetry: false,
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'TenDan\'s Website',
    titleTemplate: '%s | TenDan\'s Website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Strona główna TenDana' || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'},
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/css/bulma-carousel.min.css'}
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/Buefy.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /**
   * Set loading page
   */
  loading: '~/components/Loading.vue',
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://auth.nuxtjs.org/
    '@nuxtjs/auth',
  ],
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'data.token',
          },
          logout: false,
          user: false,
        },
        autoFetchUser: false,
        globalToken: true
      },
    },
  },
  /**
   * Set transition to all pages
   */
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  },
  srcDir: 'client/',
  server: { port: 8080 }
}
