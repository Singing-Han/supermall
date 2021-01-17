<template>
  <div class="profile-operate">
    <div class="cart">
      <img src="~assets/images/profile/cart.svg" alt="">
      <span>我的购物车</span>
    </div>
    <div class="download-app">
      <img src="~assets/images/profile/shopping.svg" alt="">
      <span>下载购物APP</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileOperate',
}
</script>

<style scoped>
.profile-operate div{
  margin-left: 20px;
  font-size: 16px;
}
.profile-operate img {
  width: 20px;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 10px;
}

.profile-operate span {
  display: inline-block;
  width: calc(100% - 30px);
  padding: 12px 0;
}

.profile-operate >div:first-of-type span {
  border-bottom: 2.5px solid #eee;
}

</style>
