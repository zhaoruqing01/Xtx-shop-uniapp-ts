import { http } from '@/utils/http'
import type { ProfileDetail, ProfileParams } from '@/types/member'

// 获取个人信息
export const getProfileAPI = () => {
  return http<ProfileDetail>({
    url: '/member/profile',
  })
}

// 修改个人信息的请求

export const changeProfileAPI = (data: ProfileParams) => {
  return http<ProfileDetail>({
    url: '/member/profile',
    method: 'PUT',
    data,
  })
}
