<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" class="item" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>
.recommend {
  display: flex;
  padding: 10px 0 35px 0;
  border-bottom: 11px solid #EEEEEE;
}
.recommend .item {
  flex: 1;
  text-align: center;
  font-size: 15px;
  color:#333;
}

.recommend .item img {
  width: 88px;
  height: 88px;
  margin-bottom: 12px;
}
</style>
