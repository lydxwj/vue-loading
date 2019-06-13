<template>
  <div class="loading">
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
    percent: Function,
    complete: Function,
    fail: Function,
  },
  methods: {
    loading() {
      const _this = this;
      resource.load({
        srcList: this.srcList,
        percentCb(per) {
          _this.per = per;
          if (_this.percent) {
            _this.percent(per);
          }
        },
        completeCb: this.complete,
        failCb: this.fail,
        time: this.time,
      });
    }
  },
  mounted() {
    this.loading();
  }
}
</script>
<style lang="stylus">

</style>