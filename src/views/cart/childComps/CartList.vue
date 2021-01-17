<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll" :is-click="true">
      <cart-list-item
        v-for="(item, index) in list"
        :product="item"
        :key="index"
      >
      </cart-list-item>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartListItem from "./CartListItem";
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "CartList",
  components: {
    CartListItem,
    Scroll,
  },
  computed: {
    ...mapGetters({
      list: "productList",
    }),
  },
  activated () {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 48px - 49px - 40px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>
