<script setup lang="ts">
//导入组件
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home.ts'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import XtxSwiper from '@/components/XtxSwiper.vue'

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

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})
</script>

<template>
  <!-- 自定义顶部导航栏 -->
  <CustomNavbar></CustomNavbar>
  <!-- 自定义轮播图区域 -->
  <XtxSwiper :bannerList="bannerList"></XtxSwiper>
  <!-- 分类的面板区域 -->
  <CategoryPanel :categoryList="categoryList"></CategoryPanel>
  <!-- 热门推荐区域 -->
  <HotPanel :hotList="hotList"></HotPanel>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
}
</style>
