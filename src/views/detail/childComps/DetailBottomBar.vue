<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div class="customers-service">
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div class="store">
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div class="collect">
        <i class="icon select"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-right">
      <div class="cart" @click="addCart">
        <span>加入购物车</span>
      </div>
      <div class="buy">
        <span>购买</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  height: 58px;
  background-color: #fff;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 10000;
}

.bottom-bar > div {
  flex: 1;
}

.bar-left {
  display: flex;
  font-size: 14px;
}

.bar-left > div {
  flex: 1;
}

.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  background: url("~assets/images/detail/detail_bottom.png") 0 0/100%;
  margin: 0 0 2px 23.2px;
}

.bar-left > div:nth-child(1) .icon {
  background-position: 0 97px;
}

.bar-left > div:nth-child(2) .icon {
  background-position: 0 52px;
}

.bar-right {
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 58px;
}

.bar-right > div {
  flex: 1;
}

.cart span{
  display: block;
  font-size: 18px;
  color: #333;
  background-color: #ffdd0b;
}

.buy  span{
  display: block;
  color: #fff;
  font-size: 18px;
  background-color: #FF789A;
}
</style>
