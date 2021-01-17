<template>
  <div class="detail-param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table class="sizes" v-for="(items,itemsIndex) in paramInfo.sizes" :key="itemsIndex" >
      <tr v-for="(item, itemIndex) in items" :key="itemIndex">
        <td v-for="(info,infoIndex) in item" :key="infoIndex">
          {{info}}
        </td>
      </tr>
    </table>
    <table class="infos">
      <tr class="info-row" v-for="(item,index) in paramInfo.infos" :key="index">
        <td> {{item.key}} </td>
        <td class="info"> {{item.value}} </td>
      </tr>
    </table>
    <div class="info-image">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
.detail-param-info {
  padding: 20px 15px;
}
.sizes {
  font-size: 13px;
}

.sizes tr  {
  display: flex;
}

.sizes tr td {
  flex: 1;
}

table {
  width: 100%;
  border-spacing:0;  
}

table td {
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.info-image img {
  width: 100%;
}

.infos {
  border-top: 1px solid #eee;
  font-size: 15px;
}

.infos td:first-child {
  white-space: nowrap;
}

.info {
  padding-left: 60px;
  color: var(--color-high-text);
}
</style>
