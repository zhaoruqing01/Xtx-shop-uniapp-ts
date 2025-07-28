import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { AddressItem } from '@/types/address'

export const addressStore = defineStore('address', () => {
  // 地址信息
  const addressInfo = ref<AddressItem>()
  // 修改地址信息
  const setAddressInfo = (val: AddressItem) => {
    addressInfo.value = val
  }
  return {
    addressInfo,
    setAddressInfo,
  }
})
