<template>
  <div>
    <van-nav-bar
      v-if="show"
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {

    };
  },
  components: {

  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    show() {
      return !!this.$route.meta.showNav;
    }
  },
  methods: {
    onClickLeft() {
      console.log(this.$route);
    },
    onClickRight() {

    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
