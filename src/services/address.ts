import { http } from '@/utils/http'
import type { AddressParams, AddressItem } from '@/types/address'

// 新增地址接口
export const addAddressAPI = (data: AddressParams) => {
  return http({
    url: '/member/address',
    method: 'POST',
    data,
  })
}

// 获取地址列表
export const getAddressListAPI = () => {
  return http<AddressItem[]>({
    url: '/member/address',
  })
}

// 获取修改地址的详细数据
export const getAddressDetailAPI = (id: string) => {
  return http<AddressItem>({
    url: `/member/address/${id}`,
  })
}

// 调用修改地址的接口
export const updateAddressAPI = (id: string, data: AddressParams) => {
  return http({
    url: `/member/address/${id}`,
    method: 'PUT',
    data,
  })
}
