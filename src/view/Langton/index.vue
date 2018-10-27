<script>
import { mapState } from 'vuex';

export default {
  name: 'Board',
  data() {
    return {
      step: 0,
      interval: null,
      hasInit: true,
      width: 100,
      height: 100,
    };
  },
  computed: {
    ...mapState([
      'ant',
      'grid',
    ]),
  },
  watch: {
    width(val) {
      this.$store.commit('test/SET_WIDTH', val);
    },
    height(val) {
      this.$store.commit('test/SET_HEIGHT', val);
    },
  },
  methods: {
    handleInit() {
      this.hasInit = true;
    },
    handleRun() {
      if (this.interval) {
        return;
      }
      this.interval = setInterval(() => {
        this.$store.dispatch('ant/move');
        this.step += 1;
      }, 20);
      const mario = document.getElementById('mario');
      mario.play();
    },
    handleStep() {
      if (this.interval) {
        return;
      }
      const coin = document.getElementById('coin');
      coin.pause();
      coin.load();
      coin.play();
      this.$store.dispatch('ant/move');
      this.step += 1;
    },
    handlePause() {
      clearInterval(this.interval);
      this.interval = null;
      const mario = document.getElementById('mario');
      mario.pause();
      // mario.load();
    },
  },
  mounted() {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 32) {
        this.handleStep();
      }
    });
  },
};
</script>
<template src="./index.html"></template>
<style src="./index.less" scoped lang="less"></style>
