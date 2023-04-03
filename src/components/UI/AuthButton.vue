<template lang="">
  <button @click="showPopup" class="button button-primary button-auth">
    <span class="button-auth-svg"></span>
    <span class="button-text">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "AuthButton",

  methods: {
    showPopup() {
      this.$store.dispatch("popups/toggleAuthPopup", true);
    },
  },
};
</script>
<style lang="scss"></style>
