<template>
  <div class="cart">
    <!-- 顶部导航栏 -->
    <nav-bar class="nav-bar">
      <div slot="center">
        购物车({{length}})
      </div>
    </nav-bar>

    <!-- 商品列表 -->
    <cart-list />

    <!-- 底部工具类 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'
import {mapGetters} from 'vuex';

export default {
  components: {
    NavBar,
    CartList, 
    CartBottomBar
  },
  computed: {
    ...mapGetters({
      length: 'cartLength'
    })
  },

}
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
  /* height: 100vh; */
}


</style>
