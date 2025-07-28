<template name="skeleton">
  <scroll-view
    :scroll-y="true"
    class="scroll-view CartMain--scroll-view"
    :enable-back-to-top="true"
  >
    <view class="cart-list CartMain--cart-list">
      <view class="tips CartMain--tips">
        <text class="label CartMain--label sk-transparent sk-text-0-0000-562 sk-text">满减</text>
        <text class="desc CartMain--desc sk-transparent sk-text-0-0000-376 sk-text"
          >满1件, 即可享受9折优惠</text
        >
      </view>
      <view>
        <view class="cart-swipe CartMain--cart-swipe">
          <view class="goods CartMain--goods">
            <text class="checkbox CartMain--checkbox sk-pseudo sk-pseudo-circle"></text>
            <navigator class="navigator CartMain--navigator" hover-class="none">
              <image class="picture CartMain--picture sk-image" mode="aspectFill"></image>
              <view class="meta CartMain--meta">
                <view
                  class="name CartMain--name ellipsis CartMain--ellipsis sk-transparent sk-text-14-2857-656 sk-text"
                  >拼单神器，平台智造双子超性能电池</view
                >
                <view
                  class="attrsText CartMain--attrsText ellipsis CartMain--ellipsis sk-transparent sk-text-22-2222-433 sk-text"
                  >黑白， 5号电池5套装（共40粒）</view
                >
                <view
                  class="price CartMain--price sk-transparent sk-text-0-0000-598 sk-text sk-pseudo sk-pseudo-circle"
                  >45.00</view
                >
              </view>
            </navigator>
            <view class="count CartMain--count">
              <view is="components/vk-data-input-number-box/vk-data-input-number-box">
                <view
                  class="vk-data-input-number-box box--vk-data-input-number-box data-v-3517706a box--data-v-3517706a"
                >
                  <view
                    class="u-icon-minus box--u-icon-minus data-v-3517706a box--data-v-3517706a u-icon-disabled box--u-icon-disabled"
                    style="
                      background: #ffffff;
                      height: 25px;
                      color: #323233;
                      font-size: 13px;
                      min-height: 1.4em;
                    "
                  >
                    <view
                      class="num-btn box--num-btn data-v-3517706a box--data-v-3517706a sk-transparent sk-text-14-0000-61 sk-text"
                      style="font-size: 18px"
                      >－</view
                    >
                  </view>
                  <view
                    class="u-number-input box--u-number-input data-v-3517706a box--data-v-3517706a sk-image"
                    style="
                      color: #323233;
                      font-size: 13px;
                      background: #ffffff;
                      height: 25px;
                      width: 40px;
                    "
                    type="number"
                    value="1"
                  ></view>
                  <view
                    class="u-icon-plus box--u-icon-plus data-v-3517706a box--data-v-3517706a"
                    style="
                      background: #ffffff;
                      height: 25px;
                      color: #323233;
                      font-size: 13px;
                      min-height: 1.4em;
                    "
                  >
                    <view
                      class="num-btn box--num-btn data-v-3517706a box--data-v-3517706a sk-transparent sk-text-14-0000-452 sk-text"
                      style="font-size: 18px"
                      >＋</view
                    >
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="cart-swipe CartMain--cart-swipe">
          <view class="goods CartMain--goods">
            <text class="checkbox CartMain--checkbox sk-pseudo sk-pseudo-circle"></text>
            <navigator class="navigator CartMain--navigator" hover-class="none">
              <image class="picture CartMain--picture sk-image" mode="aspectFill"></image>
              <view class="meta CartMain--meta">
                <view
                  class="name CartMain--name ellipsis CartMain--ellipsis sk-transparent sk-text-14-2857-144 sk-text"
                  >平台有道口袋打印机GT1</view
                >
                <view
                  class="attrsText CartMain--attrsText ellipsis CartMain--ellipsis sk-transparent sk-text-22-2222-286 sk-text"
                  >官方彩色热敏纸3卷装</view
                >
                <view
                  class="price CartMain--price sk-transparent sk-text-0-0000-771 sk-text sk-pseudo sk-pseudo-circle"
                  >19.90</view
                >
              </view>
            </navigator>
            <view class="count CartMain--count">
              <view is="components/vk-data-input-number-box/vk-data-input-number-box">
                <view
                  class="vk-data-input-number-box box--vk-data-input-number-box data-v-3517706a box--data-v-3517706a"
                >
                  <view
                    class="u-icon-minus box--u-icon-minus data-v-3517706a box--data-v-3517706a u-icon-disabled box--u-icon-disabled"
                    style="
                      background: #ffffff;
                      height: 25px;
                      color: #323233;
                      font-size: 13px;
                      min-height: 1.4em;
                    "
                  >
                    <view
                      class="num-btn box--num-btn data-v-3517706a box--data-v-3517706a sk-transparent sk-text-14-0000-198 sk-text"
                      style="font-size: 18px"
                      >－</view
                    >
                  </view>
                  <view
                    class="u-number-input box--u-number-input data-v-3517706a box--data-v-3517706a sk-image"
                    style="
                      color: #323233;
                      font-size: 13px;
                      background: #ffffff;
                      height: 25px;
                      width: 40px;
                    "
                    type="number"
                    value="1"
                  ></view>
                  <view
                    class="u-icon-plus box--u-icon-plus data-v-3517706a box--data-v-3517706a"
                    style="
                      background: #ffffff;
                      height: 25px;
                      color: #323233;
                      font-size: 13px;
                      min-height: 1.4em;
                    "
                  >
                    <view
                      class="num-btn box--num-btn data-v-3517706a box--data-v-3517706a sk-transparent sk-text-14-0000-871 sk-text"
                      style="font-size: 18px"
                      >＋</view
                    >
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="cart-swipe CartMain--cart-swipe">
          <view class="goods CartMain--goods">
            <text class="checkbox CartMain--checkbox sk-pseudo sk-pseudo-circle"></text>
            <navigator class="navigator CartMain--navigator" hover-class="none">
              <image class="picture CartMain--picture sk-image" mode="aspectFill"></image>
              <view class="meta CartMain--meta">
                <view
                  class="name CartMain--name ellipsis CartMain--ellipsis sk-transparent sk-text-14-2857-20 sk-text"
                  >平台有道口袋打印机GT1</view
                >
                <view
                  class="attrsText CartMain--attrsText ellipsis CartMain--ellipsis sk-transparent sk-text-22-2222-997 sk-text"
                  >官方热敏纸3卷装</view
                >
                <view
                  class="price CartMain--price sk-transparent sk-text-0-0000-652 sk-text sk-pseudo sk-pseudo-circle"
                  >16.90</view
                >
              </view>
            </navigator>
            <view class="count CartMain--count">
              <view is="components/vk-data-input-number-box/vk-data-input-number-box">
                <view
                  class="vk-data-input-number-box box--vk-data-input-number-box data-v-3517706a box--data-v-3517706a"
                >
                  <view
                    class="u-icon-minus box--u-icon-minus data-v-3517706a box--data-v-3517706a u-icon-disabled box--u-icon-disabled"
                    style="
                      background: #ffffff;
                      height: 25px;
                      color: #323233;
                      font-size: 13px;
                      min-height: 1.4em;
                    "
                  >
                    <view
                      class="num-btn box--num-btn data-v-3517706a box--data-v-3517706a sk-transparent sk-text-14-0000-404 sk-text"
                      style="font-size: 18px"
                      >－</view
                    >
                  </view>
                  <view
                    class="u-number-input box--u-number-input data-v-3517706a box--data-v-3517706a sk-image"
                    style="
                      color: #323233;
                      font-size: 13px;
                      background: #ffffff;
                      height: 25px;
                      width: 40px;
                    "
                    type="number"
                    value="1"
                  ></view>
                  <view
                    class="u-icon-plus box--u-icon-plus data-v-3517706a box--data-v-3517706a"
                    style="
                      background: #ffffff;
                      height: 25px;
                      color: #323233;
                      font-size: 13px;
                      min-height: 1.4em;
                    "
                  >
                    <view
                      class="num-btn box--num-btn data-v-3517706a box--data-v-3517706a sk-transparent sk-text-14-0000-6 sk-text"
                      style="font-size: 18px"
                      >＋</view
                    >
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="cart-swipe CartMain--cart-swipe">
          <view class="goods CartMain--goods">
            <text class="checkbox CartMain--checkbox sk-pseudo sk-pseudo-circle"></text>
            <navigator class="navigator CartMain--navigator" hover-class="none">
              <image class="picture CartMain--picture sk-image" mode="aspectFill"></image>
              <view class="meta CartMain--meta">
                <view
                  class="name CartMain--name ellipsis CartMain--ellipsis sk-transparent sk-text-14-2857-826 sk-text"
                  >平台有道口袋打印机GT1</view
                >
                <view
                  class="attrsText CartMain--attrsText ellipsis CartMain--ellipsis sk-transparent sk-text-22-2222-53 sk-text"
                  >官方不干胶热敏纸3卷装</view
                >
                <view
                  class="price CartMain--price sk-transparent sk-text-0-0000-94 sk-text sk-pseudo sk-pseudo-circle"
                  >19.90</view
                >
              </view>
            </navigator>
            <view class="count CartMain--count">
              <view is="components/vk-data-input-number-box/vk-data-input-number-box">
                <view
                  class="vk-data-input-number-box box--vk-data-input-number-box data-v-3517706a box--data-v-3517706a"
                >
                  <view
                    class="u-icon-minus box--u-icon-minus data-v-3517706a box--data-v-3517706a u-icon-disabled box--u-icon-disabled"
                    style="
                      background: #ffffff;
                      height: 25px;
                      color: #323233;
                      font-size: 13px;
                      min-height: 1.4em;
                    "
                  >
                    <view
                      class="num-btn box--num-btn data-v-3517706a box--data-v-3517706a sk-transparent sk-text-14-0000-238 sk-text"
                      style="font-size: 18px"
                      >－</view
                    >
                  </view>
                  <view
                    class="u-number-input box--u-number-input data-v-3517706a box--data-v-3517706a sk-image"
                    style="
                      color: #323233;
                      font-size: 13px;
                      background: #ffffff;
                      height: 25px;
                      width: 40px;
                    "
                    type="number"
                    value="1"
                  ></view>
                  <view
                    class="u-icon-plus box--u-icon-plus data-v-3517706a box--data-v-3517706a"
                    style="
                      background: #ffffff;
                      height: 25px;
                      color: #323233;
                      font-size: 13px;
                      min-height: 1.4em;
                    "
                  >
                    <view
                      class="num-btn box--num-btn data-v-3517706a box--data-v-3517706a sk-transparent sk-text-14-0000-568 sk-text"
                      style="font-size: 18px"
                      >＋</view
                    >
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="cart-swipe CartMain--cart-swipe">
          <view class="goods CartMain--goods">
            <text class="checkbox CartMain--checkbox sk-pseudo sk-pseudo-circle"></text>
            <navigator class="navigator CartMain--navigator" hover-class="none">
              <image class="picture CartMain--picture sk-image" mode="aspectFill"></image>
              <view class="meta CartMain--meta">
                <view
                  class="name CartMain--name ellipsis CartMain--ellipsis sk-transparent sk-text-14-2857-982 sk-text"
                  >平台智造零感蓝牙耳机</view
                >
              </view>
            </navigator>
          </view>
        </view>
      </view>
    </view>
    <view class="toolbar CartMain--toolbar">
      <text
        class="all CartMain--all sk-transparent sk-text-14-2857-847 sk-text sk-pseudo sk-pseudo-circle"
        >全选</text
      >
      <text class="text CartMain--text sk-transparent sk-text-14-2857-767 sk-text">合计:</text>
      <text
        class="amount CartMain--amount sk-transparent sk-text-14-2857-992 sk-text sk-pseudo sk-pseudo-circle"
        >0.00</text
      >
      <view class="button-grounp CartMain--button-grounp">
        <view
          class="button CartMain--button payment-button CartMain--payment-button disabled CartMain--disabled sk-transparent sk-text-31-9444-638 sk-text"
          style="background-position-x: 50%"
        >
          去结算(0)
        </view>
      </view>
    </view>
  </scroll-view>
