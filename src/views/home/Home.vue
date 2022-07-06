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
    <div class="score-popover" v-show="showScoreTips">
      <van-icon name="volume-o"/>
      電磁力較上周提高了{{ advanceScore }}分，冲冲冲！
      <van-icon name="cross" @click="showScoreTips = !showScoreTips"/>
    </div>
    <!--up主信息-->
    <div class="up-info">
      <img class="up-info-face" :src="require('../../assets/images/home/up-info-face.jpg')" alt="up主">
      <span class="up-info-name">{{ up }}</span>
    </div>
    <!--轮播-->
    <van-swipe :loop="false" indicator-color="white" :width="300" @change="onChange">
      <van-swipe-item>
        <div class="level-banner">
          <div class="level-card level_1">
            <div class="bg-stripe"></div>
            <div>
              <h3 class="level-info cur-level">Lv1</h3>
              <router-link class="score-credit" to="/">信用分：{{ credit }}分></router-link>
            </div>
            <van-progress :percentage="score" track-color="rgba(0,0,0,.2)"/>
            <div class="score">电磁力分：
              <b> {{ score }}/100</b>
            </div>
          </div>
          <img class="level-role" :src="require('../../assets/images/home/TV-1.71a7bfce.png')" alt="">
        </div>
      </van-swipe-item>
      <van-swipe-item v-for="(item,index) in leverData" :key="index">
        <level-card :credit="item.credit" :score="item.score" :img-path="`require(${item.imgPath})`" :border-line="item.borderLine"/>
      </van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
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
import HomeGuidence from "@/views/home/HomeGuidence";
import LevelCard from './LevelCard.vue'

export default {
  name: 'Home',
  components: {
    LevelCard,
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
      score: 23,
      credit: 66,
      up: 'test',
      showScoreTips: true,
      leverData:[
        {
          credit:'',
          score:'',
          borderLine:'',
          imgPath:'',
        }
      ],
      userInfo: [],
    }
  },
  mounted() {
    this.getUserData()
  },
  methods: {
    onChange(index) {
      this.activeTv = String(index+1)
      console.log('当前 Swipe 索引：' + this.activeTv);
    },
    getUserData() {
      this.$axios.get('http://localhost:8080/data/up.json')
        .then(res => {
          // this.res=res
          console.log(res.body);
          console.log(this.up);


        }).catch((err) => {
        console.log('error', err.message);
      })
    }
  }
}
</script>
<style lang="scss">
@import "src/assets/styles/tv-theme.scss";

.home {


  &.tv-3 {
    background-image: linear-gradient(#85c940, #46b2d8);

    .van-sticky--fixed {
      .nav {
        background: #90cb3d;
      }
    }
  }

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
      margin-left: 26px;
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

