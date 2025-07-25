import { http } from '@/utils/http'
import type { GoodsResult } from '@/types/goods'
// 获取商品详情页的数据
export const getGoodsDatailAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: { id },
  })
}
