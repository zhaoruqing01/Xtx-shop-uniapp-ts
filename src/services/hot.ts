import { http } from '@/utils/http'
import type { PageParams } from '@/types/global'
import type { HotResultItem } from '@/types/hot'

type HotParams = PageParams & {
  /** Tab 项的 id，默认查询全部 Tab 项的第 1 页数据 */
  subType?: string
}
// 获取热门推荐的数据
export const getHotItemAPI = (url: string, data: HotParams) => {
  return http<HotResultItem>({
    url,
    data,
  })
}
