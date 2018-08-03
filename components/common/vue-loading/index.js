/**
 * Vue-loading
 * @author terry
 */

const LoadingComponent = require('./loading.vue')
const loading = {
  install: function(Vue) {
    Vue.component('loading-box', LoadingComponent.default || LoadingComponent)
  }
}

module.exports = loading
