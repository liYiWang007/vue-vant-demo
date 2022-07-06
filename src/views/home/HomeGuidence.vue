<template>
  <div class="home-guidence">
    <home-wrap-title title="本周专属指南" path="/about" more="完成后可获500创作积分"/>
    <guide-info class="mb-1"/>
    <home-wrap-title title="进步之星" path="/about"/>
    <stars-list class="mb-1"/>
    <home-wrap-title class="mb-1" title="创作学院"/>
    <router-link class="banner oh" to="/about">
      <img :src="require('../../assets/images/home/banner.jpg')" alt="banner">
    </router-link>
  </div>
</template>

<script>
import GuideInfo from "@/views/home/GuideInfo";
import StarsList from "@/views/home/StarsList";
import HomeWrapTitle from "@/components/HomeWrapTitle";

export default {
  name: 'HomeGuidence',
  components: {HomeWrapTitle, StarsList, GuideInfo,}
}
</script>

<style lang="scss">
.home-guidence {
  padding: 20px;
  background: #fff;
  border-radius: 14px 14px 0 0;
  .banner{
    width: 100%;
    height: auto;
    img{
      width: 100%;
      height: auto;
      border-radius: 12px;
    }
  }
}
</style>
