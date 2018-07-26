<template>
  <header class="header">
    <div id="site-header-inner">
      <!-- header top -->
      <div id="header-top">
        <div class="container clearfix">
          <form id="header-search" role="search" method="get" action="">
            <button type="submit" id="submit-button">
              <i class="fa fa-search"></i>
            </button>
            <input type="text" placeholder="Type to Search..." class="font-montserrat-reg" name="s" id="s">
          </form>
          <ul class="header-social">
            <li>
              <a href="#" target="_blank">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i class="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i class="fa fa-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i class="fa fa-google-plus"></i>
              </a>
            </li>
          </ul>

        </div>
      </div>
      <!-- header middle -->
      <div id="header-middle">
        <div class="container">
          <div class="medium-header-container clearfix">
            <!-- Site logo -->
            <a href="/" id="site-logo">
              <img src="/images/logo.svg" alt="Site Logo">
            </a>
            <!-- Mobile burger icon -->
            <div id="mobile-nav-button">
              <div id="mobile-nav-icon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="header-navigation" class="nav-fixed" style="top: 0px;">
        <div class="container">

          <nav id="header-nav">
            <ul id="nav-ul" class="menu font-montserrat-reg clearfix">

              <li id="menu-item-50" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-50">
                <a href="/">Home</a>
              </li>
              <li id="menu-item-50" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-50">
                <a href="/sitemap">Article</a>
              </li>
              <li id="menu-item-50" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-50">
                <a href="/project">Project</a>
              </li>
              <li id="menu-item-50" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-50">
                <a href="/about">About</a>
              </li>
              <li id="menu-item-49" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-49">
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </div>
  </header>

</template>

