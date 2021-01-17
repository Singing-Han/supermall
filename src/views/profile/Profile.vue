<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">
        我的档案
      </div>
    </nav-bar>
    <profile-info />
    <profile-asset />
    <profile-business/>
    <profile-operate />

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import ProfileInfo from './childComps/ProfileInfo'
import ProfileAsset from './childComps/ProfileAsset'
import ProfileBusiness from './childComps/ProfileBusiness'
import ProfileOperate from './childComps/ProfileOperate'

export default {
  name: 'Profile',
  data() {
    return {}
  },
  components: {
    NavBar,
    ProfileInfo,
    ProfileAsset,
    ProfileBusiness,
    ProfileOperate
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
}
</style>
