<template>
  <div class="hello">
    <h1>{{ per }}</h1>
    <slot :progress="per"></slot>
  </div>
</template>

<script>
import resource from '@lydxwj/resource';
export default {
  name: 'Loading',
  data() {
    return {
      per: '',
    };
  },
  props: {
    time: Number,
    srcList: Array,
  },
  methods: {
    upData() {
      this.loading();
    },
    loading() {
      const _this = this;
      resource.load({
        srcList: this.srcList,
        percentCb(per) {
          _this.per = per;
        },
        completeCb() {

        }
      });
    }
  },
  mounted() {
    this.upData();
  }
}
</script>
<style scoped lang="stylus">

</style>