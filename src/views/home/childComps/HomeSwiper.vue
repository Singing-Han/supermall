<template>
  <div class="home-swiper">
    <swiper ref="swiper" v-if="banners.length">
      <swiper-item v-for="(item ,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoaded">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper';
export default {
  name: 'HomeSwiper',
  props: {
    banners:{
      type: Array,
      require: true,
    }
  },
  data() {
    return {
      isLoaded: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    startTimer() {
      this.$ref.swiper && this.$ref.swiper.startTimer();
    },
    stopTimer() {
      this.$ref.swiper && this.$ref.swiper.stopTimer();
    },
    imageLoaded(){
      if (!this.isLoaded) {
        this.$emit('swiperImageLoaded');
        this.isLoaded = true;
      }
    }
  }
}
</script>

<style scoped>

</style>
