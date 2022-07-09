<template>
  <div class="level-card">
    <div class="bg-stripe">
      <div>
        <h3 class="level-info cur-level">Lv{{ level }}</h3>
        <router-link
          class="score-credit"
          to="/myCredit"
        >信用分：{{ credit }}分>
        </router-link>
      </div>
      <template v-if="curLv">
        <van-progress :percentage="score" track-color="rgba(0,0,0,.2)"/>
        <div class="score">电磁力分：<b>{{ score }}/100</b></div>
      </template>
      <div v-else style="font-size: 14px;">电磁力分达{{ borderLine }}可解锁</div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'LevelCard.vue',
  props: {
    credit: {
      type: Number,
      default: 1
    },
    score: {
      type: Number,
      default: 0
    },
    borderLine: Number,
    level: String,
    curLv: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/styles/tv-theme.scss';

.level-card {
  position: relative;
  width: 100%;
  font-size: 16px;
  text-align: left;
  border-radius: 14px;

  .bg-stripe {
    width: 100%;
    padding: 16px;
    background: url('../../assets/images/home/strip-bg.png') no-repeat 0 0;
    background-size: 100% auto;
    border-radius: 14px;
    box-sizing: border-box;
  }

  .level-info {
    margin: 0 0 10px;
    font-size: 27px;
    display: inline-block;
    font-family: DIN-BlackItalic;
  }

  .score {
    font-size: 12px;
    margin-top: 10px;

    b {
      font-size: 16px;
      font-family: DIN-BlackItalic;
    }
  }

  .score-credit {
    font-size: 12px;
    margin-left: 4px;
    color: #3c6918;
  }
  .van-progress{
    width: 60%;
    .van-progress__pivot{
    display: none;
  }}
}
</style>
