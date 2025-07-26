import { http } from '@/utils/http'
import type { MemberItem } from '@/types/member'

// 获取登录数据
type LoginItem = {
  code: string
  encryptedData: string
  id: string
}
export const getLoginAPI = (data: LoginItem) => {
  return http({
    url: '/login/wxMin',
    method: 'POST',
    data,
  })
}

// 模拟登录
export const getLoginTestAPI = () => {
  return http<MemberItem>({
    url: '/login/wxMin/simple',
    method: 'POST',
    data: { phoneNumber: '17658501696' },
  })
}
