<template>
  <div class="cart-list-item" v-if="Object.keys(product).length !== 0">
    <check-button :is-checked="product.checked" @click.native="checkClick"/>
    <div class="product-img">
      <img :src="product.image" alt="" />
    </div>
    <div class="product-info">
      <div>
        <h2 class="title">
          {{ product.title }}
        </h2>
        <p class="desc">
          {{ product.desc }}
        </p>
      </div>
      <div class="product-count">
        <div class="price">
          {{ product.price | showPrice }}
        </div>
        <div class="count">
          x{{ product.count }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name: "CartListItem",
  props: {
    product: {
      type: Object,
      default() {
        return;
      },
    },
  },
  methods: {
    checkClick() {
      this.product.checked =!this.product.checked;
    }
  },
  components:{
    CheckButton
  },
  filters: {
    showPrice(price) {
      return '￥' + price;
    }
  }
};

</script>

<style scoped>
.cart-list-item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 0 12px 50px;
  border-bottom: 3px solid #eee;
}

.product-img {
  padding-left: 10px;
}
.product-img img {
  width: 98px;
  height: 125px;
  border-radius: 5px;
}
.product-info {
  padding: 0 60px 0 12px;
  width: 310px;
}
.product-info .title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 400;
  font-size: 22px;
  color: #333;
}

.product-info .desc {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 16px;
  padding: 18px 10px 18px 0;
}

.product-count {
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  padding-right: 12px;
  font-size: 22px;
}

.product-count .price {
  color: #EC621D;
}


</style>
