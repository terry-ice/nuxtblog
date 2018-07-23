/*
*
* 文章数据状态
*
*/

export const state = () => {
  return {
    hot: {
      fetching: false,
      data: { data: [] }
    },
    list: {
      fetching: false,
      data: {
        data: [],
        pagination: {
          current_page: 0
        }
      }
    },
    detail: {
      fetching: false,
      data: {}
    }
  }
}

export const mutations = {
  GET_LIST_SUCCESS(state, action) {
    state.list.fetching = false
    state.list.data = action.result
  },
  GET_ARTICLE_INFO(state,action) {
    state.detail.fetching = false
    state.detail.data = action.result
  },

}
