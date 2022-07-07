<template>
  <div :class="['home', `tv-${activeTv}`]">
    <van-sticky>
      <Nav title="电磁力">
        <template #nav-right>
          <VanIcon name="question-o"/>
          <VanIcon name="share-o"/>
        </template>
      </Nav>
    </van-sticky>
    <div
      class="score-popover"
      v-show="showScoreTips"
    >
      <van-icon name="volume-o"/>
      電磁力較上周提高了{{ advanceScore }}分，冲冲冲！
      <van-icon
        name="cross"
        @click="showScoreTips = !showScoreTips"
      />
    </div>
    <!--up主信息-->
    <div class="up-info">
      <img class="up-info-face" :src="getUserInfo.upFace" alt="up主" >
      <span class="up-info-name">{{ getUserInfo.up }}</span>
    </div>
    <!-- vue-awesome-swiper轮播-->
    <awesome-swiper :credit="getUserInfo.credit" :score="getUserInfo.score"></awesome-swiper>
    <div class="upgrade-time">更新时间：2022-07-05</div>
    <!--权益-->
    <privilege-grid :active-tv="activeTv"/>
    <home-guidence/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import PrivilegeGrid from './PrivilegeGrid.vue'
import HomeGuidence from '@/views/home/HomeGuidence'
import AwesomeSwiper from './AwesomeSwiper.vue'

export default {
  name: 'Home',
  components: {
    AwesomeSwiper,
    HomeGuidence,
    PrivilegeGrid,
    Nav
  },
  data() {
    return {
      showplDialog: true,
      curLevel: '1',
      activeTv: '1',
      advanceScore: 34,
      showScoreTips: true,
      getUserInfo: {},
    }
  },
  mounted() {
    this.getUserData()
  },
  methods: {
    onChange(index) {
      this.activeTv = String(index + 1)
      console.log('当前 Swipe 索引：' + this.activeTv)
    },
    getUserData() {
      this.$axios
        .get('users.json')
        .then(res => {
          const data =res.data
          let user=null
          for(let key in data){
            if(data[key].UID==='233') {user=data[key]}
          }
          this.getUserInfo=user

        })
        .catch(err => {
          console.log('error', err.message)
        })
    }
  }
}
</script>
<style lang="scss">
@import 'src/assets/styles/tv-theme.scss';

.home {
  .nav {
    color: #ffffff;
  }

  .score-popover {
    margin: 16px 30px;
    height: 20px;
    padding: 10px;
    font-size: 15px;
    color: #ffffff;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
  }

  .up-info {
    position: absolute;
    padding: 0 30px;
    text-align: left;
    color: #ffffff;
    z-index: 0;

    .up-info-face {
      width: 40px;
      height: 40px;
      vertical-align: -12px;
      border-radius: 50%;
    }

    .up-info-name {
      margin-left: 8px;
      line-height: 40px;
      font-size: 16px;
    }
  }

  .van-swipe {
    height: 300px;

    .van-swipe-item {
      box-sizing: border-box;
      padding-left: 26px;
      padding-top: 60px;
      overflow: hidden;

      .van-progress {
        width: 60%;
      }

      .van-progress__pivot {
        display: none;
      }
    }

  }

  .upgrade-time {
    position: relative;
    padding-right: 40px;
    height: 0;
    top: -70px;
    opacity: 0.7;
    font-size: 12px;
    color: #ffffff;
  }
}
</style>

