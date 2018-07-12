import fetch from '../../utils/proxyFetch';
export const schema = [
  `
  type ImgUrl{
    name:String
    url:String
  }
  type New {
    id: ID
    title: String
    author: String
    publish_time: String
    content: String
    picture_url: String
    abstract: String
    is_top: Boolean
    top_time: String
  }

  type NewDetail {
    id:ID
    title:String
    author:String
    publish_time:String
    abstract:String
    content:String
    picture_url:String
    is_top:Boolean
    top_time:String
  }
  type Video {
    id: ID
    video_url: String
    video_name: String
    publish_time: String
    content: String
    video_img: String
    is_promote: Boolean
  }
  type News {
    pagination: Pagination
    data: [New!]
  }
  type Videos {
    pagination: Pagination
    data: [Video!]
  }
  type VideoDetail {
    id:String
    video_url:String
    video_name:String
    publish_time:String
    content:String
    video_img:String
    is_promote:Boolean
  }
  type UserInfo {
    head_img:String
    phone:String
    nickname:String
    sex:Int
    city:String
    email:String
  }
  type getUser {
    result: [UserInfo!]
  }

  type Query {
    cars(page: Int, limit: Int): Cars
    getUser(id: Int): UserInfo
    carsDetail(id: Int): Car
    news(page: Int, limit: Int): News
    newsDetail(id: Int): NewDetail
    videos(page: Int, limit: Int): Videos
    videoDetail(id: Int): VideoDetail
  }
  type Pagination {
    current: Int
    limit: Int
    total: Int
    pages: Int
  }

  type Car {
    id:ID
    manufacturer:String
    model:String
    version:String
    start_year:String
    end_year:String
    picture_urls: [ImgUrl]
    desc:String
  }
  type Cars {
    pagination: Pagination
    data: [Car!]
  }
  type Years {
    lower: String
    upper: String
  }
  type Classify {
    brands:[String]
    themes:[String]
    start_year_ranges: [Years!] 
  }
`,
];

export const queries = [
  `
  # 获取老爷车列表
  cars(
    # 页数
    page: Int!
    # 每页条数
    limit: Int!
    # brand
    brand:String
    # theme
    theme:String
    # start_year_lower
    start_year_lower:String
    # start_year_upper
    start_year_upper:String
  ): Cars

  # 获取我的收藏列表
  getCollection(
    # 页数
    page: Int!
    # 每页条数
    limit: Int!
  ): Cars

  getUser(
    # 任意字符
    id: Int
  ): UserInfo
  carsDetail(id: Int): Car
  news(page: Int, limit: Int): News
  newsDetail(id: Int): NewDetail
  videos(page: Int, limit: Int): Videos
  videoDetail(id: Int): VideoDetail
  CarsClassify(
    # 任意字符
    id: Int
  ): Classify
  `,
];
export const resolvers = {
  RootQuery: {
    async cars(parent, args) {
      return fetch('cars', {
        page: args.page,
        limit: args.limit,
        brand: args.brand||'',
        theme: args.theme||'',
        start_year_lower:args.start_year_lower||'',
        start_year_upper:args.start_year_upper||''
      }, 'GET').then(res => {
        return res
      })
    },
    async getCollection(parent, args) {
      return fetch('list_collect_cars', {
        page: args.page,
        limit: args.limit
      }, 'GET', parent.id_token).then(res => {
        return res
      })
    },
    async carsDetail(parent, args) {
      return fetch('car/' + args.id, 'GET').then(res => {
        return res
      })
    },
    async news(parent, args) {
      return fetch('news', {
        page: args.page,
        limit: args.limit
      }, 'GET').then(res => {
        return res
      })
    },
    async newsDetail(parent, args) {
      return fetch('news/' + args.id, 'GET').then(res => {
        return res
      })
    },
    async videos(parent, args) {
      return fetch('videos', {
        page: args.page,
        limit: args.limit
      }, 'GET').then(res => {
        return res
      })
    },
    async videoDetail(parent, args) {
      return fetch('video/' + args.id, 'GET').then(res => {
        return res
      })
    },
    async getUser(parent, args) {
      return fetch('userinfo', {}, 'GET', parent.id_token).then(res => {
        return res.result
      })
    },
    async CarsClassify(parent, args) {
      return fetch('categories', {}, 'GET', parent.id_token).then(res => {
        console.log(res,'res');
        return res.data
      })
    }
  },
};
