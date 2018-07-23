<template>
  <article class="post-item">
    <div class="post-image">
      <img src="~assets/img/img-post-3.jpg" alt="post image 3">
    </div>
    <div class="post-text">
      <div class="text-body">
        <h2>
          <a href="#">{{article.title}}</a>
        </h2>
        <p class="text">{{article.description}}
          <a href="#">
            <i class="icon-arrow-right2"></i>
          </a>
        </p>
      </div>
      <div class="post-info">
        <div class="post-by">
          <span class="categories">
            <i class="iconfont icon-class"></i>{{ article.meta.views || "javascipt" }}
          </span>
          <span class="views">
            <i class="iconfont icon-views"></i>{{ article.meta.views || 0 }}
          </span>
          <span class="comments">
            <i class="iconfont icon-comments"></i>{{ article.meta.comments || 0 }}
          </span>
          <span class="likes">
            <i class="iconfont icon-like"></i>{{ article.meta.likes || 0 }}
          </span>
        </div>
        <div class="extra-info">

          <span class="date">07 Jun 2016</span>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>

  </article>
</template>

<script>
  export default {
    props: {
      article: Object
    }
  }

</script>
<style lang="scss" scoped>
  .post-item {
    display: flex;
    flex-direction: row;
    background: #fff;
    margin-bottom: 10px;
    .post-image {
      flex: 0 0 180px;
      padding: 10px;
      img {
        border-radius: 2px;
        width: 180px;
        height: 120px;
      }
    }
    .post-text {
      margin-left: 10px;
      margin-right: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      .text-body {
        h2 {
          margin: 12px 0 5px 0;
          font-family: 'CenturyGothic';
          font-size: 16px;
          text-align: left;
        }
      }
      .post-info {
        margin-top: 2px;
        border-radius: 0 0 10px 10px;
        .date {
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 2px;
        }
        .post-by{
          span{
            color: #9c8156;
            font-size: 13px;
          }
          i{
            font-size: #9c8156;
          }
        }
      }
      h2 a {
        transition: all 0.3s ease 0s;
        &:hover {
          transition: all 0.3s ease 0s;
        }
      }
      .text {
        text-align: justify;
        font-weight: 100;
        letter-spacing: 1.5px;
        line-height: 1.8;
        height: 80px;
        margin: 0;
        text-indent:2em; 
      }
  
    }

  }

</style>
