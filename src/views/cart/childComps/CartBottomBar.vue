<template>
  <div class="bottom-bar">
    <div class="checked-all">
      <check-button class="check-button" 
                    :isChecked="isSelectAll"
                    @click.native="selectAll" />
      <span>全选</span>
    </div>
    <div class="total-price">
      <span>合计: {{totalPrice}}  </span>
    </div>
    <div class="calculate" @click="calcuClick">
      去计算({{checkedCount}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton';
import {mapGetters} from 'vuex';

export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters({
      length: 'cartLength',
      list: 'productList'
    }),
    totalPrice() {
      return '￥' + this.list.filter(item => {
        return item.checked
      }).reduce((proValue,item) => {
        return proValue + item.price * item.count
      },0).toFixed(2)
    },
    checkedCount() {
      return this.list.filter(item => item.checked).length
    },
    isSelectAll() {
      if (this.list.length === 0) {
        return false;
      }
      // 1.filter方法: 
      // return !this.list.filter( item => !item.checked ).length

      // 2.find方法:
      // return !this.list.find(item => !item.checked)

      // 3.for循环遍历:
      for(let item of this.list) {
        if (!item.checked) {
          return false;
        }
      }
      return true;
    },
  },
  methods: {
      selectAll() {
        if (this.isSelectAll) { // 全选
          this.list.forEach(item => item.checked =  false) 
        }else { // 部分选 或 全不选
          this.list.forEach(item => item.checked =  true) 
        }
      },
      calcuClick() {
        if (this.checkedCount === 0) {
          this.$toast.show('请选择要购买的商品')
        }
      }
    }
}
</script>

<style scoped>
.bottom-bar {
  display: flex;
  position: relative;
  height: 40px;
  line-height: 40px;
  background-color: #eee;
}

.checked-all {
  display: flex;
  align-items: center;
  width: 100px;
}

.check-button {
  width: 22px;
  height: 22px;
  line-height: 15px;
  margin-right: 15px;
}

.total-price {
  flex: 1;
}

.calculate {
  width: 130px;
  font-size: 14px;
  text-align: center;
  background-color: #FF789A;
  color: #fff;
}
</style>
