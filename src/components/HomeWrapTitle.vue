<template>
  <div class="home-wrap__title flex">
    <h3 class="flex-1">{{title}}</h3>
    <router-link :to="path" v-if="path">{{more}}
      <van-icon name="arrow"/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeWrapTitle',
  props:{
    title:String,
    path:String,
    more:{
      type:String,
      default:'查看更多'
    },
  }
}
</script>

<style lang="scss">
.home-wrap__title {
  height: 26px;
  line-height: 26px;
  text-align: left;
  color: #9a9a9b;

  h3 {
    font-size: 18px;
    font-weight: normal;
    color: #000000;
    font-family: REEJI-BigYoung-BoldGB, sans-serif;
  }

  a {
    color: #9a9a9b;
  }
}

</style>
