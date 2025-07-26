<script setup lang="ts">
import { getProfileAPI, changeProfileAPI } from '@/services/member'
import type { Gender, ProfileDetail } from '@/types/member'
import { useMemberStore } from '@/stores/modules/member'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const memberStore = useMemberStore()
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// 调用uni.chooseMedia({})实现点击选择相册图片和拍照功能
const changeAvator = () => {
  const res = uni.chooseMedia({
    count: 1,
    mediaType: ['image'],
    success: async (res) => {
      const file = res.tempFiles[0].tempFilePath
      // 上传图片
      const res2 = await uni.uploadFile({
        url: '/member/profile/avatar',
        name: 'file',
        filePath: file,
      })
      // 由于头像的接口不可用所以,目前只写思路
      /*
        1. 将请求过来的数据赋值到获取的个人信息上
        2. 将头像赋值给pinia,以实现多个页面的同步
          memberStore.profile!.avatar = res.result.avatar
      */
    },
  })
  console.log(res)
}

// 获取个人信息 - 先给profile赋一个初始值,防止异步的值还未到达就在页面渲染,因为昵称处使用了非空断言v-model="profile!.nickname"
const profile = ref({} as ProfileDetail)
const getProfileData = async () => {
  const res = await getProfileAPI()
  console.log(res)
  profile.value = res.result
}

// 更改个人信息
const changeProfileData = async () => {
  const res = await changeProfileAPI({
    nickname: profile.value!.nickname!,
    gender: profile.value?.gender!,
    birthday: profile.value?.birthday!,
    profession: profile.value?.profession!,
    provinceCode: fullLocationCode[0],
    /** 城市编码 */
    cityCode: fullLocationCode[1],
    /** 区/县编码 */
    countyCode: fullLocationCode[2],
  })
  profile.value = res.result
  setTimeout(() => {
    uni.showToast({
      icon: 'none',
      title: '更改成功',
    })
  }, 1000)
  // pinia中同步更改
  // 更新Store昵称
  memberStore.profile!.nickname = res.result.nickname
  uni.switchTab({
    url: '/pages/my/my',
  })
}
// 更改昵称 v-model双向绑定数据
// 更改性别
const onGenderChange: UniHelper.RadioGroupOnChange = (ev) => {
  profile.value!.gender = ev.detail.value as Gender
}
// 更改生日
const onChangeDate: UniHelper.DatePickerOnChange = (ev) => {
  profile.value!.birthday = ev.detail.value
}
let fullLocationCode: [string, string, string] = ['', '', '']
// 更改地址
const onChangeRegion: UniHelper.RegionPickerOnChange = (ev) => {
  console.log(ev)
  fullLocationCode = ev.detail.code!
  profile.value!.fullLocation = ev.detail.value.toString()
}
onLoad(() => {
  getProfileData()
})
</script>

<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <navigator open-type="navigateBack" class="back icon-left" hover-class="none"></navigator>
      <view class="title">个人信息</view>
    </view>
    <!-- 头像 -->
    <view class="avatar" @tap="changeAvator">
      <view class="avatar-content">
        <image class="image" :src="profile?.avatar" mode="aspectFill" />
        <text class="text">点击修改头像</text>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <view class="form-content">
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">账号名</text>
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <input class="input" type="text" placeholder="请填写昵称" v-model="profile!.nickname" />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="onGenderChange">
            <label class="radio">
              <radio value="男" color="#27ba9b" :checked="profile?.gender === '男'" />
              男
            </label>
            <label class="radio">
              <radio value="女" color="#27ba9b" :checked="profile?.gender === '女'" />
              女
            </label>
          </radio-group>
        </view>
        <view class="form-item">
          <text class="label">生日</text>
          <picker
            class="picker"
            mode="date"
            start="1900-01-01"
            :end="new Date()"
            :value="profile?.birthday"
            @change="onChangeDate"
          >
            <view v-if="profile?.birthday">{{ profile?.birthday }}</view>
            <view class="placeholder" v-else>请选择日期</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">城市</text>
          <picker
            class="picker"
            :value="profile?.fullLocation?.split(' ')"
            mode="region"
            @change="onChangeRegion"
          >
            <view v-if="profile?.fullLocation">{{ profile.fullLocation }}</view>
            <view class="placeholder" v-else>请选择城市</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">职业</text>
          <input class="input" type="text" placeholder="请填写职业" value="" />
        </view>
      </view>
      <!-- 提交按钮 -->
      <button class="form-button" @tap="changeProfileData">保 存</button>
    </view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 420rpx;
  background-repeat: no-repeat;
}

// 导航栏
.navbar {
  position: relative;

  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 头像
.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}

// 表单
.form {
  background-color: #f4f4f4;

  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }

    .label {
      width: 180rpx;
      color: #333;
    }

    .account {
      color: #666;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .radio {
      margin-right: 20rpx;
    }

    .picker {
      flex: 1;
    }
    .placeholder {
      color: #808080;
    }
  }

  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #27ba9b;
  }
}
</style>
