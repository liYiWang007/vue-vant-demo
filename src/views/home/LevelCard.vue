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
      <van-progress
        :percentage="score"
        v-if="curLv"
        track-color="rgba(0,0,0,.2)"
      />
      <div
        class="score"
        v-if="curLv"
      >电磁力分：
        <b> {{ score }}/100</b>
      </div>
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
  width: 100vw;
  font-size: 16px;
  text-align: left;
  border-radius: 14px;

  .bg-stripe {
    width: 100%;
    padding: 16px;
    background-image: linear-gradient(
        110deg,
        transparent 80%,
        rgba(0, 0, 0, 0.1) 81%,
        transparent 82%,
        rgba(0, 0, 0, 0.1) 83%,
        transparent 84%,
        rgba(0, 0, 0, 0.1) 85%,
        transparent 86%,
        rgba(0, 0, 0, 0.1) 87%,
        transparent 88%,
        rgba(0, 0, 0, 0.1) 89%,
        transparent 90%,
        rgba(0, 0, 0, 0.1) 91%,
        transparent 92%,
        rgba(0, 0, 0, 0.1) 93%,
        transparent 94%,
        rgba(0, 0, 0, 0.1) 95%,
        transparent 96%,
        rgba(0, 0, 0, 0.1) 97%,
        transparent 98%,
        rgba(0, 0, 0, 0.1) 99%
    );
    border-radius: 14px;
    box-sizing: border-box;
  }

  .level-info {
    margin: 0 0 10px;
    font-size: 36px;
    display: inline-block;
    font-family: DIN-BlackItalic;
  }

  .score {
    margin-top: 10px;

    b {
      font-size: 20px;
      font-family: DIN-BlackItalic;
    }
  }

  .score-credit {
    font-size: 14px;
    margin-left: 10px;
    color: #3c6918;
  }
}
</style>
