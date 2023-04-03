<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <my-logo></my-logo>
        <label class="address">
          <input
            type="text"
            class="input input-address"
            placeholder="Адрес доставки"
          />
        </label>
        <div class="buttons">
          <span class="user-name hide">user-name</span>

          <auth-button>Войти</auth-button>
          <cart-button>Корзина</cart-button>
          <!-- <my-button class="button-primary button-out hide">Выйти</my-button> -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>
<style lang="scss"></style>
