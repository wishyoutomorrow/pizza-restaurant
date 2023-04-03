<template>
  <router-view></router-view>
</template>
<script>
export default {
  data() {
    return {
      auth_popup: false,
      cart_popup: false,
    };
  },
};
</script>
<style lang="scss">
@import "normalize.css";
@import "https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap&subset=cyrillic";
@import "@/assets/style/style.scss";
</style>
