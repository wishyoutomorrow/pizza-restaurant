<template lang="">
  <button @click="showPopup" class="button button-cart">
    <span class="button-cart-svg"></span>
    <span class="button-text">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "CartButton",

  methods: {
    showPopup() {
      this.$store.dispatch("popups/toggleCartPopup", true);
    },
  },
};
</script>
<style lang="scss"></style>
