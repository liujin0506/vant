<template>
  <div>
    <van-nav-bar
      v-if="show"
      :title="title"
      left-text=""
      right-text=""
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
      title: this.$route.meta.title
    };
  },
  watch: {
    $route(to, from) {
      this.title = this.$route.meta.title;
    }
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
      this.$router.go(-1);
    },
    onClickRight() {

    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
