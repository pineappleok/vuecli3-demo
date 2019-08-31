<template>
  <div>
    旋转角度：
    {{orientation}}
    <p class="orientation" :class="`orientation${orientation}`">
      <span>看一看</span>
      <img src="../assets/logo.png">
    </p>
    <p class="css_orientation">
      <img src="../assets/logo.png">
    </p>
  </div>
</template>
<script>
export default {
  name: 'vue-line-chart',
  data() {
    return {
      orientation: '0'
    };
  },
  mounted() {
    window.addEventListener('orientationchange', this.handleOrientation);
  },
  destroyed() {
    window.removeEventListener('orientationchange', this.handleOrientation);
  },
  methods: {
    handleOrientation() {
      switch (window.orientation) {
        case -90: this.orientation = '270';
          break;
        case 90: this.orientation = '90';
          break;
        case 180: this.orientation = '180';
          break;
        default: this.orientation = '0';
          break;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.orientation0,
.orientation180
{
  transform: none;
}
.orientation90{
  transform: rotate(90deg);
}
.orientation270{
  transform: rotate(270deg);
}
@media all and (orientation:landscape) {
  .css_orientation{
    transform: rotate(90deg);
  }
}
</style>
