<template>
  <div class="collapse">
    <div :class="['collapse-title', 'flex',{ 'collapse__expand': showAllGrid}]" @click="showAllGrid=!showAllGrid">
      <p class="flex-1">当前获得权益</p>
      <span class="arrow-text">{{showAllGrid?'收起':'查看全部权益'}} </span> <van-icon name="arrow"/>
    </div>
    <van-grid :class="['privileges-wrp','oh',{'privileges-wrp__expand':showAllGrid}]" :border="false" :column-num="4">
      <van-grid-item v-for="(item, index) in plData" :key="index" @click="plType=index">
        <div class="item-card" :style="{opacity:(activeTv >= item.tvLevel?'1':'0.4')}">
          <svg-icon :icon="item.icon"/>
          <div class="title">{{ item.title }}</div>
        </div>
        <van-dialog v-show="plType===index?true:false" class="pl-dialog" confirm-button-text="知道了" round-button>
          <svg-icon class="pl-dialog-icon" :icon="item.icon"/>
          <div class="pl-dialog-title">{{ item.title }}</div>
          <div class="pl-section-title">获得条件</div>
          <section>
            {{ item.plCondition }}
          </section>
          <div class="pl-section-title">权益说明</div>
          <section>
            就是一些很长很细致的说明
          </section>
        </van-dialog>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import svgIcon from '@/components/common/svg-icon.vue'

export default {
  name: 'PrivilegeGrid.vue',
  components: {
    svgIcon
  },
  props:{
    activeTv:{
      type:String,
      default:'1'
    }
  },
  data(){
    return{
      plType: '1',
      showAllGrid: false,
      plData: [
        {
          tvLevel: '0',
          title: '关闭互动',
          icon: 'icon-interactiveClose',
          plCondition: '电磁力分>0,信用分≥80'
        },
        {
          tvLevel: '0',
          title: '评论精选',
          icon: 'icon-goodComment',
          plCondition: '电磁力分>0,信用分≥80'
        },
        {
          tvLevel: '3',
          title: '超大文件',
          icon: 'icon-largeFile',
          lvCredit: '',
          plCondition: '电磁力等级达到Lv3,信用分≥60'
        },
        {
          tvLevel: '3',
          title: '创作激励',
          icon: 'icon-incentive',
          plCondition: '电磁力等级达到Lv3,信用分≥80'
        },
        {
          tvLevel: '3',
          title: '合集',
          icon: 'icon-multipleArc',
          plCondition: '电磁力等级达到Lv3,信用分≥60'
        },
        {
          tvLevel: '3',
          title: '版权保护',
          icon: 'icon-copyrightProtection',
          plCondition: '电磁力等级达到Lv3的个人up主。'
        },
        {
          tvLevel: '4',
          title: '稿件预约',
          icon: 'icon-arcReserve',
          plCondition: '电磁力等级达到Lv4,信用分≥60'
        },
        {
          tvLevel: '5',
          title: '联合投稿',
          icon: 'icon-avStaff',
          plCondition: '电磁力等级达到Lv5,信用分≥60'
        },
        {
          tvLevel: '7',
          title: '互动抽奖',
          icon: 'icon-lottery',
          plCondition: '电磁力等级达到Lv7,信用分≥60'

        }
      ]

    }
  }
}
</script>

<style lang="scss">

.collapse {
  .collapse-title {
    height: 20px;
    line-height: 20px;
    margin: 16px 0;
    padding: 0 16px;
    font-size: 16px;
    color: #ffffff;

    p {
      margin: 0;
      text-align: left;
      font-size: 18px;
    }
    .arrow-text {
      margin-right: 8px;
      font-size: 12px;
    }
    .van-icon-arrow::before {
      transform: rotate(90deg) translateZ(0);
      transition: transform 0.3s;
    }

    &.collapse__expand {
      .van-icon-arrow::before {
        transform: rotate(-90deg);
      }
    }
  }


  .privileges-wrp{
    height: 160px;
    transition: height 0.5s;
    &.privileges-wrp__expand{
      height: 240px;
    }
  }
  .van-grid-item {
    height: 80px;
    color: #ffffff;

    .van-grid-item__content {
      background: transparent;
    }

    .svg-icon-sp {
      display: inline-block;
      width: 62%;
      height: 40px;

      .svg-icon {
        fill: #fff;
      }
    }
  }
}

</style>
