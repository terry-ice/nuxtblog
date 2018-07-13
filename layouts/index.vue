<template>
  <div class="root">
    <Header></Header>
    <section class="tada-container content-posts">
      <nuxt/>
      <Right></Right>
      <div class="clearfix"></div>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from '~/components/layout/Header.vue'
  import Footer from '~/components/layout/Footer.vue'
  import Right from '~/components/layout/Right.vue'
  export default {
    components: {
      Header,
      Right,
      Footer
    },
  }

</script>

<style lang="scss" scoped>


</style>
