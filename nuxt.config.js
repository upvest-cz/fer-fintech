const jsScript = `document.documentElement.classList.replace('no-js', 'js');`;
const polyfillScript = `if(!(window.Promise&&[].includes&&Object.assign&&window.Map)){document.write('<script src="https://polyfill.io/v3/polyfill.min.js"></scr'+'ipt>')}`;

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  telemetry: false,


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fer-fintech',
    __dangerouslyDisableSanitizers: ['script'],
    htmlAttrs: {
      lang: 'cs',
      class: 'no-js'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      { innerHTML: jsScript, type: 'text/javascript', charset: 'utf-8' },
      { innerHTML: polyfillScript, type: 'text/javascript', charset: 'utf-8' },
    ],
    link: [
      { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;1,600&display=swap', as: 'style' },
      // --- Favicons ---
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { name: 'msapplication-TileColor', content: '#000000' },
      { name: 'theme-color', content: '#000000' },
      // --- End Favicons ---
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;1,600&display=swap' },
    ]
  },

  /*
  ** Global CSS
  ** External dependencies are managed in styles.scss. No managing styles inside js.
  */
  css: [
    '@/assets/scss/styles.scss',
  ],

  /*
** Global style imports
** These files will be automatically injected into all components' styles
*/
  styleResources: {
    scss: [
      './assets/scss/helpers/_index.scss',
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/svg'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap'],
    postcss: {
      preset: {
        autoprefixer: {
          grid: true,
        },
      },
    },
  }
}
