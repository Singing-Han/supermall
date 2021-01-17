<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      class="tab-control-item"
      :class="{ active: currentIndex === index }"
      @click="itemClick(index)">
      <span>
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {},
  mounted() {},
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index);
    }
  },
  components: {},
};
</script>

<style scoped>
.tab-control {
  display: flex;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: 16px;
  color: #666;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: var(--color-high-text);

}

.active span {
  border-bottom: 2px solid var(--color-tint);
}
</style>
