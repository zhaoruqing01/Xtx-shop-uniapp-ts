import { http } from '@/utils/http'
import type {
  OrderPreResult,
  OrderCreateParams,
  OrderResult,
  OrderLogisticResult,
  OrderListResult,
  OrderListParams,
} from '@/types/order'

// 获取预付订单的的数据
export const getOrderPreAPI = () => {
  return http<OrderPreResult>({
    url: '/member/order/pre',
    method: 'GET',
  })
}

// 提交订单接口
export const postOrderAPI = (data: OrderCreateParams) => {
  return http<{ id: string }>({
    url: '/member/order',
    method: 'POST',
    data,
  })
}

// 获取订单数据
export const getOrderDetailAPI = (id: string) => {
  return http<OrderResult>({
    url: `/member/order/${id}`,
  })
}

/**
 * 获取微信支付参数
 * @param data orderId 订单id
 */
export const getPayWxPayMiniPayAPI = (data: { orderId: string }) => {
  return http<WechatMiniprogram.RequestPaymentOption>({
    method: 'GET',
    url: '/pay/wxPay/miniPay',
    data,
  })
}

// 开发环境支付接口
export const getPayOrderAPI = (data: { orderId: string }) => {
  return http({
    url: '/pay/mock',
    data,
  })
}

/**
 * 模拟发货-内测版
 * @description 在DEV环境下使用，仅在订单状态为待发货时，可模拟发货，调用后订单状态修改为待收货，包含模拟物流。
 * @param id 订单id
 */
export const getMemberOrderConsignmentByIdAPI = (id: string) => {
  return http({
    method: 'GET',
    url: `/member/order/consignment/${id}`,
  })
}

/**
 * 获取订单物流
 * @description 仅在订单状态为待收货，待评价，已完成时，可获取物流信息。
 * @param id 订单id
 */
export const getMemberOrderLogisticsByIdAPI = (id: string) => {
  return http<OrderLogisticResult>({
    method: 'GET',
    url: `/member/order/${id}/logistics`,
  })
}

// 确认收货接口
export const putMemberOrderReceiptByIdAPI = (id: string) => {
  return http<OrderResult>({
    method: 'PUT',
    url: `/member/order/${id}/receipt`,
  })
}

// 删除订单的接口
export const delMemberOrderAPI = (data: { ids: string[] }) => {
  return http({
    url: '/member/order',
    method: 'DELETE',
    data,
  })
}

// 获取订单列表的数据
export const getMemberOrderAPI = (data: OrderListParams) => {
  return http<OrderListResult>({
    method: 'GET',
    url: '/member/order',
    data,
  })
}
