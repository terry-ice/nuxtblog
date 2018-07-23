/*
 * @Author: terry 
 * @Date: 2018-07-18 16:44:05 
 * @Last Modified by: terryloveyan@gmail.com
 * @Last Modified time: 2018-07-23 22:54:49
 */
import service from '~/plugins/axios'
export const actions = {
  // 全局服务初始化
  nuxtServerInit(store, {
    params,
    route,
    req
  }) {
    const initAppData = [
      // store.dispatch('loadAdminInfo'),
    ]
    return Promise.all(initAppData)
  },
  // 获取文章列表
  loadArticles({
    commit
  }, params = {
    page: 1
  }) {
    return service.get('/article', {
        params
      })
      .then(res => {
        commit('article/GET_LIST_SUCCESS', res.data)
      })
      .catch(err => {
        console.log(err,'err')
        // commit('article/GET_LIST_FAILURE', err)
      })
  },
  // 获取文章详情
  articlesInfo({
    commit
  }, params) {
    console.log(params,'params');
    return service.get(`/article/${params.article_id}`)
      .then(res => {
        commit('article/GET_ARTICLE_INFO', res.data)
      })
      .catch(err => {
        console.log(err,'err')
        // commit('article/GET_LIST_FAILURE', err)
      })
  },

}
