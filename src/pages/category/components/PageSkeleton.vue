<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport">
      <view class="search search">
        <view class="input input">
          <text class="icon-search sk-transparent sk-text-14-2857-653 sk-text sk-pseudo sk-pseudo-circle">女靴</text>
        </view>
      </view>
      <view class="categories categories">
        <scroll-view
          scroll-y
          class="primary primary"
        >
          <view class="item active sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-616 sk-text">居家</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-996 sk-text">美食</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-771 sk-text">服饰</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-240 sk-text">母婴</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-839 sk-text">个护</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-85 sk-text">严选</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-530 sk-text">数码</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-700 sk-text">运动</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-570 sk-text">杂项</text>
          </view>
        </scroll-view>
        <scroll-view
          scroll-y
          class="secondary secondary"
        >
          <view
            is="components/XtxSwiper"
            class="banner banner"
          >
            <view class="carousel XtxSwiper--carousel">
              <swiper
                circular
                :interval="3000"
                :current="0"
                :autoplay="false"
              >
                <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px)">
                  <navigator
                    class="navigator XtxSwiper--navigator"
                    hover-class="none"
                  >
                    <image
                      class="image XtxSwiper--image sk-image"
                      mode="aspectFill"
                    ></image>
                  </navigator>
                </swiper-item>
                <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(100%, 0px) translateZ(0px)">
                  <navigator
                    class="navigator XtxSwiper--navigator"
                    hover-class="none"
                  >
                    <image
                      class="image XtxSwiper--image sk-image"
                      mode="aspectFill"
                    ></image>
                  </navigator>
                </swiper-item>
              </swiper>
              <view class="indicator XtxSwiper--indicator">
                <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
              </view>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name sk-transparent sk-text-28-0000-521 sk-text">居家生活用品</text>
              <navigator
                class="more sk-transparent sk-text-30-0000-876 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none"
              >
                全部
              </navigator>
            </view>
            <view class="section section">
              <navigator
                class="goods goods"
                hover-class="none"
              >
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-590 sk-text">钻石陶瓷涂层多用锅18cm 小奶锅</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-200 sk-text">149.00</text>
                </view>
              </navigator>
              <navigator
                class="goods goods"
                hover-class="none"
              >
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-921 sk-text">极光限定 珠光蓝珐琅锅</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-764 sk-text">199.00</text>
                </view>
              </navigator>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name sk-transparent sk-text-28-0000-137 sk-text">收纳</text>
              <navigator
                class="more sk-transparent sk-text-30-0000-86 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none"
              >
                全部
              </navigator>
            </view>
            <view class="section section">
              <navigator
                class="goods goods"
                hover-class="none"
              >
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-98 sk-text">给衣柜减减肥，真空防潮压缩袋</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-472 sk-text">79.00</text>
                </view>
              </navigator>
              <navigator
                class="goods goods"
                hover-class="none"
              >
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-975 sk-text">爆款明星好物，抽屉式透明储物柜</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-748 sk-text">129.00</text>
                </view>
              </navigator>
              <navigator
                class="goods goods"
                hover-class="none"
              >
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-194 sk-text">衣柜省空间神器，棉麻涤·收纳挂袋</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-18 sk-text">55.00</text>
                </view>
              </navigator>
              <navigator
                class="goods goods"
                hover-class="none"
              >
                <image class="image sk-image"></image>
              </navigator>
              <navigator
                class="goods goods"
                hover-class="none"
              >
                <image class="image sk-image"></image>
              </navigator>
              <navigator
                class="goods goods"
                hover-class="none"
              >
                <image class="image sk-image"></image>
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-653 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-616 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-996 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-771 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-240 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-839 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-85 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-530 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-700 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-570 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-28-0000-521 {
  background-image: linear-gradient(transparent 28%, #eeeeee 0%, #eeeeee 72%, transparent 0%) !important;
  background-size: 100% 58.5938rpx;
  position: relative !important;
}
.sk-text-30-0000-876 {
  background-image: linear-gradient(transparent 30%, #eeeeee 0%, #eeeeee 70%, transparent 0%) !important;
  background-size: 100% 58.5938rpx;
  position: relative !important;
}
.sk-text-14-2857-590 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-200 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text-14-2857-921 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}
.sk-text-14-2857-764 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text-28-0000-137 {
  background-image: linear-gradient(transparent 28%, #eeeeee 0%, #eeeeee 72%, transparent 0%) !important;
  background-size: 100% 58.5938rpx;
  position: relative !important;
}
.sk-text-30-0000-86 {
  background-image: linear-gradient(transparent 30%, #eeeeee 0%, #eeeeee 70%, transparent 0%) !important;
  background-size: 100% 58.5938rpx;
  position: relative !important;
}
.sk-text-14-2857-98 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}
.sk-text-14-2857-472 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text-14-2857-975 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}
.sk-text-14-2857-748 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text-14-2857-194 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}
.sk-text-14-2857-18 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 32.8125rpx;
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
