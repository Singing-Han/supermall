<template>
  <div class="back-top">
    <img src="~assets/images/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:'BackTop',
  data() {
    return {}
  },
  props: {},
  created() {},
  mounted() {},
  methods: {},
  components: {}
}
</script>

<style scoped>
.back-top {
  position: fixed;
  bottom: 50px;
  right: 12px;
}
.back-top img {
  width: 43px;
  height: 43px;
  vertical-align: middle;
}
</style>
