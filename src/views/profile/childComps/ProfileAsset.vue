<template>
  <div class="profile-asset">
    <div class="balance">
      <div>
        <b>0.00</b>
        <span>元</span>
        <p>我的余额</p>
      </div>
    </div>
    <div class="coupons">
      <div>
        <b>0</b>
        <span>个</span>
        <p>我的优惠券</p>
      </div>
    </div>
    <div class="integral">
      <div>
        <b>0</b>
        <span>元</span>
        <p>我的积分</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileAsset",
};
</script>

<style scoped>
.profile-asset {
  display: flex;
  text-align: center;
  border-bottom: 15px solid #eee;
}

.profile-asset > div {
  margin-top: 10px;
  padding: 20px;
  flex: 1;
  border-right: 2px solid rgba(0, 0, 0, .05);
  box-sizing: border-box;
}
.profile-asset > div:last-child {
  border: none;
}
.profile-asset b {
  color: #f27559;
  font-size: 20px;
}

.profile-asset {
  font-size: 14px;
}
</style>
