<template>
  <div class="app-main" :class="{'has-nav' : showNav, 'has_foot' : showFoot}">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.fullPath;
    },
    showNav() {
      return !!this.$route.meta.showNav;
    },
    showFoot() {
      return !!this.$route.meta.showFoot;
    }
  }
};
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 96px);
  position: relative;
  overflow: hidden;
  background: #f0f2f5;
}
.has-nav {
  padding-top: 46px;
}
.has_foot {
  padding-bottom: 50px;
}
</style>

