<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @itemClick="navClick" ref="nav" />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scrollPosition="contentScroll"
    >
      <detail-swiper :item-images="itemImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop-info="shopInfo" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :param-info="paramInfo" ref="params" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <goods-list :goods="recommend" ref="recommend" />
    </scroll>

    <detail-bottom-bar @addCart="addToCart" />

    <back-top
      v-show="isShowBackTop"
      @click.native="backClick"
      class="detail-back-top"
    />

    <toast/>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
import Toast from "components/common/toast/Toast";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";
import { itemImgListenerMixin, backTopMixin } from "common/mixin";
import { debounce } from "common/utils";
import { mapActions } from "vuex";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      itemImages: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
    };
  },
  mixins: [itemImgListenerMixin, backTopMixin],
  props: {},
  created() {
    // 1. 获取iid
    this.iid = '';
    this.iid = this.$route.params.iid;

    // 2. 请求详情页数据
    getDetail(this.iid).then((res) => {
      // 0.获取数据
      const data = res.result;
      // 1.保存顶部轮播图的数据
      this.itemImages = data.itemInfo.topImages;

      // 2.保存产品信息的数据
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3.保存商家的数据信息
      this.shopInfo = new Shop(data.shopInfo);

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 5.保存商品参数的数据
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 6.保存商品评论的信息
      this.commentInfo = data.rate;
    });

    // 3.请求推荐数据
    getRecommend().then((res) => {
      this.recommend = res.data.list;
    });

    // 4.获取得到offsetTop的值
    this.getThemeTopY = debounce(() => {
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
    }, 50);
  },
  methods: {
    ...mapActions(["addCart"]),
    imageLoad() {
      this.$refs.scroll.refresh();

      // 获取 各个主题的offsetTop
      this.getThemeTopY();
    },
    navClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500);
    },
    contentScroll(position) {
      // 1.获取scrollTop的值
      let scrollTop = -position.y;
      let length = this.themeTopYs.length;

      // 2.navbar和内容的联合效果
      // 比较复杂做法:
      /* for(let i = 0;i < length; i++) {
        if (this.currentIndex !== i && ((i < length -1 &&  scrollTop >= this.themeTopYs[i] && scrollTop < this.themeTopYs[i+1] )||(i === length -1 && scrollTop >= this.themeTopYs[i] ))) {
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex;
          }
        }
       */
      // 简化 hack 做法:
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          i < length - 1 &&
          scrollTop >= this.themeTopYs[i] &&
          scrollTop < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      // 3.backTop是否显示
      this.backTopShowListener(position);
    },
    // 加入购物车
    addToCart() {
      // 获取商品的信息
      const goodsInfo = {};
      goodsInfo.iid = this.iid;
      goodsInfo.image = this.itemImages[0];
      goodsInfo.desc = this.goods.desc;
      goodsInfo.title = this.goods.title;
      goodsInfo.price = this.goods.realPrice;

      // this.$store.commit('addCart',goodsInfo);
      // this.$store.dispatch('addCart',goodsInfo)
      this.addCart(goodsInfo).then((res) => {
        this.$toast.show(res);
      });
    },
  },
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    Scroll,
    BackTop,
    Toast,
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 99;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 99;
  background-color: #fff;
}

.content {
  height: calc(100% - (48px + 58px));
}

.detail-back-top {
  bottom: 60px;
  right: 5px;
}

</style>
