<script setup lang="ts">
import { ref } from 'vue'
import { addAddressAPI, getAddressDetailAPI, updateAddressAPI } from '@/services/address'
import { onLoad } from '@dcloudio/uni-app'

// 表单数据
const form = ref({
  receiver: '', // 收货人
  contact: '', // 联系方式
  fullLocation: '', // 省市区(前端展示)
  provinceCode: '', // 省份编码(后端参数)
  cityCode: '', // 城市编码(后端参数)
  countyCode: '', // 区/县编码(后端参数)
  address: '', // 详细地址
  isDefault: 0, // 默认地址，1为是，0为否
})

// v-model双向绑绑定  收货人 手机号码 详细地址
// 获取地区
const onChangeRegion: UniHelper.RegionPickerOnChange = (ev) => {
  form.value.fullLocation = ev.detail.value.toString()
  // 地区代码
  const [provinceCode, cityCode, countyCode] = ev.detail.code!
  // 使用对象的assign方法合并数据
  Object.assign(form.value, { provinceCode, cityCode, countyCode })
}

// 获取是否为默认地址 使用三元表达式判断为1或则0
const onSwitchState: UniHelper.SwitchOnChange = (ev) => {
  form.value.isDefault = ev.detail.value ? 1 : 0
}
// 调用新增地址的接口
const addAddressData = async () => {
  await addAddressAPI(form.value)
}

// 修改地址
// 接收id
const updateId = ref()
// 获取详细地址
const getaddressDetailData = async () => {
  const res = await getAddressDetailAPI(updateId.value)
  // 使用assign合并对象
  Object.assign(form.value, res.result)
}
// 调用修改接口
const updateAddressData = async () => {
  const res = await updateAddressAPI(updateId.value, form.value)
  console.log(res)
}
onLoad((options) => {
  updateId.value = options!.id
  // 修改navBar标题
  uni.setNavigationBarTitle({ title: updateId.value ? '修改地址' : '新建地址' })
  getaddressDetailData()
})

// 表单验证
const formRef = ref()
const rules = {
  receiver: {
    rules: [
      { required: true, errorMessage: '收货人不能为空' },
      { minLength: 2, maxLength: 8, errorMessage: '收货人名称填写错误' },
    ],
  },
  contact: {
    rules: [
      { required: true, errorMessage: '手机号码不能为空' },
      { pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/, errorMessage: '手机号码填写错误' },
    ],
  },
  fullLocation: {
    rules: [{ required: true, errorMessage: '请选择所在地区' }],
  },
  address: {
    rules: [{ required: true, errorMessage: '请选择详细地址' }],
  },
}
// 点击按钮发送请求
const onSubmit = async () => {
  try {
    await formRef.value?.validate?.()
    if (updateId.value) {
      updateAddressData()
    } else {
      addAddressData()
    }
    uni.navigateBack()
    setTimeout(() => {
      uni.showToast({ icon: 'none', title: updateId.value ? '修改成功' : '新增成功' })
    }, 1000)
  } catch (error) {
    uni.showToast({ icon: 'error', title: '不能为空' })
  }
}
</script>

<template>
  <view class="content">
    <uni-forms :model="form" :rules="rules" ref="formRef">
      <!-- 表单内容 -->
      <uni-forms-item class="form-item" name="receiver">
        <text class="label">收货人</text>
        <input class="input" placeholder="请填写收货人姓名" v-model="form.receiver" />
      </uni-forms-item>
      <uni-forms-item class="form-item" name="contact">
        <text class="label">手机号码</text>
        <input class="input" placeholder="请填写收货人手机号码" v-model="form.contact" />
      </uni-forms-item>
      <uni-forms-item class="form-item" name="fullLocation">
        <text class="label">所在地区</text>
        <picker
          class="picker"
          mode="region"
          :value="form.fullLocation.split(' ')"
          @change="onChangeRegion"
        >
          <view v-if="form.fullLocation">{{ form.fullLocation }}</view>
          <view v-else class="placeholder">请选择省/市/区(县)</view>
        </picker>
      </uni-forms-item>
      <uni-forms-item class="form-item" name="address">
        <text class="label">详细地址</text>
        <input class="input" placeholder="街道、楼牌号等信息" v-model="form.address" />
      </uni-forms-item>
      <uni-forms-item class="form-item">
        <label class="label">设为默认地址</label>
        <switch
          class="switch"
          color="#27ba9b"
          :checked="form.isDefault === 1"
          @change="onSwitchState"
        />
      </uni-forms-item>
    </uni-forms>
  </view>
  <!-- 提交按钮 -->
  <button class="button" @tap="onSubmit">保存并使用</button>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.content {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .form-item,
  .uni-forms-item {
    display: flex;
    align-items: center;
    min-height: 96rpx;
    padding: 25rpx 10rpx 40rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;
    margin-bottom: 0;

    // 调整 uni-forms 样式
    .uni-forms-item__content {
      display: flex;
    }

    .uni-forms-item__error {
      margin-left: 200rpx;
    }

    &:last-child {
      border: none;
    }

    .label {
      width: 200rpx;
      color: #333;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .switch {
      position: absolute;
      right: -20rpx;
      transform: scale(0.8);
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }
}

.button {
  height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
