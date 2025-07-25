// 热门推荐的请求数据类型
import type { PageResult, GoodsItem } from './global'

// 热门推荐
export type HotResultItem = {
  id: string
  bannerPicture: string
  title: string
  subTypes: SubTypeItem[]
}

// 热门推荐的子类选项
export type SubTypeItem = {
  id: string
  title: string
  goodsItems: PageResult<GoodsItem>
}
