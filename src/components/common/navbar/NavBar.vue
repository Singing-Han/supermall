<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 48px;
  line-height: 48px;
  text-align: center;
  /* justify-content: space-between; */
  box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
}

.left,
.right {
  width: 60px;
}

.center {
  flex: 1; 
}
</style>
