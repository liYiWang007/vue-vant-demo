<template>
    <div class="recommendPage">
        <Swiper
            :options="swiperOption"
            ref="mySwiper"
        >
            <swiper-slide>I'm Slide 1</swiper-slide>
            <swiper-slide>I'm Slide 2</swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>
            <div
                class="swiper-pagination"
                slot="pagination"
            ></div>
    <div
        class="swiper-button-prev"
        slot="button-prev"
    ></div>
        <div
            class="swiper-button-next"
            slot="button-next"
        ></div>
            </Swiper>
            </div>
</template>

<script>
// 引入插件
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import "../../swiper/dist/css/swiper.css";
export default {
  name: 'AwesomeSwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 4,
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
   computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  },
}
</script>
<style scoped>
</style>