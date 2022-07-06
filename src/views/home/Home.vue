<template>
  <div :class="['home', `tv-${activeTv}`]">
    <van-sticky>
      <Nav title="电磁力">
        <template #nav-right>
          <VanIcon name="question-o" />
          <VanIcon name="share-o" />
        </template>
      </Nav>
    </van-sticky>
    <div
      class="score-popover"
      v-show="showScoreTips"
    >
      <van-icon name="volume-o" /> 電磁力較上周提高了{{ advanceScore }}分，冲冲冲！
      <van-icon
        name="cross"
        @click="showScoreTips = !showScoreTips"
      />
  </div>
  <!--up主信息-->
  <div class="up-info">
    <img
      class="up-info-face"
      :src="require('../../assets/images/home/up-info-face.jpg')"
      alt="up主"
    >
      <span class="up-info-name">{{ up }}</span>
  </div>
  <!--轮播-->
  <van-swipe
    :loop="false"
    indicator-color="white"
    width="80%"
    @change="onChange"
  >
    <van-swipe-item
      v-for="(item,index) in leverData"
      :key="index"
    >
      <level-card
        :lv-class="`lv-${index+1}`"
        :level="`${index+1}`"
        :credit="credit"
        :score="score"
        :img-path="require(`../../assets/images/home/${item.imgPath}`)"
        :border-line="item.borderLine"
      />
      </van-swipe-item>
      </van-swipe>
      <div class="upgrade-time">更新时间：2022-07-05</div>
      <!--权益-->
      <privilege-grid :active-tv="activeTv" />
      <home-guidence/>
      <awesome-swiper/>
      </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import PrivilegeGrid from './PrivilegeGrid.vue'
import HomeGuidence from '@/views/home/HomeGuidence'
import LevelCard from './LevelCard.vue'
import AwesomeSwiper from './AwesomeSwiper.vue'

export default {
  name: 'Home',
  components: {
    LevelCard,
    HomeGuidence,
    PrivilegeGrid,
    AwesomeSwiper,
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
      leverData: [
        {
          borderLine: 100,
          imgPath: 'TV-1.71a7bfce.png'
        },
        {
          borderLine: 200,
          imgPath: 'TV-2.63a78435.png'
        },
        {
          borderLine: 300,
          imgPath: 'TV-3.d0ddddc6.png'
        },
        {
          borderLine: 400,
          imgPath: 'TV-4.e277929b.png'
        },
        {
          borderLine: 500,
          imgPath: 'TV-5.69aecd4f.png'
        },
        {
          borderLine: 600,
          imgPath: 'TV-6.01b72c2e.png'
        },
        {
          borderLine: 700,
          imgPath: 'TV-7.199f59ee.png'
        },
        {
          borderLine: 800,
          imgPath: 'TV-8.5a3937b9.png'
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
      this.activeTv = String(index + 1)
      console.log('当前 Swipe 索引：' + this.activeTv)
    },
    getUserData() {
      this.$axios
        .get('http://localhost:8080/data/up.json')
        .then(res => {
          // this.res=res
          console.log(res.body)
          console.log(this.up)
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

    .level-card {
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

.recommendPage .swiper-container {
  position: relative;
  width: 100%;
  height: 200px;
  background: pink;
}
.recommendPage .swiper-container .swiper-slide {
  width: 100%;
  line-height: 200px;
  background: yellowgreen;
  color: #000;
  font-size: 16px;
  text-align: center;
}
</style>

