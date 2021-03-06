<template>
  <div id="app" :class="theme" v-cloak>
    <div id="app-tools">
      <input type="text" v-model="clipboardText" class="clipboard-input" ref="clipboard">
    </div>
    <div id="app-aside" v-if="mobileLayout" :class="{ open: mobileSidebar }">
      <mobile-aside :class="{ open: mobileSidebar }"></mobile-aside>
    </div>
    <div id="app-main" :class="{ open: mobileSidebar }" @click="closeMobileSidebar">
      <background v-if="!mobileLayout"></background>
      <header-view v-if="!mobileLayout"></header-view>
      <mobile-header v-if="mobileLayout"></mobile-header>
      <main id="main" :class="{ 'mobile': mobileLayout, [$route.name]: true }">
        <div id="main-content" class="main-content" :class="{ 
               'full-column': fullColumn, 
               'error-column': errorColumn,
               'mobile-layout': mobileLayout,
               [$route.name]: true
              }">
          <keep-alive>
            <nuxt></nuxt>
          </keep-alive>
        </div>
        <transition name="aside">
          <keep-alive>
            <aside-view v-if="!fullColumn && !errorColumn && !mobileLayout"></aside-view>
          </keep-alive>
        </transition>
      </main>
      <tool-view v-if="!mobileLayout && !['app','service'].includes($route.name)"></tool-view>
      <share-view class="sidebar-share" v-if="!mobileLayout && !['service'].includes($route.name)"></share-view>
      <footer-view v-if="!mobileLayout"></footer-view>
      <mobile-footer v-else></mobile-footer>
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import eventBus from '~/utils/event-bus'
  import {
    MobileHeader,
    MobileFooter,
    MobileAside
  } from '~/components/mobile'
  import {
    Background,
    Header,
    Footer,
    Aside,
    Share,
    Theme,
    Tool
  } from '~/components/layout'
  export default {
    name: 'app',
    head() {
      return !this.mobileLayout ? {} : {
        bodyAttrs: {
          class: 'mobile'
        }
      }
    },
    data() {
      return {
        theme: 'default',
        clipboardText: '',
      }
    },
    mounted() {
      // this.watchFullScreen()
      this.watchTabActive()
      // if (!this.mobileLayout) {
      //   this.$store.dispatch('loadMuiscPlayerList')
      // }
      this.$root.$eventBus = eventBus
      this.$root.$copyToClipboard = this.copyToClipboard
    },
    components: {
      HeaderView: Header,
      FooterView: Footer,
      AsideView: Aside,
      ShareView: Share,
      ThemeView: Theme,
      ToolView: Tool,
      Background,
      MobileHeader,
      MobileFooter,
      MobileAside
    },
    computed: {
      ...mapState('option', ['openWebrtc', 'barrageMounted', 'fullColumn', 'errorColumn', 'mobileLayout',
        'mobileSidebar'
      ])
    },
    methods: {
      setTheme(theme) {
        this.theme = theme
      },
      copyToClipboard(text) {
        this.clipboardText = text
        // 维护中间量用于给拦截器做标识
        window.clickCopy = true
        setTimeout(() => {
          this.$refs.clipboard.select()
          document.execCommand('Copy')
          window.clickCopy = false
        })
      },
      closeMobileSidebar() {
        if (this.mobileLayout) {
          this.$store.commit('option/SET_MOBILE_SIDEBAR', false)
        }
      },
      watchTabActive() {
        let reallyDocumentTitle
        document.addEventListener('visibilitychange', event => {
          if (event.target.hidden || event.target.webkitHidden) {
            reallyDocumentTitle = document.title
            document.title = '皮皮虾，快回来！'
          } else {
            document.title = reallyDocumentTitle
          }
        }, false)
      },
      watchFullScreen() {
        const fullscreenchange = event => {
          console.log('fullscreenchange', event)
        }
        document.addEventListener("fullscreenchange", fullscreenchange, false)
        document.addEventListener("mozfullscreenchange", fullscreenchange, false)
        document.addEventListener("webkitfullscreenchange", fullscreenchange, false)
        document.addEventListener("msfullscreenchange", fullscreenchange, false)
      }
    }
  }

</script>

<style lang="scss" scoped>
  #app {
    color: $text;

    &[v-cloak] {
      color: transparent;
      -webkit-text-fill-color: transparent;
    }

    #app-tools {
      height: 0px;
      opacity: 0; // overflow: hidden;
    }

    #app-aside {
      width: 68%;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      z-index: 9999;
      transform: translateX(-100%);
      transition: $mobile-aisde-transition;
      background-color: $mobile-aside-bg;

      &.open {
        overflow: hidden;
        transform: translateX(0);
        transition: $mobile-aisde-transition;
        -webkit-overflow-scrolling: touch;
      }
    }

    #app-main {
      transition: $mobile-aisde-transition;

      &.open {
        transition: $mobile-aisde-transition;
        transform: translateX(68%);
      }

      main {
        position: relative;

        &.service {
          width: 100%;
        }

        .main-content {
          float: left;
          width: 54em;
          position: relative;
          overflow: hidden;
          @include css3-prefix(transition, width .35s);

          &:-moz-full-screen {
            overflow-y: auto;
          }

          &:-webkit-full-screen {
            overflow-y: auto;
          }

          &:fullscreen {
            overflow-y: auto;
          }

          &.full-column {
            width: 100%;
            @include css3-prefix(transition, width .35s);
          }

          &.error-column {
            width: 100%;
            margin: 0;
            @include css3-prefix(transition, width .35s);
          }

          &.mobile-layout {
            width: 100%;
            margin: 0;
            padding: 1rem;
            padding-top: $navbar-height + 1;
          }

          &.service {
            width: 100%;
            margin: -1em 0;

            &.mobile-layout {
              margin: 0;
            }
          }
        }
      }
    }
  }

</style>
