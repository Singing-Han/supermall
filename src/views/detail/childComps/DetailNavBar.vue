<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick">
        <img src="~assets/images/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <span v-for="(item,index) in titles" 
              :key="index"
              class="center-item"
              :class="{active: index === currentIndex}"
              @click="itemClick(index)">{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('itemClick',index);
    },
    backClick(index) {
      // 路径的返回
      this.$router.back();

    }
  },
  components: {
    NavBar
  },
}
</script>

<style scoped>
.left img{
  vertical-align: middle;
}
.center {
  display: flex;
  font-size: 14px;
}

.center-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}
</style>
