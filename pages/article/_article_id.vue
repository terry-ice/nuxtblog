<template>
  <!-- CONTENT -->
  <div class="content col-xs-8">
    <!-- ARTICLE 1 -->
    <article>
      <div class="post-image">
        <img src="~assets/img/img-post-1.jpg" alt="post image 1">
      </div>
      <div class="category">
        <a href="#">IMG</a>
      </div>
      <div class="post-text">
        <span class="date">07 Jun 2016</span>
        <h2>MAECENAS CONSECTETUR</h2>
      </div>
      <div class="post-text text-content">
        <div class="post-by">Post By
          <a href="#">AD-Theme</a>
        </div>
        <div class="text" v-html="markedContent">
        <div class="clearfix"></div>
        </div>
      </div>
      <div class="social-post">
        <a href="#">
          <i class="icon-facebook5"></i>
        </a>
        <a href="#">
          <i class="icon-twitter4"></i>
        </a>
        <a href="#">
          <i class="icon-google-plus"></i>
        </a>
        <a href="#">
          <i class="icon-vimeo4"></i>
        </a>
        <a href="#">
          <i class="icon-linkedin2"></i>
        </a>
      </div>


      <!-- NAVIGATION POST -->
      <div class="navigation-post">
        <div class="prev-post">
          <img src="~assets/img/prev-post.jpg">
          <a href="#" class="prev">
            <i class="icon-arrow-left8"></i> Previous Posts
            <span class="name-post">DUIS FACILISIS AUGUE VITAE</span>
          </a>
          <div class="clearfix"></div>
        </div>
        <div class="next-post">
          <a href="#" class="next">
            Next Posts
            <i class="icon-arrow-right8"></i>
            <span class="name-post">DUIS FACILISIS AUGUE VITAE</span>
          </a>
          <img src="~assets/img/next-post.jpg">
          <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
      </div>

      <div class="author-post-container">
        <div class="author-post">
          <div class="author-image">
            <img src="~assets/img/img-author.jpg">
          </div>
          <div class="author-info">
            <span class="author-name">LUCAS NEWAR</span>
            <span class="author-description">Morbi gravida, sem non egestas ullamcorper, tellus ante laoreet nisl, id iaculis urna eros vel turpis curabitur.</span>
            <span class="author-social">
              <a href="#">
                <i class="icon-facebook5"></i>
              </a>
              <a href="#">
                <i class="icon-twitter4"></i>
              </a>
              <a href="#">
                <i class="icon-google-plus"></i>
              </a>
              <a href="#">
                <i class="icon-vimeo4"></i>
              </a>
              <a href="#">
                <i class="icon-linkedin2"></i>
              </a>
            </span>
          </div>
          <div class="clearfix"></div>
        </div>

      </div>


      <!-- RELATED POSTS -->
      <div class="related-posts">
        <h2>Related Article</h2>
        <div class="related-item-container">
          <div class="related-item">
            <div class="related-image">
              <img src="~assets/img/img-related-1.jpg">
              <span class="related-category">
                <a href="#">Food</a>
              </span>
            </div>
            <div class="related-text">
              <span class="related-date">03 JUNE 2016</span>
              <span class="related-title">
                <a href="#">TINCIDUNT SIT
                  <br> ULTRICIES AMET</a>
              </span>
            </div>
            <div class="related-author">
              Post by
              <a href="#">AD-THEME</a>
            </div>
          </div>

          <div class="related-item">
            <div class="related-image">
              <img src="~assets/img/img-related-2.jpg">
              <span class="related-category">
                <a href="#">TECHNOLOGY</a>
              </span>
            </div>
            <div class="related-text">
              <span class="related-date">04 JUNE 2016</span>
              <span class="related-title">
                <a href="#">VIVAMUS ET
                  <br> TURPIS LACINIA</a>
              </span>
            </div>
            <div class="related-author">
              Post by
              <a href="#">AD-THEME</a>
            </div>
          </div>

          <div class="clearfix"></div>

        </div>
      </div>


      <!-- COMMENTS -->
      <div class="comments">
        <h3>3 Comments</h3>
        <div class="comments-list">
          <div class="main-comment">
            <div class="comment-image-author">
              <img src="~assets/img/img-author.jpg">
            </div>
            <div class="comment-info">
              <div class="comment-name-date">
                <span class="comment-name">LUCAS NEWAR</span>
                <span class="comment-date">June 2, 2016</span>
                <div class="clearfix"></div>
              </div>
              <span class="comment-description">Morbi gravida, sem non egestas ullamcorper, tellus ante laoreet nisl, id iaculis urna eros vel turpis curabitur.
                <i class="icon-arrow-right2"></i>
              </span>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="reply-comment">
            <span class="reply-line"></span>
            <div class="comment-image-author">
              <img src="~assets/img/img-author.jpg">
            </div>
            <div class="comment-info">
              <div class="comment-name-date">
                <span class="comment-name">LUCAS NEWAR</span>
                <span class="comment-date">June 2, 2016</span>
                <div class="clearfix"></div>
              </div>
              <span class="comment-description">Morbi gravida, sem non egestas ullamcorper, tellus ante laoreet nisl, id iaculis urna eros vel turpis curabitur.
                <i class="icon-arrow-right2"></i>
              </span>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>

        <div class="comments-list">
          <div class="main-comment">
            <div class="comment-image-author">
              <img src="~assets/img/img-author.jpg">
            </div>
            <div class="comment-info">
              <div class="comment-name-date">
                <span class="comment-name">LUCAS NEWAR</span>
                <span class="comment-date">June 2, 2016</span>
                <div class="clearfix"></div>
              </div>
              <span class="comment-description">Morbi gravida, sem non egestas ullamcorper, tellus ante laoreet nisl, id iaculis urna eros vel turpis curabitur.
                <i class="icon-arrow-right2"></i>
              </span>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>


      <!-- COMMENT FORM -->
      <div class="comment-form">
        <h3>Leavy Reply</h3>
        <span class="field-name">Your Name (required)</span>
        <input type="text" class="name">
        <span class="field-name">Your Name (required)</span>
        <input type="text" class="email">
        <span class="field-name">Your Message</span>
        <textarea class="message"></textarea>

        <button type="submit">Send Comment</button>
      </div>


    </article>


  </div>
</template>
<script>
import { mapState } from 'vuex'
import marked from '~/plugins/marked'
  export default {
    layout: 'index',
    fetch({ store, params, error }) {
      console.log(params,'params')
      return store.dispatch('articlesInfo', params).catch(err => {
        console.log(err, 'info')
        // error({ statusCode: 404, message: '众里寻他 我已不再' })
      })
    },
    computed: {
      ...mapState({
        article: state => state.article.detail.data,
      }),
      markedContent(){
        const content = this.article.content
        return marked(content,false, true)
      }
    },
    
  }

</script>
