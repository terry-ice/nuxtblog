
const path = require('path')
const webpack = require('webpack')
const apiConfig = require('./config')
const isProdMode = Object.is(process.env.NODE_ENV, 'production')
module.exports = {
  loading: {
    color: '#0088f5'
  },
  cache: {
    max: 100,
    maxAge: 1000 * 60 * 15
  },
  build: {
    // analyze: true,
    // 设置 cdn 地址
    publicPath: apiConfig.cdnUrl + '/_nuxt/',
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    // 对webpack的扩展
    extend(webpackConfig, { isClient }) {
      // 处理 Swiper4 下的 dom7 模块的语法问题
      webpackConfig.resolve.alias['swiper$'] = 'swiper/dist/js/swiper.js'
      webpackConfig.resolve.alias['dom7$'] = 'dom7/dist/dom7.js'
      // console.log('webpackConfig', webpackConfig)
      if (isClient) {
        // Run ESLINT on save
        webpackConfig.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: [/(node_modules)/, /underscore-simple/]
        })
      }
      if (isProdMode) {
        const vueLoader = webpackConfig.module.rules.find(loader => loader.loader === 'vue-loader')
        if (vueLoader) {
          // 处理 Template 中的 cdn 地址
          vueLoader.options.loaders.html = path.resolve(__dirname, './extend/html-cdn-loader')
          // 处理 CSS 中的 cdn 地址
          const vueLoaders = vueLoader.options.loaders
          for (cssLoader in vueLoaders) {
            if (Array.isArray(vueLoaders[cssLoader])) {
              vueLoaders[cssLoader].forEach(loader => {
                if (loader.loader === 'css-loader') {
                  loader.options.root = apiConfig.cdnUrl
                }
              })
            }
          }
        }
      }
    },
    // 将重复引用的(第三方/自有)模块添加到vendor.bundle.js
    vendor: [
      'axios',
      'howler',
      'swiper',
      'marked',
      'gravatar',
      'particles.js',
      'simplewebrtc',
    ],
    maxChunkSize: 350000,
    // 为 JS 和 Vue 文件定制 babel 配置。https://nuxtjs.org/api/configuration-build/#analyze
    babel: {
      presets: ['es2015', 'stage-2'],
      plugins: [
        'transform-async-to-generator',
        'transform-runtime'
      ],
      comments: true
    },
    styleResources: {
      scss: './assets/sass/init.scss',
      options: {}
    }
  },
  dev: isProdMode,
  env: {
    baseUrl: apiConfig.baseUrl,
    // HOST_URL: apiConfig.socketHost
  },
  plugins: [
    { src: '~/plugins/cdn.js' },
    { src: '~/plugins/loaded-task.js' },
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/howler.js' },
    { src: '~/plugins/filters.js' },
    { src: '~/plugins/marked.js' },
    { src: '~/plugins/gravatar.js' },
    { src: '~/plugins/highlight.js' },
    { src: '~/plugins/ga.js', ssr: false },
    { src: '~/plugins/clmtrackr.js', ssr: false },
    { src: '~/plugins/image-popup.js', ssr: false },
    { src: '~/plugins/copy-right.js', ssr: false },
    { src: '~/plugins/particles.js', ssr: false },
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/vue-empty.js' },
    { src: '~/plugins/vue-loading.js' },
    { src: '~/plugins/vue-comment.js' }
  ],
  head: {
    title: 'terry-blog',
    titleTemplate: '%s | 小生活平平淡淡',
    htmlAttrs: {
      xmlns: 'http://www.w3.org/1999/xhtml',
      // manifest: '592php.com',
      lang: 'zh'
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { name: 'author', content: '326959013@qq.com' },
      { name: 'MobileOptimized', content: '320' },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'Surmon.me' },
      { name: 'apple-touch-icon', content: '/static/icon.png' },
      { name: 'msapplication-TileImage', content: '/static/icon.png' },
      { name: 'msapplication-TileColor', content: '#0088f5' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: 'Vue开发者,前端技术开发,javascript技术' },
      { hid: 'description', name: 'description', content: '年华不虚度，一生已足以！' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      }
    ],
    script: [
      {
      }
    ],
    // __dangerouslyDisableSanitizers: ['script'],
    noscript: [
      { innerHTML: 'This website requires JavaScript.' }
    ]
  },
  manifest: {
    // start_url: '.',
    name: 'terry',
    short_name: 'terry',
    theme_color: '#0088f5',
    display: 'standalone',
    background_color: "#eee",
    description: 'this is my blog',
    lang: 'zh'
  },
  icon: {
    // iconSrc: '/static/icon.png',
    sizes: [16, 120, 144, 152, 192, 384, 512]
  },
  modules: [
    '@nuxtjs/pwa',
    // ['nuxt-i18n', i18nConfig]
  ],
  router: {
    middleware: ['change-page-col'],
    linkActiveClass: 'link-active',
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    extendRoutes(routes) {}
  },
  css: [
    'swiper/dist/css/swiper.css',
    'highlight.js/styles/ocean.css',
    { src: '~assets/sass/app.scss', lang: 'sass' }
  ]
}
