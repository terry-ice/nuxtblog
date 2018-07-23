<template>
  <!-- CONTENT -->
  <div class="content col-xs-8">
      <article-list :article="article" ></article-list>
    <!-- NAVIGATION -->
    <div class="navigation">
      <a href="#" class="prev">
        <i class="icon-arrow-left8"></i> Previous Posts</a>
      <a href="#" class="next">Next Posts
        <i class="icon-arrow-right8"></i>
      </a>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
  import  ArticleList from '~/components/common/article'
  export default {
    fetch({ store }) {
      return Promise.all([
        store.dispatch('loadArticles')
      ])
    },
    components:{
      ArticleList
    },
    layout: 'index',
    computed: {
      article() {
        return this.$store.state.article.list
      },
    }
  }

</script>
