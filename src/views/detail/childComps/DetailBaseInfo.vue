<template>
  <div  v-if="Object.keys(goods).length !== 0" class="detail-base-info" >
    <div class="info-title"> {{ goods.title }} </div>
    <div class="info-price">
      <span class="newPrice"> {{ goods.realPrice | showPrice}} </span>
      <span calss="oldPrice"> <del>{{ goods.oldPrice  }}</del> </span>
      <span class="discount" v-if="goods.discount"> {{ goods.discount }} </span>
    </div>
    <div class="info-other">
      <span> {{goods.columns[0]}} </span>
      <span> {{goods.columns[1]}} </span>
      <span> {{goods.services[goods.services.length - 1].name}} </span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price;
    }
  }
}
</script>

<style scoped>
.detail-base-info {
  padding: 0 7px 0 8px;
}

.info-title {
  color: #000;
  font-size: 19px;
  font-weight: 500;
  line-height: 25px;
  padding: 15px 0;
}

.info-price {
  position: relative;
}
.info-price .newPrice {
  font-size: 26px;
  color: var(--color-high-text);
}


.info-price span {
  margin: 0 3px;
}

.info-price .discount {
  position: absolute;
  background-color: var(--color-tint);
  padding: 5px;
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
}

.info-other {
  margin-top: 13px;
  padding: 10px 0;
  display: flex;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
}

.info-other span {
  color: #999;
  font-size: 14px;
}

.info-service {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 23px 0;
  color: #444;
}

.info-service-item img {
  width: 16px;
  vertical-align: top;
}

</style>
