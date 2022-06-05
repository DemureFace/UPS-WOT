<template>
  <header class="header">
    <router-link to="/todo" class="header__image">
      <img src="@/assets/img/svg/logo.svg" alt="Logo" />
    </router-link>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: relative;
  padding-top: 20px;
  box-sizing: border-box;

  @include _768 {
    padding-top: 53px;
  }

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background-color: $dark;

    @include _768 {
      height: 53px;
    }
  }

  &__image {
    display: flex;
    align-items: center;
    padding-left: 20vw;
    height: 96px;
    background: $gradient;
  }
}
</style>
