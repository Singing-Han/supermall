<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
      class="tab-control"
    ></tab-control>

    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      :isClick="true"
      :pullUpLoad="true"
      @scrollPosition="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImageLoaded="swiperImageLoaded"
      ></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView.vue";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoodsData } from "network/home";
import { BACK_POSITION } from 'common/const'
import { debounce } from "common/utils";
import { itemImgListenerMixin, backTopMixin } from 'common/mixin'
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      // isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      scrollY: 0,
    };
  },
  mixins: [itemImgListenerMixin,backTopMixin],
  created() {
    // 请求轮播图推荐等数据
    this.getHomeMultidata();

    // 2.请求商品数据
    this.getHomeGoodsData("pop");
    this.getHomeGoodsData("new");
    this.getHomeGoodsData("sell");
  },
  mounted() {
    // 监听图片加载
    /* const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImgListener = () => {
      refresh();
    }
    this.$bus.$on("itemImageLoad", this.itemImgListener); */
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 监听滚动位置
    contentScroll(position) {
      // 判断tabControl是否显示
      /* this.isShowBackTop = Math.abs(position.y) > BACK_POSITION; */
      this.backTopShowListener(position);
      // 2.决定tabControl是否吸顶
      // this.isTabFixed = Math.abs(position.y) > this.tabOffsetTop - 48;
      this.isTabFixed = Math.abs(position.y) > this.tabOffsetTop;
    },
    // 加载更多
    loadMore() {
      console.log("下拉加载更多...");
      this.getHomeGoodsData(this.currentType);
    },
    swiperImageLoaded() {
      // 获取tabControl2的offsetTop
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    /**
     * 网络请求方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoodsData(type) {
      const page = this.goods[type].page + 1;
      getHomeGoodsData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 完成下拉加载更多
        this.$refs.scroll.finishPullUpload();
      });
    },
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },

  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.scrollY, 0);
    this.$refs.scroll.refresh()
  },
  deactivated() {
    // 保存Y值
    this.scrollY = this.$refs.scroll.getScrollY();

    // 2.取消全局事件的监听
    this.$bus.$off('itemImageLoad',this.itemImgListener);
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  /* padding-top: 48px; */
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}

.content {
  position: absolute;
  top: 48px;
  bottom: 49px;
  left: 0;
  right: 0;
  /*  height: calc(100% - 97px);
  overflow: hidden; */
}

.tab-control {
  position: relative;
  z-index: 9;
}
</style>
