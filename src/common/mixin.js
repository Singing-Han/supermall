import { debounce } from './utils'
import { BACK_POSITION } from './const'

export const itemImgListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    // 监听图片加载
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImgListener = () => {
      refresh();
    }
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  },
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    backTopShowListener(position) {
      this.isShowBackTop = Math.abs(position.y) > BACK_POSITION;
    }
  }
}
