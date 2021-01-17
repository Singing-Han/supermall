<template>
  <div class="profile-info">
    <div class="profile-avatar">
      <img src="~assets/images/profile/avatar.svg" alt="">
    </div>
    <div class="profile-operate">
      <div class="login-Register">登录/注册</div>
      <div class="phone">
        <img src="~assets/images/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="enter">
      <img src="~assets/images/common/arrow-left.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileInfo',
}
</script>

<style scoped>
.profile-info {
  width: 100%;
  height: 90px;
  background-color: var(--color-tint);
  padding: 20px;
  display: flex;
  align-items: center;
}

.profile-avatar {
  width: 70px;
}
.profile-avatar img {
  width: 70px;
  vertical-align: bottom;
  margin-top: 5px;
}

.profile-operate {
  color: #fff;
  margin-left: 20px;
  flex: 1;
}

.login-Register {
  padding: 10px 0 6px 5px;
  font-size: 20px;
}

.phone  {
  font-size: 14px;
}

.phone img{
  width: 18px;
  vertical-align: middle;
}
.enter  {
  width: 20px;
}
.enter img{
  width: 20px;
  vertical-align: middle;
}
</style>
