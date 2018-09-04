<template>
  <div>
    <van-tabbar v-if="show" v-model="active">
      <van-tabbar-item 
        v-for="(item, index) in footbar"
        :key="index"
        :dot="item.num === 0"
        :info="(item.num > 0) ? item.num : ''"
        :url="isExternalLink(item.link) ? item.link : ''"
        :to="!isExternalLink(item.link) ? item.link : ''"
        :icon="item.icon">{{ item.title }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { validateURL } from '@/utils/validate';
import { shareJs } from '@/utils/share';
import store from '@/store';

export default {
  data() {
    return {
      active: 0
    };
  },
  components: {

  },
  computed: {
    ...mapGetters([
      'footbar'
    ]),
    show() {
      return !!this.$route.meta.showFoot;
    }
  },
  created() {
    const route = this.$route;
    let active = this.active;
    this.footbar.forEach(function(item, index) {
      if (item.active === route.meta.active) {
        active = index;
      }
    });
    this.active = active;

    const jssdk = store.getters.userinfo.jssdk;
    const optionData = {
      title: '京好赚',
      desc: '京好赚',
      link: window.location.origin,
      imgUrl: jssdk.share_img
    };
    shareJs(jssdk, optionData);
  },
  methods: {
    isExternalLink(routePath) {
      return validateURL(routePath);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .van-tabbar-item--active {
    color: #E01D26;
  }
</style>
