<template>
  <div :class="classObj" class="app-wrapper">
    <div class="main-container">
      <navbar/>
      <app-main/>
      <footbar/>
    </div>
  </div>
</template>

<script>
import { Navbar, AppMain, Footbar } from './components';

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    Footbar
  },
  computed: {
    classObj() {
      return {

      };
    }
  },
  methods: {

  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
