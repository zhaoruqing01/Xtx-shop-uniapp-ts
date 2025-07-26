// 登录获取的用户信息
export type MemberItem = BaseItem & {
  mobile: string
  token: string
}

export type BaseItem = {
  account: string
  avatar: string
  id: string
  nickname: string
}

export type Gender = '男' | '女'

// 个人信息的数据
export type ProfileDetail = BaseItem & {
  birthday: string
  gender: Gender
  fullLocation: string
  profession: string
}

// 更改个人信息的请求数据 - Pick获取部分类型
export type ProfileParams = Pick<
  ProfileDetail,
  'nickname' | 'gender' | 'birthday' | 'profession'
> & {
  provinceCode?: string
  /** 城市编码 */
  cityCode?: string
  /** 区/县编码 */
  countyCode?: string
}
