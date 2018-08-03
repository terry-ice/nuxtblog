/**
 * Vue-comment-box
 * @author terry
 */

const vueComment = require('./comment.vue')
const comment = {
  install: function(Vue) {
    Vue.component('comment-box', vueComment.default || vueComment)
  }
}

module.exports = comment
