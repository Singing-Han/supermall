<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goods" 
    :goods-item="item" class="goods-item" :key="index">
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  data() {
    return {}
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {},
  mounted() {},
  methods: {},
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
.goods-list {
  display: flex;
  justify-content: space-around;
  /* flex-flow:row wrap; */
  flex-wrap: wrap;
  padding: 0 5px;
  box-sizing: border-box;
  align-items: center;
}
</style>
