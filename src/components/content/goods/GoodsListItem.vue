<template>
  <div class="goods-item" @click="itemClick">
    <div class="item-img">
      <!-- <a :href="goodsItem.link"> -->
        <img
          v-lazy="showImage"
          alt=""
          @load="imageLoad"
        />
      <!-- </a> -->
    </div>
    <div class="goods-info">
      <p class="goods-title">{{ goodsItem.title }}</p>
      <span class="price">
        {{ goodsItem.price | showPrice }}
      </span>
      <span class="collect">
        {{ goodsItem.cfav }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {};
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {},
  mounted() {},
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad');
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid);
    }
  },
  components: {},
  computed: {
    showImage() {
      return  this.goodsItem.image || this.goodsItem.show.img 
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price;
    }
  }
};
</script>

<style scoped>
.goods-item {
  width: 48%;
  text-align: center;
  font-size: 14px;
  padding-bottom: 10px;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  margin-top: 8px;
}

.goods-info p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 5px;
  box-sizing: border-box;
}

.goods-info .price {
  color: var(--color-tint);
  /* margin-right: 20px; */
}

.goods-info .collect::before {
  display: inline-block;
  width: 14px;
  height: 14px;
  content: "";
  background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
  transform: translate(1px, 1px);
}

</style>
