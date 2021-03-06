<template>
  <div class="article-list-item">
    <div class="item-content" :class="{ mobile: mobileLayout }">
      <div class="item-thumb" v-if="!mobileLayout">
        <nuxt-link :to="`/article/${article.id}`">
          <img class="item-thumb-img" :src="buildThumb(article.thumb)" :alt="article.title" :title="article.title">
        </nuxt-link>
      </div>
      <div class="item-body">
        <h4 class="item-title">
          <nuxt-link :to="`/article/${article.id}`" :title="article.title">{{ article.title }}</nuxt-link>
        </h4>
        <p class="item-description" style="-webkit-box-orient: vertical;" v-html="article.description"></p>
        <div class="item-meta">
          <span class="date">
            <i class="iconfont icon-clock"></i>
            <span>{{ article.create_at | toYMD }}</span>
          </span>
          <span class="views">
            <i class="iconfont icon-eye"></i>
            <span>{{ article.meta.views || 0 }}</span>
          </span>
          <span class="comments">
            <i class="iconfont icon-comment"></i>
            <span>{{ article.meta.comments || 0 }}</span>
          </span>
          <span class="likes">
            <i class="iconfont icon-like"></i>
            <span>{{ article.meta.likes || 0 }}</span>
          </span>
          <span class="categories">
            <i class="iconfont icon-list"></i>
            <nuxt-link :key="index" :to="`/category/${category.slug}`" v-if="article.category && article.category.length" v-for="(category, index) in article.category">{{ category.name }}</nuxt-link>
            <span v-else>未分类</span>
          </span>
          <span class="tags" v-show="false">
            <i class="iconfont icon-tag"></i>
            <span v-if="!article.tag.length">无</span>
            <nuxt-link :key="index" :to="`/tag/${tag.slug}`" v-for="(tag, index) in article.tag">{{ tag.name }}</nuxt-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'article-list-item',
    props: {
      article: Object
    },
    computed: {
      ...mapState('option', ['imgExt', 'mobileLayout'])
    },
    methods: {
      buildThumb(thumb) {
        if (!thumb) return `${this.cdnUrl}/images/thumb-article.jpg`
        return `${thumb}?imageView2/1/w/350/h/238/format/${this.imgExt}/interlace/1/q/75|watermark/2/text/U3VybW9uLm1l/font/Y2FuZGFyYQ==/fontsize/460/fill/I0ZGRkZGRg==/dissolve/23/gravity/SouthWest/dx/15/dy/7|imageslim`
      }
    }
  }

</script>

<style lang="scss" scoped>
  .article-list-item {
    margin-bottom: 1em;
    background-color: $module-bg;

    &:last-child {
      margin: 0;
    }

    &:hover {
      background-color: #eee;
    }

    >.item-content {
      display: block;
      overflow: hidden;
      height: 9.5em;
      padding: .5em;

      &:hover {

        >.item-thumb {

          .item-thumb-img {
            @include css3-prefix(opacity, .95);
            @include css3-prefix(transform, translateX(-.5em));
          }
        }
      }

      >.item-thumb {
        float: left;
        width: 12em;
        height: 8.5em;
        overflow: hidden;

        .item-thumb-img {
          min-width: 100%;
          width: calc(100% + .5em);
          max-width: calc(100% + .5em);
          height: auto;
          min-height: 8.5em;
          border-color: transparent;
          background-color: $module-hover-bg;
          @include css3-prefix(opacity, 1);
          @include css3-prefix(transform, translateX(0));
        }
      }

      >.item-body {
        float: right;
        width: 40em;
        height: 8.5em;

        >.item-title {
          font-size: 1em;
          font-weight: bold;
          color: $link-hover-color;
          margin-top: .2em;
          margin-bottom: .5em;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          >a {
            margin-left: 0;

            &:hover {
              display: inline-block;
              text-decoration: underline;
              margin-left: .5em;
            }
          }
        }

        >.item-description {
          height: 5em;
          margin: 0;
          margin-bottom: 0.3em;
          overflow: hidden;
          font-size: .9em;
          line-height: 1.8em;
          text-overflow: ellipsis;
          @include clamp(3);
        }

        >.item-meta {
          height: 2em;
          display: flex;
          justify-content: flex-start;
          align-items: baseline;
          overflow: hidden;
          font-size: .9em;
          line-height: 2em;
          white-space: nowrap;
          text-overflow: ellipsis;
          word-wrap: normal;

          >.views {
            min-width: 4rem;
          }

          >.likes,
          >.comments {
            min-width: 3em;
          }

          >.date,
          >.views,
          >.comments,
          >.likes,
          >.tags,
          >.categories {
            margin-right: 1em;

            >.iconfont {
              font-size: 1em;
              margin-right: .4em;
            }
          }

          >.tags,
          >.categories {

            a {
              text-transform: capitalize;
              margin-right: .5em;
            }
          }

          >.tags {
            margin-right: 0;
          }
        }
      }

      &.mobile {
        height: auto;

        >.item-body {
          width: 100%;
          height: auto;

          >.item-description {
            height: auto;
            margin-bottom: .5em;
          }

          >.item-meta {
            justify-content: space-between;

            >.date,
            >.views,
            >.comments,
            >.likes,
            >.tags,
            >.categories {
              margin: 0;
            }
          }
        }
      }
    }
  }

</style>
