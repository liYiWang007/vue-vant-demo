<template>
    <nav class="nav flex">
        <VanIcon
            class="nav-arrow_l"
            name="arrow-left"
            @click="back()"
        />
        <h4 class="flex-1">{{title}}</h4>
        <slot name="nav-right">

        </slot>
    </nav>
</template>

<script>
export default {
  name: 'NavLink',
  props:{
    title:String
  },
  data() {
    return {}
  },
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
.nav {
  left: 0;
  right: 0;
  top: 0;
  height: 20px;
  padding: 20px;
  font-size: 18px;

  .van-icon {
    font-size: 24px;
  }
  .van-icon + .van-icon {
    margin-left: 16px;
  }
  .nav-arrow_l{
      margin-right: 40px;
  }
  h4.flex-1{
      margin: 0;
      text-align: center;
      font-family: REEJI-BigYoung-BoldGB,sans-serif
  }
}
</style>
