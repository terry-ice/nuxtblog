import fetch from '../../utils/proxyFetch';
export const schema = [
  `
  type User {
    access_token: String
  }
  type ResponseStatus {
    status: String
    message: String
  }
  type Result {
    user_id:Int
    car_id:Int
  }
`
]

export const mutation = [
  `
  user(userName: String, password: String): User
  register(
    username: String,
    password: String,
    email: String,
    phone:String
  ): ResponseStatus
  setUserInfo(
    phone: String,
    email: String,
    nickname: String,
    head_img: String,
    city: String,
    sex: String
  ): ResponseStatus
  changePassword(
    old_password: String,
    new_password: String,
  ): ResponseStatus
  addCollection(
    car_id: Int
  ): Result
`
]
export const resolvers = {
  Mutation: {
    async user(parent, args) {
      return fetch('auth', {
        username: args.userName,
        password: args.password
      }, 'POST').then(res => {
        return res
      })
    },
    async register(parent, args) {
      return fetch('register', {
        username: args.username,
        password: args.password,
        email: args.email,
        phone: args.phone,
      }, 'POST').then(res => {
        return res
      })
    },
    async setUserInfo(parent, args) {
      return fetch('userinfo',{
        head_img:args.head_img,
        phone:args.phone,
        nickname: args.nickname,
        sex: 1,
        city:args.city,
        email:args.email,
      }, 'PUT', parent.id_token).then(res => {
        return res
      })
    },
    async changePassword(parent, args) {
      return fetch('changepassword', {
        old_password:args.old_password,
        new_password:args.new_password
      }, 'PUT', parent.id_token).then(res => {
        return res
      })
    },
    async addCollection(parent, args) {
      return fetch('collect_car', {
        car_id:args.car_id
      }, 'POST', parent.id_token).then(res => {
        return res
      })
    }
  }
}
