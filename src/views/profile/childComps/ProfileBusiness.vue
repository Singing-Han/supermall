<template>
  <div class="profile-business">
    <div class="message">
      <img src="~assets/images/profile/message.svg" alt="">
      <span>我的消息</span>
    </div>
    <div class="integral">
      <img src="~assets/images/profile/pointer.svg" alt="">
      <span>积分商城</span>
    </div>
    <div class="vip">
      <img src="~assets/images/profile/vip.svg" alt="">
      <span>会员卡</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileBusiness',
}
</script>

<style scoped>
.profile-business {
  border-bottom: 15px solid #eee;
  font-size: 16px;
}
.profile-business img {
  width: 20px;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 10px;
}

.profile-business > div {
  padding-left: 20px;
}

.profile-business > div:last-of-type span {
  border-bottom: none;
}

.profile-business span {
  display: inline-block;
  width: calc(100% - 30px);
  border-bottom: 2.5px solid #eee;
  padding: 12px 0;
}


</style>
