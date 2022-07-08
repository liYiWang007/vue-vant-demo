<template>
  <div class="awesome-swiper">
    <!-- 轮播主体-->
    <swiper
      class="swiper"
      ref="mainSwiper"
      :options="swiperOptions"
    >
      <swiper-slide
        :initial-slide="8"
        v-for="index in 8"
        :key="`slide-${index}`"
      >
        <van-tag class="unlock-tag" round v-if="level<index">
          <van-icon name="lock"/>
          待解锁
        </van-tag>
        <!--角色图-->
        <img
          :class="['role-img',`role-img-${index}`]"
          :src="require(`../../assets/images/home/TV-${index}.png`)"
        >
        <level-card
          :class="`lv-${index}`"
          :level="`${index}`"
          :credit="credit"
          :score="score"
          :cur-lv="level==index"
          :border-line="(index*100)+1"
        />
      </swiper-slide>

    </swiper>
    <!--导航轮播-->
    <swiper
      class="swipe-page flex"
      ref="swiperThumbs"
      :options="pageOptions"
    >
      <swiper-slide class="flex-center" v-for="index in 8" :key="`icon-${index}`"><img
        :src="require(`../../assets/images/icons/icon-tv${index}.png`)" width="40px" height="40px"></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import LevelCard from './LevelCard.vue'

export default {
  name: 'AwesomeSwiper',
  components: {
    Swiper,
    SwiperSlide,
    LevelCard
  },
  props: {
    credit: {
      type: Number,
      default: 1
    },
    score: {
      type: Number,
      default: 0
    },
    level: Number
  },
  data() {
    let self = this
    return {
      test: 1,
      activeTv: 1,
      swiperOptions: {//轮播主体
        observer: true,
        observeParents: true,
        slidesPerView: 'auto', //自动撑开
        loopedSlides: 2,
        followFinger: false, //只有当放开slide才会切换
        resistanceRatio: 0, //抵抗率,0时无法拖离边缘。
        centeredSlides: true, //active的slide居中
        activeIndex:1,
        initialSlide:1,
        on: {
          slideChange: function () {
            self.activeTv = this.activeIndex;
            console.log('self.activeTv', self.activeTv);
          },
        }
      },
      pageOptions: {
        //模拟轮播导航栏
        observer: true,
        observeParents: true,
        slidesPerView: 3, //显示三个完整的slide 导航
        spaceBetween: 0,
        resistanceRatio: 0, //禁止拖离边缘。
        centeredSlides: true, //active 的slide居中
        allowTouchMove: false, //禁止触摸滑动
        slideToClickedSlide: true // 跳转到点击的slide
      }
    }
  },
  created() {
    this.activeTv = this.level
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
      this.controlSwiper()
    })
  },methods:{
    controlSwiper(){
      //利用controller双向控制
      const swiperWarp = this.$refs.mainSwiper.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperWarp.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperWarp
    },
    init(){
      // this.swiperOptions.initialSlide=7
      // this.$refs.mainSwiper.initialSlide=this.level
      // console.log('initialSlide',this.swiperOptions);
    }
  }
}
</script>
<style lang="scss">
.awesome-swiper {
  .swiper {
    height: 270px;

    .swiper-slide {
      box-sizing: border-box;
      width: 80%;
      height: auto;
      padding-right: 20px;
      overflow-x: hidden;
      text-align: center;
      font-size: 18px;
      transition: 300ms;

      .unlock-tag {
        z-index: 11;
        position: absolute;
        top: 40%;
        right: 36px;
        padding: 0 16px;
        height: 30px;
        align-items: center;
        justify-content: center;
        color: #1e1c1f;
        background: rgba(255, 255, 255, .7);
      }

      .role-img {
        z-index: 9;
        position: absolute;
        right: 0;
        width: 36vw;
        height: auto;
        pointer-events: none;
        -webkit-user-drag: none;
        overflow: hidden;

        &.role-img-1 {
          width: 40vw;
        }

        &.role-img-5, &.role-img-7,&.role-img-6, &.role-img-8 {
          width: 43vw;
        }
        &.role-img-8{
          bottom: 20px;
        }

      }

    }

    .level-card {
      z-index: 5;
      height: 100px;
      margin-top: 60px;
      overflow: hidden;
      transition: height .3s;

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

    .swiper-slide-active,
    .swiper-slide-duplicate-active {
      .level-card, .bg-stripe {
        height: 120px;
      }
    }
  }

  .swipe-page {
    height: 40px;
    transform: translateY(-30px);

    .swiper-slide {
      width: 40px;
      height: 40px;
      transition: 300ms;
      opacity: 0.6;
      text-align: left;

      &::after {
        display: inline-block;
        flex: 1;
        height: 1px;
        background: rgba(255, 255, 255, .3);
        content: '';
      }

      &:last-child::after {
        background: none;
      }
    }

    .swiper-slide-active,
    .swiper-slide-duplicate-active {
      opacity: 1;
    }
  }
}
</style>

