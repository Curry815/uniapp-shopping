<template name="skeleton">
  <view class="sk-container">
    <view
      class="navbar navbar"
      style="padding-top: 44px"
    >
      <view class="wrap wrap">
        <navigator
          class="back icon-home sk-pseudo sk-pseudo-circle"
          open-type="switchTab"
        ></navigator>
        <view class="title sk-transparent sk-text-14-2857-576 sk-text">订单详情</view>
      </view>
    </view>
    <scroll-view
      enable-back-to-top
      scroll-y
      class="viewport viewport"
      id="scroller"
    >
      <view
        class="overview sk-image"
        style="padding-top: 64px"
      >
        <view class="status icon-clock sk-transparent sk-text-0-0000-125 sk-text sk-pseudo sk-pseudo-circle">等待付款</view>
        <view class="tips sk-transparent">
          <text class="money sk-transparent sk-text-0-0000-806 sk-text">应付金额: ¥ 99.00</text>
          <text class="time sk-transparent sk-text-0-0000-312 sk-text">支付剩余</text>
          00 时 29 分 59 秒
        </view>
        <view
          class="button sk-transparent sk-text-28-1250-820 sk-text"
          style="background-position-x: 50%"
        >
          去支付
        </view>
      </view>
      <view class="shipment shipment">
        <view class="item sk-image">
          <view class="message sk-transparent sk-text-14-2857-291 sk-text">您已在广州市天河区黑马程序员完成取件，感谢使用菜鸟驿站，期待再次为您服务。</view>
          <view class="date sk-transparent sk-text-14-2857-329 sk-text">2023-04-14 13:14:20</view>
        </view>
        <view class="locate sk-image">
          <view class="user sk-transparent sk-text-14-2857-320 sk-text">张三 13333333333</view>
          <view class="address sk-transparent sk-text-14-2857-562 sk-text">广东省 广州市 天河区 黑马程序员</view>
        </view>
      </view>
      <view class="goods goods">
        <view class="item item">
          <navigator
            class="navigator navigator"
            hover-class="none"
          >
            <image class="cover sk-image"></image>
            <view class="meta meta">
              <view class="name ellipsis sk-transparent sk-text-14-2857-533 sk-text">ins风小碎花泡泡袖衬110-160cm</view>
              <view class="type sk-transparent sk-text-22-2222-579 sk-text">藏青小花， 130</view>
              <view class="price price">
                <view class="actual actual">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="sk-transparent sk-text-14-2857-226 sk-text">99.00</text>
                </view>
              </view>
              <view class="quantity sk-transparent sk-opacity">x1</view>
            </view>
          </navigator>
          <navigator
            class="navigator navigator"
            hover-class="none"
          >
            <image class="cover sk-image"></image>
            <view class="meta meta">
              <view class="name ellipsis sk-transparent sk-text-14-2857-220 sk-text">ins风小碎花泡泡袖衬110-160cm</view>
              <view class="type sk-transparent sk-text-22-2222-679 sk-text">藏青小花， 130</view>
              <view class="price price">
                <view class="actual actual">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="sk-transparent sk-text-14-2857-665 sk-text">99.00</text>
                </view>
              </view>
              <view class="quantity sk-transparent sk-opacity">x1</view>
            </view>
          </navigator>
          <view class="action action">
            <view
              class="button primary sk-transparent sk-text-28-3333-546 sk-text"
              style="background-position-x: 50%"
            >
              申请售后
            </view>
            <navigator
              class="button sk-transparent sk-text-28-3333-780 sk-text"
              style="background-position-x: 50%"
            >
              去评价
            </navigator>
          </view>
        </view>
        <view class="total total">
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-443 sk-text">商品总价:</view>
            <view class="symbol sk-transparent sk-text-0-0000-734 sk-text sk-pseudo sk-pseudo-circle">99.00</view>
          </view>
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-276 sk-text">运费:</view>
            <view class="symbol sk-transparent sk-text-0-0000-912 sk-text sk-pseudo sk-pseudo-circle">10.00</view>
          </view>
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-77 sk-text">应付金额:</view>
            <view class="symbol primary sk-transparent sk-text-0-0000-595 sk-text sk-pseudo sk-pseudo-circle">109.00</view>
          </view>
        </view>
      </view>
      <view class="detail detail">
        <view class="title sk-transparent sk-text-0-0000-592 sk-text">订单信息</view>
        <view class="row row">
          <view class="item sk-transparent">
            订单编号: 1842908227180695554
            <text class="copy sk-transparent sk-text-0-0000-549 sk-text">复制</text>
          </view>
          <view class="item sk-transparent sk-text-0-0000-47 sk-text">下单时间: 2023-04-14 13:14:20</view>
        </view>
      </view>
      <view
        class="toolbar toolbar"
        style="padding-bottom: 34px"
      >
        <view class="button primary sk-transparent sk-text-14-2857-265 sk-text">去支付</view>
        <view class="button sk-transparent sk-text-14-2857-757 sk-text">取消订单</view>
      </view>
    </scroll-view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-576 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-0-0000-125 {
  background-image: linear-gradient(transparent 0%, #eeeeee 0%, #eeeeee 100%, transparent 0%) !important;
  background-size: 100% 36rpx;
  position: relative !important;
}
.sk-text-0-0000-806 {
  background-image: linear-gradient(transparent 0%, #eeeeee 0%, #eeeeee 100%, transparent 0%) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text-0-0000-312 {
  background-image: linear-gradient(transparent 0%, #eeeeee 0%, #eeeeee 100%, transparent 0%) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text-28-1250-820 {
  background-image: linear-gradient(transparent 28.125%, #eeeeee 0%, #eeeeee 71.875%, transparent 0%) !important;
  background-size: 100% 64rpx;
  position: relative !important;
}
.sk-text-14-2857-291 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-329 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-320 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-562 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-533 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-22-2222-579 {
  background-image: linear-gradient(transparent 22.2222%, #eeeeee 0%, #eeeeee 77.7778%, transparent 0%) !important;
  background-size: 100% 43.2rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-226 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-220 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-22-2222-679 {
  background-image: linear-gradient(transparent 22.2222%, #eeeeee 0%, #eeeeee 77.7778%, transparent 0%) !important;
  background-size: 100% 43.2rpx;
  position: relative !important;
}
.sk-text-14-2857-665 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-28-3333-546 {
  background-image: linear-gradient(transparent 28.3333%, #eeeeee 0%, #eeeeee 71.6667%, transparent 0%) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}
.sk-text-28-3333-780 {
  background-image: linear-gradient(transparent 28.3333%, #eeeeee 0%, #eeeeee 71.6667%, transparent 0%) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}
.sk-text-0-0000-443 {
  background-image: linear-gradient(transparent 0%, #eeeeee 0%, #eeeeee 100%, transparent 0%) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-734 {
  background-image: linear-gradient(transparent 0%, #eeeeee 0%, #eeeeee 100%, transparent 0%) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-276 {
  background-image: linear-gradient(transparent 0%, #eeeeee 0%, #eeeeee 100%, transparent 0%) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-912 {
  background-image: linear-gradient(transparent 0%, #eeeeee 0%, #eeeeee 100%, transparent 0%) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-77 {
  background-image: linear-gradient(transparent 0%, #eeeeee 0%, #eeeeee 100%, transparent 0%) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-595 {
  background-image: linear-gradient(transparent 0%, #eeeeee 0%, #eeeeee 100%, transparent 0%) !important;
  background-size: 100% 36rpx;
  position: relative !important;
}
.sk-text-0-0000-592 {
  background-image: linear-gradient(transparent 0%, #eeeeee 0%, #eeeeee 100%, transparent 0%) !important;
  background-size: 100% 30rpx;
  position: relative !important;
}
.sk-text-0-0000-549 {
  background-image: linear-gradient(transparent 0%, #eeeeee 0%, #eeeeee 100%, transparent 0%) !important;
  background-size: 100% 20rpx;
  position: relative !important;
}
.sk-text-0-0000-47 {
  background-image: linear-gradient(transparent 0%, #eeeeee 0%, #eeeeee 100%, transparent 0%) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-14-2857-265 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-757 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
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
