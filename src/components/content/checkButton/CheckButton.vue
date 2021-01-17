<template>
  <div class="check-button" :class="{ active: isChecked }">
    <img src="~assets/images/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked:{
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  border: 2px solid #aaa;
  margin: 0 5px;
  transform: translateX(10px);
}

.check-button img {
  vertical-align: middle;
  width: 18px;
  height: 18px;
}

.active {
  background-color: var(--color-tint);
  border: 2px solid var(--color-tint);
}
</style>