<script>
  const apiConfig = require("~/config")
  import EventBus from "~/utils/event-bus"
  export default {
    name: "layout-header",
    data() {
      return {
        preload: false
      }
    },
    mounted() {
      if (process.browser) {
        window.addLoadedTask(() => {
          this.preload = true
        })
      }
    },
    computed: {
      player() {
        return EventBus.player.player
      },
      playerState() {
        return EventBus.player.playerState
      },
      currentSong() {
        return EventBus.currentSong
      },
      currentSongPicUrl() {
        if (this.currentSong) {
          const picUrl = this.currentSong.album.picUrl
          return picUrl ? picUrl.replace("http://", "/proxy/") + "?param=600y600" : `${this.cdnUrl}/images/music-bg.jpg`
        } else {
          return `${this.cdnUrl}/images/music-bg.jpg`
        }
      }
    },
    methods: {
      togglePlay() {
        if (this.playerState.ready) {
          this.player.togglePlay()
        }
      },
      toggleMuted() {
        if (this.playerState.ready) {
          this.player.toggleMuted()
        }
      },
      prevSong() {
        if (this.playerState.ready) {
          this.player.prevSong()
        }
      },
      nextSong() {
        if (this.playerState.ready) {
          this.player.nextSong()
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "~assets/sass/mixins";
  @import "~assets/sass/variables";
  .header {
    margin-bottom: 30px;
    #header-top {
      background-color: #f5f5f5;
      min-height: 35px;
      line-height: 35px;
    }
    #header-search {
      float: left;
      margin-top: 6px;
      margin-bottom: 0;
      #submit-button {
        float: left;
        border: 0;
        background-color: transparent;
        width: 26px;
        height: 21px;
        margin-right: 4px;
      }
      input[type="text"] {
        width: 160px;
        border: 0;
        float: left;
        height: 22px;
        font-size: 12px;
        color: #757575;
        line-height: 16px;
        background-color: transparent;
        &::-webkit-input-placeholder {
          color: #757575;
        }
      }
      .fa {
        float: left;
        color: #757575;
        font-size: 14px;
        line-height: 13px;
        margin-top: 3px;
      }
    }

    .header-social {
      float: right;
      margin-top: 1px;
      li {
        margin-right: 30px;
        float: left;
        list-style: none;
        &:last-child {
          margin-right: 0;
        }
        a {
          font-size: 12px;
          color: #757575;
          transition: color 0.35s ease-in-out;
          -webkit-transition: color 0.35s ease-in-out;
          &:hover {
            color: #111;
          }
        }
      }
      span {
        display: none !important;
      }
    }
  }

  #site-logo {
    max-width: 180px;
    height: auto;
    margin: 0 auto;
    display: block;
    img {
      max-width: 180px;
      height: auto;
      margin: 0 auto;
      display: block;
    }
  }

  .menu ul,
  body.boxed #header-navigation .container {
    padding: 0;

  }

  #header-navigation {
    z-index: 10;
    background-color: #fff;
    width: 75em;
    margin: 0 auto;
    &.fixed-navigation {
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 100;
      background-color: #fff;
    }
  }

  .menu {
    .menu-item-has-children,
    .page_item_has_children,
    li {
      position: relative;
    }
  }

  body.boxed #header-navigation.fixed-navigation {
    width: auto;
  }

  #header-navigation.fixed-navigation #header-nav {
    margin: 0 auto;
  }

  .menu {
    margin: 0;
    list-style-type: none;
    ul {
      margin: 0;
      list-style-type: none;
    }
  }

  #header-navigation #header-nav {
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    text-align: center;
  }

  .menu {
    clear: both;
    padding-left: 0;
    li {
      white-space: nowrap;
      display: inline-block;
    }
    .menu-item>a,
    .page_item>a {
      font-size: 11px;
      color: #757575;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin: 0 15px;
      padding: 20px 0;
      text-decoration: none;
      display: inline-block;
      -moz-transition: color, 0.35s, ease-in-out;
      -webkit-transition: color, 0.35s, ease-in-out;
      transition: color, 0.35s, ease-in-out;
    }
  }

  #header-nav .menu-item>a.active {
    color: #111 !important;
    -moz-transition: color, 0.35s, ease-in-out;
    -webkit-transition: color, 0.35s, ease-in-out;
    transition: color, 0.35s, ease-in-out;
  }

  .menu {
    .menu-item>a:hover,
    .page_item>a:hover,
    >ul>li>a:hover {
      color: #111 !important;
      -moz-transition: color, 0.35s, ease-in-out;
      -webkit-transition: color, 0.35s, ease-in-out;
      transition: color, 0.35s, ease-in-out;
    }
  }

  .submenu-active {
    color: #111 !important;
    -moz-transition: color, 0.35s, ease-in-out;
    -webkit-transition: color, 0.35s, ease-in-out;
    transition: color, 0.35s, ease-in-out;
  }

  .menu {
    .sub-drop-icon {
      margin-left: 5px;
      display: none;
    }
    > {
      li.menu-item-has-children a,
      ul>.page_item.page_item_has_children a {
        margin-right: 5px;
        transition: color 0.25s ease-in-out;
        -webkit-transition: color 0.25s ease-in-out;
      }
      li.menu-item-has-children:after,
      ul>.page_item.page_item_has_children:after {
        font-family: FontAwesome;
        content: "\f107";
        margin-top: 24px;
        margin-right: 15px;
      }
    }
  }

  .header-style-2 {
    #header-nav {
      float: right;
      margin-top: 40px;
    }
    .menu> {
      .menu-item>a,
      .page_item>a {
        padding-top: 0;
      }
      .menu-item:last-child>a,
      .page_item:last-child>a {
        margin-right: 0;
      }
    }
  }

  .menu {
    .children,
    .sub-menu {
      background-color: #fff;
      position: absolute;
      z-index: 1000;
      top: 56px;
      left: 16px;
      min-width: 230px;
      border-top: 1px solid #f5f5f5;
      opacity: 0;
      visibility: hidden;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
      margin-top: 30px;
      -webkit-transition: all 0.35s;
      transition: all 0.35s;
    }
    .children li,
    .sub-menu li {
      width: 100% !important;
      height: auto;
      display: block;
    }
    .children li a,
    .sub-menu li a {
      font-size: 9px;
      color: #757575 !important;
      letter-spacing: 1px;
      margin: 0;
      display: block;
      width: 100%;
      text-align: left;
      text-decoration: none;
      text-transform: uppercase;
      position: relative;
      padding: 10px 15px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
    .children li a:hover,
    .sub-menu li a:hover {
      background-color: #f5f5f5;
    }
  }

  .menu-item-has-children:hover>.sub-menu,
  .page_item_has_children:hover>.children {
    margin-top: 0;
    opacity: 1;
    visibility: visible;
  }

  .sub-menu .sub-drop-icon {
    position: absolute;
    top: 17px;
    right: 20px;
    font-size: 15px;
  }

  #nav-ul li ul li ul,
  .sub-menu .sub-second-tier {
    top: -1px;
    left: 200px;
  }

  .header-style-2 .menu .sub-menu,
  .menu .children {
    top: 30px;
  }

  body.boxed {
    #footer-instagram .container,
    #footer-social .container {
      padding: 0;
    }
  }

</style>
