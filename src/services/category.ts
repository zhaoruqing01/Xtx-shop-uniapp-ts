import { http } from '@/utils/http'
import type { CategoryTopItem } from '@/types/category'

export const getCartAPI = () => {
  return http<CategoryTopItem[]>({
    url: '/category/top',
  })
}
