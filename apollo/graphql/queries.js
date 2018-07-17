import fetch from '../../utils/proxyFetch';
export const schema = [
  `
  type meta {
    views: Int
    likes: Int
    comments: Int
  }
  type tagExtends {
    name: String
    value: String
    _id:String
  }
  type tag {
    create_at: String
    extends: [tagExtends!],
    _id: String,
    id: Int,
    name: String,
    slug: String,
    description: String,
    v: Int,
    update_at: String
  }
  type categoryExtends{
    _id: String
    value: String
    name: String
  }
  type category {
      pid: String
      create_at: String
      extends: [categoryExtends!]
      _id: String
      id: Int
      name: String
      slug: String
      description: String
      v: Int
      update_at: String
  }
  type data {
    meta: meta
    keywords:[String]
    state:Int
    public:Int
    tag:[tag!]
    category:[category!]
    create_at: String
    update_at: String
    _id: String
    title: String
    description: String
    thumb: String
    id: Int
    v: Int
  }
  type pagination {
    total: Int
    current_page: Int
    total_page: Int
    per_page: Int
  }
  type result{
    data:[data!]
    pagination:pagination
  }
`
];

export const queries = [
  `
  # 获取文章列表
  article(
    # 页数
    page: Int!
  ): result
  `,
];
export const resolvers = {
  RootQuery: {
    async article(parent, args) {
      return fetch('article', {
        page: args.page}, 'GET').then(res => {
        return res.result
      })
    }

  },
};
