<template name="skeleton">
  <view is="components/XtxSwiper">
    <view class="carousel XtxSwiper--carousel">
      <swiper
        :circular="true"
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
  <view is="pages/index/components/CategoryPanel">
    <view class="category CategoryPanel--category">
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-493 sk-text">居家</text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-895 sk-text">锦鲤</text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-927 sk-text">服饰</text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-162 sk-text">母婴</text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-734 sk-text">个护</text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-661 sk-text">严选</text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-66 sk-text">数码</text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-119 sk-text">运动</text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-261 sk-text">杂项</text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-12 sk-text">品牌</text>
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/HotPanel">
    <view class="panel HotPanel--panel hot HotPanel--hot">
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-66 sk-text">特惠推荐</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-163 sk-text">精选全攻略</text>
        </view>
        <navigator
          class="cards HotPanel--cards"
          hover-class="none"
        >
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-291 sk-text">爆款推荐</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-106 sk-text">最受欢迎</text>
        </view>
        <navigator
          class="cards HotPanel--cards"
          hover-class="none"
        >
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-596 sk-text">一站买全</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-412 sk-text">精心优选</text>
        </view>
        <navigator
          class="cards HotPanel--cards"
          hover-class="none"
        >
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-468 sk-text">新鲜好物</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-518 sk-text">生活加分项</text>
        </view>
        <navigator
          class="cards HotPanel--cards"
          hover-class="none"
        >
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
        </navigator>
      </view>
    </view>
  </view>
  <view
    is="components/XtxGuess"
    class="r r"
  >
    <view class="caption XtxGuess--caption"></view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-811 {
  background-image: linear-gradient(transparent 3.5714%, #eeeeee 0%, #eeeeee 96.4286%, transparent 0%) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-746 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-508 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-880 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-362 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-255 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-189 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-712 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-290 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-754 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-677 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-848 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-490 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-452 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-234 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-533 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-406 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-643 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-172 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-71 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
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
