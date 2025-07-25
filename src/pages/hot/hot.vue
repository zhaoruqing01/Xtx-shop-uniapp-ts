// /src/pages/hot/hot.vue
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getHotItemAPI } from '@/services/hot'
import type { HotResultItem } from '@/types/hot'
import type { SubTypeItem } from '@/types/hot'

// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]
// 获取不同的type
const type = ref('')
// 根据不同的type发送不同的请求
const url = ref()
// 获取banner栏
const bannerPicture = ref('')
// 获取activeIndex
const activeIndex = ref(0)
// 获取subTypes数据
const subTypes = ref<SubTypeItem[]>([])
// 定义加载状态
const isFinished = ref(false)

// 根据type的不同发送请求获取数据
const getHotItemData = async () => {
  const res = await getHotItemAPI(url.value, {
    page: import.meta.env.DEV ? 30 : 1,
    pageSize: 10,
  })
  subTypes.value = res.result.subTypes
  bannerPicture.value = res.result.bannerPicture
}
// 页面触底加载事件
const onScrolltolower = async () => {
  const currentTypes = subTypes.value[activeIndex.value]
  if (currentTypes.goodsItems.page < currentTypes.goodsItems.pages) {
    currentTypes.goodsItems.page++
  } else {
    isFinished.value = true
    return uni.showToast({ icon: 'none', title: '没有更多啦~' })
  }
  // 根据不同的activeIndex获取数据
  const res = await getHotItemAPI(url.value, {
    page: currentTypes.goodsItems.page,
    pageSize: currentTypes.goodsItems.pageSize,
    subType: currentTypes.id,
  })
  const currentNewTypes = res.result.subTypes[activeIndex.value].goodsItems.items
  currentTypes.goodsItems.items.push(...currentNewTypes)
  isFinished.value = false
}
onLoad((options) => {
  type.value = options!.type
  // 自定义标题和路径
  const currentTab = hotMap.find((v) => v.type === type.value + '')
  // 动态设置标题
  uni.setNavigationBarTitle({ title: currentTab!.title })
  // 动态url获取数据
  url.value = currentTab?.url
  getHotItemData()
})
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover"> <image :src="bannerPicture"></image></view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        v-for="(item, index) in subTypes"
        :key="item.id"
        class="text"
        :class="{ active: activeIndex === index }"
        @tap="activeIndex = index"
        >{{ item.title }}</text
      >
    </view>
    <!-- 推荐列表 -->
    <scroll-view
      scroll-y
      class="scroll-view"
      v-for="(item, index) in subTypes"
      :key="item.id"
      v-show="activeIndex === index"
      @scrolltolower="onScrolltolower"
    >
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in item.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
        >
          <image class="thumb" :src="goods.picture"></image>
          <view class="name ellipsis">{{ goods.desc }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{ isFinished ? '没有更多啦~' : '正在加载...' }}</view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.scroll-view {
  flex: 1;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
