<template>
    <transition-group name="fade" tag="div" v-if="article.data.data && article.data.data.length">
      <list-item :key="index" :article="item" @click.native="toDetail(item)" v-for="(item, index) in article.data.data"></list-item>
    </transition-group>
</template>

<script>
  import ListItem from './item.vue'
  export default {
    props: {
      article: {
        type: Object
      }
    },
    components: {
      ListItem
    },
    name: 'layout-header',
    methods: {
      toDetail(article) {
          this.$router.push(`/article/${article.id}`)
      }
    }
  }

</script>
