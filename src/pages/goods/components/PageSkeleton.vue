<template name="skeleton">
  <view class="sk-container">
    <scroll-view
      scroll-y
      class="viewport viewport"
      enable-back-to-top
    >
      <view class="goods goods">
        <view class="preview preview">
          <swiper
            circular
            :current="0"
            :autoplay="false"
          >
            <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px)">
              <image
                mode="aspectFill"
                class="sk-image"
              ></image>
            </swiper-item>
          </swiper>
          <view class="indicator indicator">
            <text class="current sk-transparent sk-opacity">1</text>
            <text class="split sk-transparent sk-opacity">/</text>
            <text class="total sk-transparent sk-opacity">4</text>
          </view>
        </view>
        <view class="meta meta">
          <view class="price price">
            <text class="symbol sk-transparent sk-opacity">¥</text>
            <text class="number sk-transparent sk-text-14-2857-624 sk-text">29.90</text>
          </view>
          <view class="name ellipsis sk-transparent sk-text-14-2857-109 sk-text">云珍·轻软旅行长绒棉方巾</view>
          <view class="desc sk-transparent sk-text-0-0000-121 sk-text">轻巧无捻小方巾，旅行便携</view>
        </view>
        <view class="action action">
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-790 sk-text">选择</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-996 sk-text">请选择商品规格</text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-689 sk-text">送至</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-845 sk-text">请选择收获地址</text>
          </view>
        </view>
      </view>
    </scroll-view>
    <view
      class="toolbar toolbar"
      style="padding-bottom: 0px"
    >
      <view class="icons icons">
        <button class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle">
          <text class="icon-heart sk-pseudo sk-pseudo-circle"></text>
          收藏
        </button>
        <button
          class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle"
          open-type="contact"
        >
          <text class="icon-handset sk-pseudo sk-pseudo-circle"></text>
          客服
        </button>
        <navigator
          class="icons-button sk-transparent"
          open-type="switchTab"
        >
          <text class="icon-cart sk-pseudo sk-pseudo-circle"></text>
          购物车
        </navigator>
      </view>
      <view class="buttons buttons">
        <view
          class="addcart sk-transparent sk-text-31-6667-916 sk-text"
          style="background-position-x: 50%"
        >
          加入购物车
        </view>
        <view
          class="buynow sk-transparent sk-text-31-6667-748 sk-text"
          style="background-position-x: 50%"
        >
          立即购买
        </view>
      </view>
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-624 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 75.4687rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-109 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 42.6563rpx;
  position: relative !important;
}
.sk-text-0-0000-121 {
  background-image: linear-gradient(transparent 0%, #eeeeee 0%, #eeeeee 100%, transparent 0%) !important;
  background-size: 100% 23.4375rpx;
  position: relative !important;
}
.sk-text-14-2857-790 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-996 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-689 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-845 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-31-6667-916 {
  background-image: linear-gradient(transparent 31.6667%, #eeeeee 0%, #eeeeee 68.3333%, transparent 0%) !important;
  background-size: 100% 70.3125rpx;
  position: relative !important;
}
.sk-text-31-6667-748 {
  background-image: linear-gradient(transparent 31.6667%, #eeeeee 0%, #eeeeee 68.3333%, transparent 0%) !important;
  background-size: 100% 70.3125rpx;
  position: relative !important;
}
.sk-button {
  color: #efefef !important;
  background: #efefef !important;
  border: none !important;
  box-shadow: none !important;
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
