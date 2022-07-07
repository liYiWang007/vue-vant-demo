<template>
  <div class="awesome-swiper">
    <!--    主要的轮播-->
    <swiper class="swiper" ref="mainSwiper" :options="swiperOptions">
      <swiper-slide class="flex-center" v-for="index in 7" :key="index">
        <level-card
          :class="`lv-${index+1}`"
          :level="`${index+1}`"
          :credit="credit"
          :score="score"
          :border-line="(index*100)+1"
        />
        <img class="level-role" :src="require(`../../assets/images/home/TV-${index+1}.png`)">
      </swiper-slide>
      <!--      <div class="swiper-pagination flex" slot="pagination"></div>-->
    </swiper>
    <!--导航轮播-->
    <swiper class="swipe-page" ref="swiperThumbs" :options="pageOptions">
      <swiper-slide v-for="index in 7" :key="index">
        <img :src="require(`../../assets/images/icons/icon-tv${index+1}.png`)" width="40px" height="40px">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from "vue-awesome-swiper";
import LevelCard from './LevelCard.vue'

export default {
  name: 'AwesomeSwiper',
  components: {
    Swiper,
    SwiperSlide,
    LevelCard,
  },
  props: {
    credit: {
      type: Number,
      default: 1
    },
    score: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      swiperOptions: { //轮播主体
        slidesPerView: 2, //设置为偶数会出现遮盖一半的效果
        spaceBetween: 0,
        followFinger: false, //只有当放开slide才会切换
        resistanceRatio: 0, //抵抗率,0时无法拖离边缘。
        centeredSlides: true,//active的slide居中
      },
      pageOptions: { //模拟轮播导航栏
        slidesPerView: 3, //显示三个完整的slide 导航
        spaceBetween: 100,
        resistanceRatio: 0, //禁止拖离边缘。
        centeredSlides: true,//active 的slide居中
        allowTouchMove: false, //禁止触摸滑动
        slideToClickedSlide: true,// 跳转到点击的slide
      },
    }
  },
  mounted() {
    this.$nextTick(() => {//利用controller双向控制
      const swiperWarp = this.$refs.mainSwiper.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperWarp.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperWarp
    })
  }
}
</script>
<style lang="scss">
.awesome-swiper {
  .swiper {
    height: 300px;

    .swiper-slide {
      padding: 0 16px;
      height: 100%;
      text-align: center;
      font-size: 18px;
      transition: 300ms;
      box-sizing: border-box;

      //白色装饰线
      &::before {
        z-index: 0;
        position: absolute;
        left: 0;
        bottom: 0;
        width: calc(40% - 24px);
        height: 2px;
        background: rgba(255, 255, 255, .6);
        content: '';
      }

      &::after {
        z-index: 1;
        position: absolute;
        right: 0;
        bottom: 0;
        width: calc(40% - 24px);
        height: 2px;
        background: rgba(255, 255, 255, .6);
        content: '';
      }

      &:first-child::before {
        display: none;
      }

      &:last-child::after {
        display: none;
      }

      .level-role {
        z-index: 10;
        position: absolute;
        top: -7px;
        right: -40px;
        width: 66%;
        height: auto;
        pointer-events: none;
        -webkit-user-drag: none;
        overflow: hidden;
      }
    }

    .swiper-slide-active,
    .swiper-slide-duplicate-active {
      .level-card {
        height: auto;
      }
    }

  }

  .swipe-page {
    height: 40px;
    margin-top: -20px;

    .swiper-slide {
      height: 40px;
      transition: 300ms;
      opacity: 0.6;
    }

    .swiper-slide-active,
    .swiper-slide-duplicate-active {
      opacity: 1;
    }
  }
  .level-card {
    z-index: 5;
    height: 150px;
    overflow: hidden;
    &.lv-1 {
      color: #88cc24;
      background-image: linear-gradient(to right, #e6efcc, #a5d460);

      .van-progress {
        .van-progress__portion {
          background: #88cc24;
        }
      }
    }

    &.lv-2 {
      color: #55c869;
      background-image: linear-gradient(to right, #d3ecd7, #83dc98);

      .van-progress {
        .van-progress__portion {
          background: #55c869;
        }
      }
    }

    &.lv-3 {
      color: #4ec5bf;
      background-image: linear-gradient(to right, #c6efed, #79dbd9);

      .van-progress {
        .van-progress__portion {
          background: #4ec5bf;
        }
      }
    }

    &.lv-4 {
      color: #6888ff;
      background-image: linear-gradient(to right, #dce1ff, #a2baf9);

      .van-progress {
        .van-progress__portion {
          background: #6888ff;
        }
      }
    }

    &.lv-5 {
      color: #ad6ffe;
      background-image: linear-gradient(to right, #eae3f8, #d3a7ff);

      .van-progress {
        .van-progress__portion {
          background: #ad6ffe;
        }
      }
    }

    &.lv-6 {
      color: #f45f58;
      background-image: linear-gradient(to right, #f8dfc6, #f9ae6c);

      .van-progress {
        .van-progress__portion {
          background: #f45f58;
        }
      }
    }

    &.lv-7 {
      color: #9a2420;
      background-image: linear-gradient(to right, #fad7d3, #f99b91);

      .van-progress {
        .van-progress__portion {
          background: #9a2420;
        }
      }
    }

    &.lv-8 {
      color: #4f5c7c;
      background-image: linear-gradient(to right, #cacbcf, #8d9099);

      .van-progress {
        .van-progress__portion {
          background: #4f5c7c;
        }
      }
    }
  }

}
</style>

