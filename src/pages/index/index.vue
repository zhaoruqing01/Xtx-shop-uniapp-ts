<script setup lang="ts">
//导入组件
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { useGuessList } from '@/composables/useGuessList'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home.ts'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
// import PageSkeleton from './components/pageSkeleton.vue'

// 轮播图的数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
// 前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

// 触底加载事件
// 猜你喜欢无限加载 设置为组合式函数,实现函数的复用
const { guessRef, onScrolltolower } = useGuessList()

// 下拉刷新事件
// 请求回来后停止刷新动画
const isTriggered = ref(false)
// 重置"猜你喜欢区域"的数据
const onRefresherrefresh = async () => {
  guessRef.value?.reSetData()
  isTriggered.value = true
  // 重新获取请求,并等待使用promise.all让请求同时加载
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isTriggered.value = false
}

// 定义骨架屏的显示和隐藏
const isLoading = ref(false)
// 加载页面时触发
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})
</script>

<template>
  <!-- 自定义顶部导航栏 -->
  <CustomNavbar></CustomNavbar>
  <!-- 设置除导航栏以外的区域滚动 -->
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    scroll-y
    class="scroll-view"
    @scrolltolower="onScrolltolower"
  >
    <PageSkeleton v-if="isLoading"></PageSkeleton>
    <template v-else>
      <!-- 自定义轮播图区域 -->
      <XtxSwiper :bannerList="bannerList"></XtxSwiper>
      <!-- 分类的面板区域 -->
      <CategoryPanel :categoryList="categoryList"></CategoryPanel>
      <!-- 热门推荐区域 -->
      <HotPanel :hotList="hotList"></HotPanel>
      <!-- 猜你喜欢区域 -->
      <XtxGuess ref="guessRef"></XtxGuess>
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
