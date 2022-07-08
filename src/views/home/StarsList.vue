<template>
  <div class="stars-list">
    <div class="star-card-list">
      <div class="star-card flex-center" v-for="item in starData" :key="item.UID">
        <div class="star-info__face" :style="{backgroundImage: `url(require(${item.facePath}))`}"></div>
        <div class="star-info flex-1">
          <div class="star-info__name">{{ item.name }}</div>
          <p class="star-info_label">电磁力：Lv{{ item.level }}·擅长：{{ item.beGoodAt ? item.beGoodAt : '日常' }}</p>
          <template v-if="item.tags">
          <div class="star-tag">
            <van-tag color="#fff0e3" text-color="#ff7f24" v-for="(subItem,subIndex) in item.tags" :key="subIndex">
              {{ subItem.tag }}
            </van-tag>
          </div>
          </template>
        </div>

        <van-button :class="['follow-btn',{'is-followed':item.toFollow}]" :type="item.toFollow?'':'primary'"
                    @click="item.toFollow=!item.toFollow" round>
          <van-icon name="plus" v-show="!item.toFollow"/>
          {{ item.toFollow ? '已关注' : '关注' }}
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarsList',
  data() {
    return {
      starData: []
    }
  },
  mounted(){
    this.getStarsList()
  },
  methods:{
    getStarsList(){
    this.$axios.get('users.json')
      .then(res=>{
          const data=res.data
          const users=[]
          for(let key in data){
            if(data[key].UID!=='233'){
              const user =data[key]
              users.push(user)
            }
          }
          this.starData=users
      })
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/base/color";

.stars-list {
  text-align: left;

  .star-card {
    padding: 16px 0;
    border-bottom: 1px solid $border-color;
  }

  .star-info__face {
    width: 55px;
    height: 55px;
    margin-right: 10px;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-image: url("../../assets/images/home/noface.jpg");
    background-size: contain;
    border-radius: 50%;
  }

  .star-info__name {
    font-size: 16px;
  }

  .star-info_label {
    margin: 6px 0;
    color: #888888;
  }

  .van-tag {
    padding: 2px 3px 0;
    font-size: 12px;
  }

  .van-tag + .van-tag {
    margin-left: 8px;
  }

  .follow-btn {
    height: 26px;
    line-height: 26px;

    &.is-followed {
      color: #afb8bf;
      background: #e5e8ef;
      border: 1px solid #e5e8ef;
    }
  }

}

</style>