</template>
<style lang="scss">
.sk-transparent {
  color: transparent !important;
}
.sk-text-0-0000-562 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 24rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-0-0000-376 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-14-2857-656 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-22-2222-433 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 43.2rpx;
  position: relative !important;
}
.sk-text-0-0000-598 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-14-0000-61 {
  background-image: linear-gradient(
    transparent 14%,
    #eeeeee 0%,
    #eeeeee 86%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}
.sk-text-14-0000-452 {
  background-image: linear-gradient(
    transparent 14%,
    #eeeeee 0%,
    #eeeeee 86%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}
.sk-text-14-2857-144 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-22-2222-286 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 43.2rpx;
  position: relative !important;
}
.sk-text-0-0000-771 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-14-0000-198 {
  background-image: linear-gradient(
    transparent 14%,
    #eeeeee 0%,
    #eeeeee 86%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}
.sk-text-14-0000-871 {
  background-image: linear-gradient(
    transparent 14%,
    #eeeeee 0%,
    #eeeeee 86%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}
.sk-text-14-2857-20 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-22-2222-997 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 43.2rpx;
  position: relative !important;
}
.sk-text-0-0000-652 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-14-0000-404 {
  background-image: linear-gradient(
    transparent 14%,
    #eeeeee 0%,
    #eeeeee 86%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}
.sk-text-14-0000-6 {
  background-image: linear-gradient(
    transparent 14%,
    #eeeeee 0%,
    #eeeeee 86%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}
.sk-text-14-2857-826 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-22-2222-53 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 43.2rpx;
  position: relative !important;
}
.sk-text-0-0000-94 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-14-0000-238 {
  background-image: linear-gradient(
    transparent 14%,
    #eeeeee 0%,
    #eeeeee 86%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}
.sk-text-14-0000-568 {
  background-image: linear-gradient(
    transparent 14%,
    #eeeeee 0%,
    #eeeeee 86%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}
.sk-text-14-2857-982 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-847 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-767 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-992 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 56rpx;
  position: relative !important;
}
.sk-text-31-9444-638 {
  background-image: linear-gradient(
    transparent 31.9444%,
    #eeeeee 0%,
    #eeeeee 68.0556%,
    transparent 0%
  ) !important;
  background-size: 100% 72rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
