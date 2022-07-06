<template>
  <div class="guide-info oh">
    <div class="guide-info__title"><span class="icon-point"></span>投递一个新的自制视频
      <VanIcon name="question-o"/>
    </div>
    <div class="guide-info__label flex">
      <p class="flex-1">
        投稿 <b class="tv-theme__txt">0</b>/1
      </p>
      <p class="tv-theme__txt">预计电磁力分数+25</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'GuideInfo'
}
</script>

<style lang="scss">
@import "src/assets/styles/base/color";
.guide-info{
  padding: 10px;
  text-align: left;
  margin-top: 16px;
  border: 1px solid $border-color;
  border-radius: 12px;
  color: #000;
  .guide-info__title{
    font-size: 16px;
    margin-bottom: 10px;
    .icon-point{
      display: inline-block;
      width: 6px;
      height: 6px;
      margin-right: 4px;
      border-radius: 3px;
      vertical-align: 4px;
      background: pink;
    }
    .van-icon-question{
      color: #5b6057;
    }
  }

  .guide-info__label{
    color: #a3a6a6;
  }
}
</style>
