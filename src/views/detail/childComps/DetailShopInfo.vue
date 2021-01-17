<template>
  <div class="detail-shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-brand">
      <div class="info-logo">
        <img :src="shopInfo.logo" alt="">
      </div>
      <div class="info-name">
        <span> {{shopInfo.name}} </span>
      </div>
    </div>
    <div class="shop-des">
      <div class="des-left">
        <div class="sells">
          <span>{{ shopInfo.sells | showSells }}</span>
        <p>总销量</p>
      </div>
        <div class="goods">
          <span> {{ shopInfo.goodsCount }} </span>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="score-item des-right">
        <div  class="des-item" 
              v-for="(item,index) in shopInfo.score"
              :key="index">
          <span>{{ item.name }}</span>
          <span class="score" :class="{'score-better': item.isBetter}"> {{item.score}} </span>
          <span class="better" :class="{'better-more': item.isBetter}"> {{ item.isBetter ? '高' : '低'}} </span>
        </div>
      </div>
    </div>
    <div class="browse">
      <button>进店逛逛</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showSells(sells) {
      if (sells > 10000) {
        return  (sells/10000).toFixed(1) + '万';
      }
    }
  }
}
</script>

<style scoped>
.detail-shop-info {
  border-top: 5px solid #eee;
  padding: 0 10px;
}
.shop-brand {
  display: flex;
  align-items: center;
  padding: 25px 0 12px 10px;
}
.info-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #ccc;
  text-align: center;
  margin-right: 12px;
}

.info-logo img {
  width: 100%;
  height: 100%;
  padding: 3px;
  border-radius: 50%;
}

.info-name {
  color: #666;
  font-size: 18px;
}

.shop-des {
  display: flex;
  padding: 0 10px;
  align-items: center;
}

.des-left {
  display: flex;
  border-right: 1px solid #ccc;
  align-items: center;
}

.des-left div {
  flex: 1;
  text-align: center;
}

.shop-des>div {
  flex: 1;
}

.sells span,
.goods span{
  font-size: 20px;
  color: #333;
}

.shop-des p {
  font-size: 14px;
  margin-top: 8px;
}

.goods p {
  margin-left: -8px;
  color: #333;
} 

.score-item {
  padding-left: 20px;
}

.score-item span {
  font-size: 14px;
  line-height: 20px;
  margin: 5px 5px;
}

.des-item {
  display: flex;
  justify-content: space-between;
}

.score {
  color: #669542;
}

.score-better {
  color: var(--color-high-text);
}

.better {
  background-color:  #669542;
  color: #fff;
}

.better-more {
  background-color: var(--color-high-text);
}

.browse {
  margin: 18px 0;
  text-align: center;
}

.browse button {
  color: #666;
  font-size: 15px;
  background-color: #F1F5F9;
  border: none;
  height: 35px;
  line-height: 35px;
  width: 170px;
  border-radius: 10px;
  outline: none;
}
</style>
