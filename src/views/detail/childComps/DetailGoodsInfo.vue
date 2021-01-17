<template>
  <div  class="detail-goods-info" 
        v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc clearfix">
      <div class="start"></div>
      <div class="desc"> {{ detailInfo.desc }} </div>
      <div class="end"></div>
    </div>
    <div  class="detail-goods-show" 
          v-for="(items,itemsIndex) in detailInfo.detailImage"
          :key="itemsIndex">
      <div class="goods-key">
        {{items.key}}
      </div>
      <div class="goods-image" v-for="(item,itemIndex) in items.list" :key="itemIndex">
        <img  :src="item" 
              @load="imageLoad(items.list)"
              alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  data() {
    return {
      counter: 0,
    }
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad(list) {
      if ( ++ this.counter === list.length) {
        this.$emit('imageLoad')
      }
    }
  },
}
</script>

<style scoped>
.detail-goods-info {
  margin-top: 30px;
  border-top: 4px solid #eee;
}

.info-desc {
  float: left;
  margin-top: 10px;
  font-size: 14px;
  color: #666;
  position: relative;
  padding: 0 15px;
}

.desc {
  padding-left: 10px;
}

.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #000;
  margin: 15px 0;
  
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::before {
  content: "";
  display: inline-block;
  width: 5px;
  height: 5px;
  background-color: #333;
}

.info-desc .start::before {
  transform: translateY(-12px);
}

.info-desc .end::before {
  transform: translate(90px , -12px);
}
.goods-key{
  color: #000;
  font-size: 15px;
  padding-left: 15px;
  margin: 10px;
}
.goods-image img{
  width: 100%;
}
</style>
